import "./bootstrap";

import { createApp } from "vue";
import App from "./root/App.vue";
import { router } from "./root/router/routes";

const app = createApp(App);

app.use(router).mount("#root");
