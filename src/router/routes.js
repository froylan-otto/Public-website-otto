const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/contact",
    name: "contact",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Contact.vue") }],
  },

  {
    path: "/presentation",
    name: "presentation",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/presentation.vue") }],
  },

  {
    path: "/products",
    name: "products",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Products.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
