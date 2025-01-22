import http from "http";
import url from "url";

const users = [
  {
    id: 1,
    name: "John James",
    age: 88,
  },
  {
    id: 2,
    name: "Peter Trump",
    age: 33,
  },
  {
    id: 3,
    name: "John Alan",
    age: 33,
  },
];

// creating a server
const server = http.createServer((req, res) => {
  // this callback function listens for requests

  // extracting url information into an object
  const parsedUrlObj = url.parse(req.url, true);

  // extract necessary properties
  const pathname = parsedUrlObj.pathname;
  const query = parsedUrlObj.query;
  const method = req.method;

  // check what http method it is
  if (method === "GET") {
    //handle all requests with routes having GET method
    if (pathname === "/") {
      res.writeHead(200);
      res.end("Request successful");
    } else if (pathname === "/users") {
      // first check if query parameters is in request
      if (query.name) {
        // handle query parameter
        const name = query.name;
        const filteredUsers = users.filter((user) =>
          user.name.toLowerCase().includes(name.toLowerCase())
        );
        res.writeHead(200);
        res.end(JSON.stringify(filteredUsers));
      } else {
        res.writeHead(200);
        res.end(JSON.stringify(users));
      }
    } else if (pathname.includes("/user/")) {
      // handle path parameters
      const pathNameArray = pathname.split("/");
      const userId = pathNameArray[2];
      const requestedUser = users.find((user) => user.id === Number(userId));

      res.writeHead(200);
      res.end(JSON.stringify(requestedUser));
    }
  }

  //

  res.end();
});

// starting the server
server.listen(3000, () => {
  console.log("Server running at port 3000");
});
