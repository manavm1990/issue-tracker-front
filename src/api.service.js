import ky from "ky";

const BASE_URL = "https://api.github.com/";

export default {
  getIssues() {
    return ky.get(`${BASE_URL}repos/rails/rails/issues`).json();
  },
};
