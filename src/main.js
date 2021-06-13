import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import '../public/layout/styles.css';

const app = createApp(App);
app.use(router);


app.mount('#app');