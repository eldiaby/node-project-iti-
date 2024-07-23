"use strict"
let users = [{name:'diab', age:27, id:1}, {name:'hossny', age:63, id:2}, {name:'ibrahim', age:32, id:3}]


const get = (req, res) => {
  res.json({Message : users})
}

const add =  (req, res) => {
  req.body.id = users[users.length - 1].id + 1;
  users.push(req.body)
  res.json({Message:"user have been added"})
}

const deleteUser = (req, res) => {
  users = users.filter(ele=>ele.id!=req.params.id)
  res.send({Message:"user have been deleted"})
}


const update =  (req, res) => {
  let foundedUser = users.find(ele => ele.id == req.params.id)
  foundedUser.name = req.body.name;
  res.send({ Message: "user have been deleted" })
}


export {
  get,
  add,
  deleteUser,
  update
}