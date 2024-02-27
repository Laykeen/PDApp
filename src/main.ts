import "./app.pcss";
import "./custom.pcss";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app") as HTMLElement,
});

export default app;