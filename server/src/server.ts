import Express from "express";
import taskRoute from "./routes/task.route";
import cors from "cors";

const app = Express();
app.use(Express.json());


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["POST", "GET", "HEAD", "DELETE", "PATCH", "PUT"]
}));

const port = 5002;

app.use("/tasks", taskRoute);

app.listen(port);