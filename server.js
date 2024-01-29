import express from "express";

const app = express();

app.listen('3000', () => {
    console.log("Server is listening on port 3000...");
});

app.get("/messages", (reguest, response) => {
    response.json({ message: "Hello, World!"});
});

app.post("/messages", (request, response) => {
    response.json({ message: "Hello, World!" });
  });

app.use(express.json());

// app.get("/", (req, res) => {
//     res.send({message: "Hello!"})
//     })
