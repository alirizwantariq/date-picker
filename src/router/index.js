import { createRouter, createWebHistory } from "vue-router";

import datePicker from "../views/datePicker.vue";
import home from "../components/mainView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/datepicker",
    name: "datePicker",
    component: datePicker,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
