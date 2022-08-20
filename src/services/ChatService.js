import axios from "axios";

const getData = (json, setSmth, n) => {
  axios.get(json).then((res) => {
    const result = res.data;
    setSmth(result);
    if (n === "lc") {
      localStorage.localContacts = JSON.stringify(result);
    } else {
      localStorage.localMessages = JSON.stringify(result);
    }
  });
};

export default getData;
