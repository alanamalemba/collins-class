import http from "http";

// creating a simple server using the http module
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.end("Hello world!");
});

// port number -> uniquely identify a server
const port = 3000;

// making the server listen to requests
server.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
