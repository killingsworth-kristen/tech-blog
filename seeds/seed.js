const { User,Post,Comment } = require("../models");
const sequelize = require('../config/connection');
const userSeeds = require(`./user.json`);
const postSeeds = require(`./post.json`);
const CommentSeeds = require(`./comment.json`);

const seedData = async () => {
   try {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userSeeds, {
        individualHooks: true,
        returning: true,
      });
    await Post.bulkCreate(postSeeds);
    Comment.bulkCreate(CommentSeeds);
} catch (err) {
    console.log(err)

}   
}

seedData();


