import React, { useState, useEffect } from "react";
import "./Datatable.scss";
import photo from "../../../../Assets/profilePicAvatar.png";

import { Link } from "react-router-dom";
import { fetchUsers } from "../../../../api/UserServices";

const Datatable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedUsers, setCheckedUsers] = useState({});
  const [selectAll, setSelectAll] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    // Ensure fetchData runs only once
    const fetchData = async () => {
      try {
        if (users.length === 0) {
          // Ensure that users aren't fetched again if they already exist
          const result = await fetchUsers();
          setUsers(result);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);

    const newCheckedUsers = {};
    if (newSelectAll) {
      currentUsers.forEach((user) => {
        newCheckedUsers[user.id] = true;
      });
    }
    setCheckedUsers(newCheckedUsers);
  };

  const handleCheckboxChange = (id) => {
    setCheckedUsers((prevCheckedUsers) => ({
      ...prevCheckedUsers,
      [id]: !prevCheckedUsers[id],
    }));
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(users.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
      setSelectAll(false);
      setCheckedUsers({});
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setSelectAll(false);
      setCheckedUsers({});
    }
  };

  const handlePageClick = (number) => {
    setCurrentPage(number);
    setSelectAll(false);
    setCheckedUsers({});
  };

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const pageNumbers = [];
  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pageNumbers.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push(
        1,
        "...",
        // totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pageNumbers.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }
  }

  const selectedCount = Object.values(checkedUsers).filter(Boolean).length;

  return (
    <div className="table-container">
      <div className="table">
        <div className="table-header">
          <p>Palmfit Users</p>
          <div>
            {/* <input type="search" placeholder="search..." /> */}
            <input
              type="button"
              className="add-new"
              value={`Deactivate Selected${
                selectedCount > 0 ? ` (${selectedCount})` : ""
              }`}
              disabled={selectedCount === 0}
            />
          </div>
        </div>
        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th>S No</th>
                <th>Image</th>
                <th>Full name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Username</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      checked={checkedUsers[user.id] || false}
                      onChange={() => handleCheckboxChange(user.id)}
                    />
                  </td>
                  <td>{indexOfFirstUser + index + 1}</td>
                  <td>
                    <img src={user.imageUrl || photo} alt="avatar" />
                  </td>
                  <td>
                    <Link to={`/user-management/user/${user.id}`}>
                      {user.firstName} {user.lastName}
                    </Link>
                  </td>
                  <td>
                    {user.email || (
                      <span className="default-message">
                        Email Not Provided
                      </span>
                    )}
                  </td>
                  <td>
                    {user.gender === 1 ? (
                      "Male"
                    ) : user.gender === 2 ? (
                      "Female"
                    ) : (
                      <span className="default-message">Not available</span>
                    )}
                  </td>

                  <td>
                    {user.userName || (
                      <span className="default-message">Not available</span>
                    )}
                  </td>
                  <td>
                    <button>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <div onClick={prevPage}>
            <i className="fa-solid fa-angles-left"></i>
          </div>
          {pageNumbers.map((number) => {
            if (number === "...") {
              return (
                <span key={number} className="ellipsis">
                  {number}
                </span>
              ); // Render ellipsis as a non-clickable span
            }
            return (
              <div
                key={number}
                onClick={() => handlePageClick(number)}
                className={number === currentPage ? "active" : ""}
              >
                {number}
              </div>
            );
          })}
          <div onClick={nextPage}>
            <i className="fa-solid fa-angles-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datatable;
