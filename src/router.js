import Vue from "vue";
import Router from 'vue-router';
import ContactList from './components/ContactList.vue'

Vue.use(Router);

const routes = [
    { path: '/', component: ContactList}
];
const router = new Router({
    // mode: 'history',
    routes
})
export default router;