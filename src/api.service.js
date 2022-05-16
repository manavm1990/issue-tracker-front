import ky from "ky";

const BASE_URL = "https://api.github.com/";

export default {
  getIssues({ queryKey }) {
    const [_, owner, repo] = queryKey;
    return ky.get(`${BASE_URL}repos/${owner}/${repo}/issues`).json();
  },
};
