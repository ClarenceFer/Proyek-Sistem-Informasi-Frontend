import axios from "axios";

console.log("API_URL =", process.env.VITE_API_URL);
const API_URL = `${process.env.VITE_API_URL}/api/auth/`;
console.log("Full API URL for signin:", API_URL + "signin");

console.log(process.env.MY_VAR);         // tampilkan nilainya
console.log(typeof process.env.MY_VAR);  // tampilkan tipe datanya

console.log(process.env.VITE_API_URL);         // tampilkan nilainya
console.log(typeof process.env.VITE_API_URL);  // tampilkan tipe datanya



class AuthService {
  login(email, password) {
    console.log("Attempting login with:", { email, password: "***" });
    return axios
      .post(API_URL + "signin", {
        email,
        password
      })
      .then(response => {
        console.log("Login response:", response.data);
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
