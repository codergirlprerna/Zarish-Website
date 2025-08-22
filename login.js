// login.js
import axios from "axios";

export async function login(identifier, password) {
  const res = await axios.post("http://localhost:1337/api/auth/local", {
    identifier, // email or username
    password,
  });
  localStorage.setItem("jwt", res.data.jwt); // Save token
  return res.data;
}
