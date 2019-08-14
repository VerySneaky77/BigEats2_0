import Axios from "axios";

// Order apis
export default {
  getOrdersByPhone(phone) {
    return Axios.get("/orders/" + phone);
  },
  postOrders() {
    return Axios.post("/orders");
  },
  getAdminOrders() {
    return Axios.get("/admin/orders");
  },
  postAdminOrders(id) {
      return Axios.post("/admin/orders/" + id);
  },
  deleteAdminOrders(id) {
    return Axios.delete("/admin/orders/" + id);
  }
}