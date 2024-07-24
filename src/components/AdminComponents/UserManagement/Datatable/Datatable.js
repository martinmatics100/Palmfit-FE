import React from "react";
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../../../utils/DatatableSource";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import EmailIcon from "@mui/icons-material/Email";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Link } from "react-router-dom";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 400,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="deleteButton">
              <DeleteIcon titleAccess="Delete" />
            </div>
            <div className="editButton">
              <EditIcon titleAccess="Edit" />
            </div>
            <Link to={`user/${params.row.id}`}>
              <div className="viewButton">
                <VisibilityIcon titleAccess="View" />
              </div>
            </Link>
            <div className="resetButton">
              <VpnKeyIcon titleAccess="Reset Password" />
            </div>
            <div className="emailButton">
              <EmailIcon titleAccess="Send Email" />
            </div>
            <div className="promoteToAdminButton">
              <AdminPanelSettingsIcon titleAccess="Promote to admin" />
            </div>
            <div className="deactivateButton">
              <BlockIcon titleAccess="Deactivate" />
            </div>
            <div className="activateButton">
              <PlayCircleIcon titleAccess="Activate" />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 10, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 25, 50]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
