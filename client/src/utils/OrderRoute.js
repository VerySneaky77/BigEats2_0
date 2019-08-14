import Axios from "axios";

// Order apis
export default {
  getOrders(id) {
    return Axios.get("/orders/" + id);
  },
  postOrders(id) {
    return Axios.post("/orders/" + id);
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