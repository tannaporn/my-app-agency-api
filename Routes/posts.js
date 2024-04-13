const express = require('express');
const router = express.Router();
const {read , list,create,update,remove} = require("../Controllers/posts")
//http://localhost:4000/api/postsdelete
router.get('/posts',list)

router.get('/posts/:id',read)

router.post('/posts',create)

router.put('/posts/:id',update)

router.delete('/posts/:id',remove)

module.exports = router