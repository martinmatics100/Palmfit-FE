import React, { useEffect, useState } from "react";
import "./SinglePage.scss";
import SinglePageImage from "../../Assets/profilePicAvatar.png";
import LineChart from "../../components/AdminComponents/AdminDashboard/LineChart";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import Charts from "../../components/AdminComponents/Charts/Charts";
import List from "../../components/AdminComponents/Table/Table";

const SinglePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="loader-container">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="single">
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src={SinglePageImage} alt="" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">Martin Nwatu</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">
                      martinchukwuemeka67@gmail.com
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">09131518262</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Gender:</span>
                    <span className="itemValue">Male</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Date of Birth:</span>
                    <span className="itemValue">15th October 2023</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Status:</span>
                    <span className="itemValue">Active</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">11b olewe street Aba</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Account Status:</span>
                    <span className="itemValue">Active</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">11b olewe street Aba</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Charts aspect={3 / 1} title="User Spending ( Last 6 Months)" />
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Last Transactions</h1>
            <List />
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePage;
