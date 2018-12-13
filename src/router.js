import Vue from "vue";
import Router from 'vue-router';
import ContactList from './components/ContactList.vue'
import Login from './components/Auth/Login'

Vue.use(Router);

const routes = [
    { path: '/', component: ContactList},
    { path: '/login', component: Login}
];
const router = new Router({
    mode: 'history',
    routes
})
export default router;