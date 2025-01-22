import http from "http";
import url from "url";

const users = [];

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    // get route handlers
    switch (req.url) {
      case "/users":
        res.writeHead(200);
        res.end(JSON.stringify(users));
        break;
      case "/users/2":
        const user = users.find((user) => user.id === 2);
        res.writeHead(2000);
        res.end(JSON.stringify(user));
        break;
      case "/users/search":
        const parsedUrl = url.parse(req.url, true);
        const name = parsedUrl.query.name;
        const filteredUsers = users.filter((user) => user.name.includes(name)); // Peterson => Pet
        res.writeHead(200);
        res.end(JSON.stringify(filteredUsers));
        break;
      default:
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not Found" }));
    }
  } else if (req.method === "POST") {
    // post route handler
    switch (req.url) {
      case "/users":
        let body = "";
        req.on("data", (chunk) => {
          console.log("chunk received");

          console.log(chunk.toString());
          body += chunk.toString();
        });
        req.on("end", () => {
          const userObj = JSON.parse(body);
          users.push(userObj);
          res.writeHead(200);
          res.end("user added successfully!");
        });

        break;
      default:
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not Found" }));
    }
  } else if (req.method === "PUT") {
    // put route handler
  } else if (req.method === "PATCH") {
    // patch route handler
  } else if (req.method === "DELETE") {
    // delete route handler
  } else {
    // handle invalid request method
  }
});

server.listen(3000, () => {
  console.log("Server running at port 3000");
});
