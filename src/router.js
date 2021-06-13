import { createRouter, createWebHashHistory } from 'vue-router';

   const routes = [
        {
            path: "/",
            alias: "/index",
            name: "index",
            component: () => import("./components/index")
        },
        {
            path: "/impress",
            name: "impress",
            component: () => import("./components/impress")
        },
       {
           path: "/trip-erstellen",
           name: "trip-erstellen",
           component: () => import("./components/trip-erstellen")
       },
       {
           path: "/buchung-erstellen",
           name: "buchung-erstellen",
           component: () => import("./components/buchung-erstellen")
       },
       {
           path: "/gast-erstellen",
           name: "gast-erstellen",
           component: () => import("./components/gast-erstellen")
       },
       {
           path: "/storno",
           name: "storno",
           component: () => import("./components/storno")
       },
    ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;