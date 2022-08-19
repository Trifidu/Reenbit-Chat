import axios from "axios";

const getData = (json, setSmth) => {
  axios.get(json).then((res) => {
    const result = res.data;
    setSmth(result);
  });
};

export default getData;
