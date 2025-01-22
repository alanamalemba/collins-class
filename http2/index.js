import http from "http";

const PORT = 3000;

const users = [
  {
    name: "Peter",
    age: 24,
  },
  {
    name: "James",
    age: 30,
  },
];

// create the server
const server = http.createServer((req, res) => {
  const { method, url } = req;

  // set res header
  res.setHeader("Content-Type", "application/json");

  if (method === "GET") {
    res.writeHead(200);
    const user = users[0];
    res.end(JSON.stringify(user));
  } else if (method === "POST") {
    users.push({
      name: "Lennox",
      age: 40,
    });
    res.writeHead(201);
    res.end(JSON.stringify(users));
  } else if (method === "PATCH") {
    const newName = "Rob";

    users = users.map((user) =>
      user.name === "James" ? { ...user, name: newName } : user
    ); // ternary operator
    res.writeHead(200);
    res.end(JSON.stringify(users));
  } else if (method === "DELETE") {
    users = users.filter((user) => user.name !== "Peter");
    res.writeHead(200);
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Request not supported" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
