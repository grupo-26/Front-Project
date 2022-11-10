import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Header from './components/sections/Header.vue';

/*
createApp(App).use(router).mount('#app')
*/

const app = createApp(App);
app.use(router);
app.component('Header', Header);
app.mount('#app');