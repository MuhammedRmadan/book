/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

window.Vue.use(VueRouter);

import BooksIndex from './components/books/BooksIndex.vue';
import booksCreate from './components/books/BooksCreate.vue';
import booksEdit from './components/books/BooksEdit.vue';

const routes = [
    {
        path: '/',
        components: {
            booksIndex: BooksIndex
        }
    },
    {path: '/books/create', component: booksCreate, name: 'createBook'},
    {path: '/books/edit/:id', component: booksEdit, name: 'editBook'},
]

const router = new VueRouter({routes})

const app = new Vue({router}).$mount('#app')
