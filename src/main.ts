import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

import "./ui/assets/main.css";

const app = createApp(App);
app.use(createPinia()); // Create the root store

app.mount("#app");
