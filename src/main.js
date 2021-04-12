import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from "./mock-data.js";
import mocktwo from "./mock-data-two.js";

Vue.config.productionTip = false;

let data = {
  products: mock,
  stores: mocktwo,
  currentID: 2,
  fav: [],
  tickets: [],
  getTickets(){
    return this.tickets;
  },
  addTicket(name, problem){
    this.tickets.push({
      id: this.currentID,
      name: name,
      problem: problem
    });
    this.currentID += 1;
  }
}

new Vue({
  router,
  data: data,
  render: (h) => h(App),
}).$mount("#app");
