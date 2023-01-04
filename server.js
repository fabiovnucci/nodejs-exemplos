const http = require("http");

http.createServer((request,response)=>{
    response.writeHead(200, {"Content-Type":"application/json"});
    if (request.url === "/produto"){
        response.end(
            JSON.stringify({
                message: "Rota de produto",
            })
        );
    }
    if (request.url === "/usuarios"){
        response.end(
            JSON.stringify({
                message: "Rota de usuarios",
            })
        );
    }


response.end(
    JSON.stringify({
        message: "Qualquer outra rota",
    })
);

})
.listen(4002, () => console.log("Servidor esta rodando na porta 4002"));
    
    
    
    
    



    
    //response.end("Minha primeira aplicação com Nodejs");
    //response.end(
        //JSON.stringify({
        //    message: "Minha primeira aplicação com Nodejs"
      //  })
    //);