import Axios from "axios";

// Passport functionality
export default {
  // Gets all menu items
  getMenus: function() {
    return Axios.get("/api/menu-items");
  },
    // Deletes a menu item with given id
    deleteMenu: function(id) {
      return Axios.delete("/api/menus/" + id);
    },
};