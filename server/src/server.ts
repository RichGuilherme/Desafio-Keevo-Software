import Express from "express";
import taskRoute from "./route/task.route";

const app = Express();
app.use(Express.json());
const port = 4000;

app.use("/task", taskRoute);

app.listen(port);