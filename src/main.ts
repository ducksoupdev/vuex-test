import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

import {ListComponent} from "./components/list";
import {ItemComponent} from "./components/item";

Vue.use(Vuex);
Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        { path: '/', component: ListComponent },
        { path: '/item/:id', component: ItemComponent },
    ]
});

new Vue({
    el: '#app-main',
    router: router
});