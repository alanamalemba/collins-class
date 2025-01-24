import http from "http";
import url from "url";

const users = [];

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
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        res.end(JSON.stringify(filteredUsers));
      } else {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
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
  } else if (method === "POST") {
    // CREATING A RESOURCE/ USER
    if (pathname === "/user") {
      let data = "";

      // listen to data event
      req.on("data", (chunk) => {
        data += chunk.toString();
      });

      // listen for end of streaming data
      req.on("end", () => {
        const userObj = JSON.parse(data);
        users.push(userObj);
      });

      res.end("User saved successfully!");
    }
  }

  //
});

// starting the server
server.listen(3000, () => {
  console.log("Server running at port 3000");
});
