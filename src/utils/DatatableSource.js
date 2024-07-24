// Temporary data

import picture from "../Assets/profilePicAvatar.png";

export const userColumns = [
  { field: "id", headerName: "ID", width: 40 },
  {
    field: "user",
    headerName: "User",
    width: 250,
    renderCell: (params) => {
      const { img, username } = params.row;
      return (
        <div className="cellWithImg">
          <img className="cellimg" src={img} alt="avatar" />
          {username}
        </div>
      );
    },
  },
  {
    field: "fullname",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    // valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    renderCell: (params) => {
      const { firstname, lastname } = params.row;
      return (
        <div>
          <span>
            {firstname} {lastname}
          </span>
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 300 },
  { field: "gender", headerName: "Gender", width: 90 },
  {
    field: "status",
    headerName: "Status",
    width: 80,
    renderCell: (params) => {
      const { status } = params.row;
      return <div className={`cellWithStatus ${status}`}>{status}</div>;
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Martinmatics",
    firstname: "John",
    lastname: "Simon",
    img: picture,
    status: "active",
    email: "martinchukwuemeka67@gmail.com",
    gender: "male",
  },
  {
    id: 2,
    username: "Martinmatics",
    firstname: "James",
    lastname: "Nwatu",
    img: picture,
    status: "offline",
    email: "martinchukwuemeka67@gmail.com",
    gender: "male",
  },
  {
    id: 3,
    username: "Martinmatics",
    firstname: "Vivian",
    lastname: "Nwatu",
    img: picture,
    status: "dnd",
    email: "martinchukwuemeka67@gmail.com",
    gender: "male",
  },
  {
    id: 4,
    username: "Martinmatics",
    firstname: "Martin",
    lastname: "Nwatu",
    img: picture,
    status: "active",
    email: "martinchukwuemeka67@gmail.com",
    gender: "male",
  },
  {
    id: 5,
    username: "Martinmatics",
    firstname: "Martin",
    lastname: "Nwatu",
    img: picture,
    status: "active",
    email: "martinchukwuemeka67@gmail.com",
    gender: "male",
  },
  {
    id: 6,
    username: "Martinmatics",
    firstname: "Martin",
    lastname: "Nwatu",
    img: picture,
    status: "active",
    email: "martinchukwuemeka67@gmail.com",
    gender: "male",
  },
  {
    id: 7,
    username: "Martinmatics",
    firstname: "Martin",
    lastname: "Nwatu",
    img: picture,
    status: "active",
    email: "martinchukwuemeka67@gmail.com",
    gender: "male",
  },
  {
    id: 8,
    username: "Martinmatics",
    firstname: "Martin",
    lastname: "Nwatu",
    img: picture,
    status: "active",
    email: "martinchukwuemeka67@gmail.com",
    gender: "male",
  },
  {
    id: 9,
    username: "Martinmatics",
    firstname: "Martin",
    lastname: "Nwatu",
    img: picture,
    status: "active",
    email: "martinchukwuemeka67@gmail.com",
    gender: "male",
  },
  {
    id: 10,
    username: "Martinmatics",
    firstname: "Martin",
    lastname: "Nwatu",
    img: picture,
    status: "active",
    email: "martinchukwuemeka67@gmail.com",
    gender: "male",
  },
  {
    id: 11,
    username: "Martinmatics",
    firstname: "Martin",
    lastname: "Nwatu",
    img: picture,
    status: "active",
    email: "martinchukwuemeka67@gmail.com",
    gender: "male",
  },
  {
    id: 12,
    username: "Martinmatics",
    firstname: "Martin",
    lastname: "Nwatu",
    img: picture,
    status: "active",
    email: "martinchukwuemeka67@gmail.com",
    gender: "male",
  },
  {
    id: 13,
    username: "Martinmatics",
    firstname: "Martin",
    lastname: "Nwatu",
    img: picture,
    status: "active",
    email: "martinchukwuemeka67@gmail.com",
    gender: "male",
  },
  {
    id: 14,
    username: "Martinmatics",
    firstname: "Martin",
    lastname: "Nwatu",
    img: picture,
    status: "active",
    email: "martinchukwuemeka67@gmail.com",
    gender: "male",
  },
  {
    id: 15,
    username: "Martinmatics",
    firstname: "Martin",
    lastname: "Nwatu",
    img: picture,
    status: "active",
    email: "martinchukwuemeka67@gmail.com",
    gender: "male",
  },
];
