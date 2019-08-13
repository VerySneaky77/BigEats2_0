import Axios from "axios";

// Menu apis
export default {
  getMenu() {
    return Axios.get("/menu");
  },
  getAdminMenu() {
    return Axios.get("/admin/menu");
  },
  postAdminMenu() {
      return Axios.post("/admin/menu");
  },
  deleteAdminMenu(id) {
    return Axios.delete("/admin/menu/" + id);
  }
}