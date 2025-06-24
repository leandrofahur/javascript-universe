const http = require("http");

const PORT = 8080;

// Create a server
const server = http.createServer();

server.on("request", (req, res) => {
  // console.log(req.url);
  // console.log(req.method);  

  if(req.url === "/" && req.method === "GET") {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    id: 1,
    message: "Hello World",
    status: "success",
    data: {
      name: "John Doe",
      age: 21,
    },
  }));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.statusCode = 404;
    res.end("<h1>Not Found</h1>");
  }
});

// Listen for requests on port 3000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});