let http = require("http");
const cookie = require("cookie");

http
  .createServer(function (req, res) {
    console.log(req.headers.cookie);
    let cookies = cookie.parse(req.headers.cookie);
    console.log(cookies);
    res.writeHead(200, {
      "set-cookie": ["yummy_cookie = choco", "tasty_cookie = strawberry"],
    });
    res.end("Cookie!!");
  })
  .listen(5000);
