const http = require("http");

const server=http.createServer((req,res) => {
    console.log(req.url);
    res.end("Hello World");

}
if(req.url === "/"){
    res.end("home page");
}
elseif(req.url)
});
server.listen(3002, () => {
    console.log("server is running on port 3002");
});