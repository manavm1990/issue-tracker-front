import ky from "ky";

const BASE_URL = "https://api.github.com/";

export default {
  getIssues(owner = "rails", repo = "rails") {
    return ky.get(`${BASE_URL}repos/${owner}/${repo}/issues`).json();
  },
};
