require('./bootstrap');

// window.Vue = require('vue');
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
 

const routes = [
    { path: '/dash', component:  require('./components/home.vue').default},
    { path: '/blank', component: require('./components/blankPage.vue').default }
  ]



Vue.component('example-component', require('./components/ExampleComponent.vue').default);


Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);
 

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

//   @yield('content')
const app = new Vue({
    el: '#app',
    router
});
