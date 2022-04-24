import { createWebHistory, createRouter } from "vue-router";
import Randomizer from '../components/Randomizer'
import Home from '../components/Home'
import Number from '../components/Number'
import Coinflip from '../components/Coinflip'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/randomizer",
        name: "Randomizer",
        component: Randomizer
    },
    {
        path: "/number",
        name: "Number",
        component: Number
    },
    {
        path: "/coinflip",
        name: "Coinflip",
        component: Coinflip
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;