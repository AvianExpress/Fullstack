import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home';
import CreateComponent from '@/components/clients/Create';
import EditComponent from '@/components/clients/Edit';
import LoginComponent from '@/components/clients/Login';
//import ListComponent from '@/components/clients/List';
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: HomeComponent },
  //  { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/create', name: 'Create', component: CreateComponent },
    //{ path: '/list', name: 'List', component: ListComponent },
    { path: '/edit', name: 'Edit', component: EditComponent },
    { path: '/login', name: 'Logub', component: LoginComponent }
  ]
});