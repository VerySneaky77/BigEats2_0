import Axios from "axios";

// Visitor apis
export default {
  getInfoById(id) {
    return Axios.get("/orders/" + id);
  },
  getInfoByPhone(phone) {
    return Axios.get("/orders/" + phone);
  },
  postInfoByPhone(phone) {
    return Axios.post("/orders/" + phone);
  },
  postInfoById(id) {
    return Axios.post("/orders/" + id);
  }
}