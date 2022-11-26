const { User,Post,Comment } = require("../models");
const userSeeds = require(`./user.json`);
const postSeeds = require(`./post.json`);
const CommentSeeds = require(`./comment.json`);

const seedData = async () => {
   try {
    await User.bulkCreate(userSeeds);
    await Post.bulkCreate(postSeeds);
    Comment.bulkCreate(CommentSeeds);
} catch (err) {
    console.log(err)

}   
}

seedData();


