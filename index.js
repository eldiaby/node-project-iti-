"use strict";
const http = require("http");
const fs = require('fs')
const htmlContent = fs.readFileSync('./index.html')

let users = [{name:'diab', age:27, id:1}, {name:'hossny', age:63, id:2}, {name:'ibrahim', age:32, id:3}]



const server = http.createServer((req, res) => {
  if (req.url == "/" && req.method == "GET") {
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify(users));
  }/* else if (req.url == "/about" && req.method == "GET") {
    res.end("hello form about");
  } */else if (req.url == "/" && req.method == "POST") {
    req.on('data', (data) => {
      let addUser = JSON.parse(data);
      addUser.id = users[users.length - 1].id + 1;
      users.push(addUser);
      res.end('hello from add user!')
    })
  } else if (req.url == '/' && req.method == 'PUT') {
    req.on('data', (chunk) => {
      let myData = JSON.parse(chunk);
      let user = users.find(ele => ele.id == myData.id)
      if (user) {
        user.name = myData.name;        
        res.end('hello from uptade users!')
      } else {
        res.end('sorry! user not found')
      }


      /*for (i = 0; i < users.length; i++) {
        if (users[i].id == myData.id) {
          users[i].name = myData.name;
          console.log('hello from uptading user ');
        }
      }*/
    })
  } else if (req.url == '/' && req.method == 'DELETE') { 
    req.on('data', (chunk) => {
      let myData = JSON.parse(chunk);
      let uptadeUsers = users.filter(ele => ele.id != myData.id)
      if (uptadeUsers.length == users.length) {
        res.end('user not found!!');
      } else {
        users = uptadeUsers;
        res.end('hello from delede users!')
      }
    })
  } else {
    res.end("hello from the other side!");
  }
});

server.listen(8000, () => console.log("server is start"));
