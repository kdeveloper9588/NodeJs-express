const http = require("http");

http
  .createServer(function (req, res) {
    //res.writeHead(200, {
    //"set-cookie": ["yummy_cookie = choco", "tasty_cookie = strawberry"],
    //});
    res.end("Cookie!!");
  })
  .listen(3000);
