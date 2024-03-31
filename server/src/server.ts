
import Express  from "express";

const app = Express();
app.use(Express.json());
const port = 8080;

app.get("/", (request, response) => {
    response.send("Teste");
});

app.listen(port, () => {
    console.log("Rodando servidor");
});