import Axios from "axios";

// Visitor apis
export default {
  getVisitorInfoById(id) {
    return Axios.get("/orders/" + id);
  },
  getVisitorInfoByPhone(phone) {
    return Axios.get("/orders/" + phone);
  },
  postVisitorInfo() {
    return Axios.post("/orders");
  }
}