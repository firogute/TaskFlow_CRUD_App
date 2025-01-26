import express from "express";
import db from "./db.js";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());

app.use(express.json());

const port = 3000;
db.connect().then(() => {
  console.log("DB connected");
});

// create a todo

app.post("/todos", async (req, res) => {
  try {
    const { description, startDate, startTime, endDate, endTime } = req.body;
    if (!description) {
      return res.status(400).json({ error: "Description is required" });
    }

    const newTodo = await db.query(
      `INSERT INTO todo (description, startDate,startTime, endDate, endTime ) VALUES ($1, $2,$3,$4,$5) RETURNING *`,
      [description, startDate, startTime, endDate, endTime]
    );

    res.json(newTodo.rows[0]);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await db.query("select * from todo");
    res.json(allTodos.rows);
    console.log(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get specific todo

app.get("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const aTodo = await db.query(`select * from todo where todo_id = ${id}`);
    res.send(aTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// updage a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateTodo = await db.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
      [description, id]
    );

    res.send(updateTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await db.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json("Todo was Deleted");
  } catch (error) {
    console.error(error.message);
  }
});
app.listen(port, (req, res) => {
  console.log("The server is connected");
});
