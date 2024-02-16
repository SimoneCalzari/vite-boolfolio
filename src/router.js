import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppAboutMe from "./pages/AppAboutMe.vue";
import NotFound from "./pages/NotFound.vue";
import Project from "./pages/Project.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects",
      name: "projects",
      component: AppProjects,
    },
    {
      path: "/about-me",
      name: "about",
      component: AppAboutMe,
    },
    {
      path: "/projects/:slug",
      name: "project",
      component: Project,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export { router };
