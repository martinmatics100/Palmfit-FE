import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

const urlGetAllUsers = `${baseUrl}/api/v1/auth/get-users`;

export const fetchUsers = async () => {
  try {
    const response = await axios.get(urlGetAllUsers);
    return response.data; // Assuming the API returns { data: [...] }
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchUserById = async (userId) => {
  const urlGetUserById = `${baseUrl}/api/v1/auth/get-user/${userId}`;
  try {
    const response = await axios.get(urlGetUserById);
    return response.data; // Assuming the API returns the user data directly
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error;
  }
};
