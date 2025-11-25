import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

const GStore = reactive({ flashMessage: ''})//create a global object to share across multiple components
app.provide('GStore', GStore)// make this object available for components in our app to use(inject)

app.mount("#app");
