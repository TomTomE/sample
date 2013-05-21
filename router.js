var fs = require("fs");

function main(app){
    app.get("/", function(request, response){
        console.log(request.headers['user-agent']);
        fs.readFile("index.html", function(error, data){
            response.writeHead(200, {'Content-Type':'text/html; charset=EUC-KR'});
            response.end(data);
        });
    });
}

exports.main = main;