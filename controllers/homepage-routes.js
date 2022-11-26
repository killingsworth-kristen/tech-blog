const { User, Post } = require('../models');


const router = require('express').Router();

// get all posts
router.get(`/`, async (req,res)=>{
try {
    const allPosts = await Post.findAll({
        include: [User]
    })
    const posts = await allPosts.get({ plain: true });
    res.render(`homepage`, posts)
}
catch (err) {
    console.log(err)
    res.status(500).json(err)
}
})

module.exports = router;