import Home from "@/components/Home.vue";
import SignUp from "@/components/SignUp.vue";
import {createRouter,createWebHistory} from 'vue-router';
import Login from "@/components/Login.vue";
import Add from "@/components/Add.vue";
import Update from "@/components/Update.vue";

const routes= [
    {
        name:'Home',
        component:Home,
        path:'/',
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/Sign-Up',
    },
    {
        name: 'LoginPage',
        component: Login,
        path:'/Login'
    },
    {
        name: 'Add',
        component: Add,
        path:'/Add'
    },
    {
        name: 'Update',
        component: Update,
        path:'/Update'
    }
];

const router =createRouter({
      history:createWebHistory(),
      routes,
});

export default router;


