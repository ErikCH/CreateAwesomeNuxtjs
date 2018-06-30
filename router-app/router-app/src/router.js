import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Me from "./views/Me.vue";
import UserProfile from "./views/UserProfile.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/me/:id",
      name: "me",
      component: Me,
      children: [
        {
          path: "UserProfile",
          name: "UserProfile",
          component: UserProfile
        }
      ]
    }
  ]
});
