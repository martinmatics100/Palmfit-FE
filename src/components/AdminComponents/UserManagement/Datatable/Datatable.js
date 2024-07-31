import React, { useState, useEffect } from "react";
import "./Datatable.scss";
import DatatableSource from "../../../../utils/DatatableSource";

const Datatable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      // Using dummy data for now
      const result = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve(
              DatatableSource.map((user, index) => ({
                ...user,
                id: index + 1,
              }))
            ),
          1000
        )
      );
      setUsers(result);
    };

    fetchData();
  }, []);

  // Calculate the indices for the users to be displayed
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Handle next page
  const nextPage = () => {
    if (currentPage < Math.ceil(users.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Generate page numbers with ellipsis logic
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

  return (
    <div className="table">
      <div className="table-header">
        <p>Palmfit Users</p>
        <div>
          <input type="search" placeholder="search..." />
          <button className="add-new">+ Add New</button>
        </div>
      </div>
      <div className="table-section">
        <table>
          <thead>
            <tr>
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
                <td>{indexOfFirstUser + index + 1}</td>
                <td>
                  <img src={user.avatar} alt="avatar" />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.username}</td>
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
              onClick={() => setCurrentPage(number)}
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
  );
};

export default Datatable;
