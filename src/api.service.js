import ky from "ky";

const BASE_URL = "https://api.github.com/users/";

export default {
  show(username = "manavm1990") {
    return ky.get(BASE_URL + username).json();
  },
};
