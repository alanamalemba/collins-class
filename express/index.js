import express from "express";

const users = [
  
];
const PORT = 3000;

const app = express();

// middleware that parses json data
app.use(express.json());

// GET requests
// getting all users
app.get("/users", (req, res) => {
  if (req.query.name) {
    const userName = req.query.name;

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(userName.toLowerCase())
    );

    res.status(200).json(filteredUsers);
  } else {
    res.status(200).json(users);
  }
});

// path parameters
app.get("/user/:uid", (req, res) => {
  const userId = req.params.uid;
  const requestedUser = users.find((user) => user.id === Number(userId));
  res.status(200).json(requestedUser);
});

app.post("/user", (req, res) => {
  const userObj = req.body;

  users.push(userObj);
  res.status(201).json({ message: "Success" });
});

app.listen(PORT, () => {
  console.log("My server running at port: " + PORT);
});

