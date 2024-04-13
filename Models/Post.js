const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
      title: {
        type: String,
      },
      desc: {
        type: String,
      },
      img: {
        type: String,
      },
      userId: {
        type: String,
      },
      slug: {
        type: String,
      },
    } ,
  { timestamps: true }
  );
  
module.exports =  mongoose.model("Post", postSchema);