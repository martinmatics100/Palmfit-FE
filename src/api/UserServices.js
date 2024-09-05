import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

const urlGetAllUsers = `${baseUrl}/api/v1/auth/get-users`;

export const fetchUsers = async () => {
  try {
    const response = await axios.get(urlGetAllUsers);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchUserById = async (userId) => {
  const urlGetUserById = `${baseUrl}/api/v1/auth/get-user/${userId}`;
  try {
    const response = await axios.get(urlGetUserById);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error;
  }
};

export const fetchFilteredUsers = async (value) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // Filter users based on the input value
    const filteredUsers = users.filter((user) => {
      return (
        value &&
        user &&
        user.name &&
        user.name.toLowerCase().includes(value.toLowerCase())
      );
    });

    return filteredUsers; // Return the filtered users
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
