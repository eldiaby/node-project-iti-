let posts = [{ title: "post 1", description: "desk 1", id: 1 }]



const getAllPosts = (req, res) => {
  res.json({message:"hello", posts})
}
const addPost = (req, res) => {
  req.body.id = posts[posts.length - 1].id + 1;
  posts.push(req.body)
  res.json({message:"added"})
}

const updatePost = (req, res) => {
  let post = posts.find(ele => ele.id == req.params.id);
  post.title = req.body.title;
  res.json({message:"updated"})
}

const deldtePost =  (req, res) => {
  let post = posts.filter(ele => ele.id != req.params.id);
  res.json({message:"deleted"})
}




export {
  getAllPosts,
  addPost,
  updatePost,
  deldtePost
}