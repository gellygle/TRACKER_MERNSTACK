import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:5000/user",
  timeout: 3000,
});

export const UserService = {
  login: async (payload) => {
    try {
      const response = await request.post("/login", payload);
      // console.log(response);
      if (!response) return null;
      return response.data;
    } catch (error) {
      //sending error message if login failed..
      console.error("Login failed:", error.response.data.message);
    }
  },

  signup: async (payload) => {
    try {
      const response = await request.post("/signup", payload);
      // const registeredUser=response
      // console.log(registeredUser)
      //send  message as response
      console.log(response.data.message);
      if (!response) return null;
      return response.data;
    } catch (error) {
      console.error("Registration failed:Cannot be empty ");
    }
  },

  getUser: async () => {
    try {
        const response = await request.get("/user");
        console.log(response.data.userRecords);
        if (!response) return null;
        return response.data.userRecords;
      } catch (error) {
        console.error(" failed:", error.response.data.message);
      }
  },
 
 
};
