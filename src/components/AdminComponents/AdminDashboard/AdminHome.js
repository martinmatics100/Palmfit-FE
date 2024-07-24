import React, { useEffect, useState } from "react";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import FeedbackIcon from "@mui/icons-material/Feedback";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NairaIcon from "./NairaIcon";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const AdminHome = () => {
  const [stats, setStats] = useState({
    totalUsers: 30,
    activeUsers: 25,
    totalSubscriptions: 14,
    monthlyRevenue: 2000,
    pendingSupportTickets: 5,
    userFeedback: 17,
    contentUploaded: 13,
    reportsGenerated: 9,
  });

  // useEffect(() => {
  //   // Replace this URL with your actual backend API endpoint
  //   const fetchStats = async () => {
  //     try {
  //       const response = await fetch("/api/admin/stats");
  //       const data = await response.json();
  //       setStats(data);
  //     } catch (error) {
  //       console.error("Error fetching stats:", error);
  //     }
  //   };

  //   fetchStats();
  // }, []);

  return (
    <div className="p-3 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <GroupIcon className="fs-1 text-primary" />
              <div>
                <span>Total users</span>
                <h2>{stats.totalUsers}</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <PersonAddIcon className="fs-1 text-success" />
              <div>
                <span>Active Users</span>
                <h2>{stats.activeUsers}</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <SubscriptionsIcon className="fs-1 text-warning" />
              <div>
                <span>Total Subscriptions</span>
                <h2>{stats.totalSubscriptions}</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <NairaIcon className="fs-1 text-success" />
              <div>
                <span>Monthly Revenue</span>
                <h2>{stats.monthlyRevenue}</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <SupportAgentIcon className="fs-1 text-danger" />
              <div>
                <span>Pending Support Tickets</span>
                <h2>{stats.pendingSupportTickets}</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <FeedbackIcon className="fs-1 text-primary" />
              <div>
                <span>User Feedback</span>
                <h2>{stats.userFeedback}</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <CloudUploadIcon className="fs-1 text-info" />
              <div>
                <span>Content Uploaded</span>
                <h2>{stats.contentUploaded}</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <AssessmentIcon className="fs-1 text-warning" />
              <div>
                <span>Reports Generated</span>
                <h2>{stats.reportsGenerated}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 p-3">
            <LineChart />
          </div>
          <div className="col-12 col-md-4 p-3">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
