import dva from "dva";
import "babel-polyfill";
import "./index.less";
import models from "./models";
//import browserHistory from 'history/createBrowserHistory'
import { browserHistory } from "dva/router";
// 1. Initialize
const app = dva({
  history: browserHistory
});

// 2. Plugins
// app.use({});

// 3. Model
models.forEach((m) => {
  app.model(m);
});

// 4. Router
app.router(require("./router"));

// 5. Start
app.start("#root");
