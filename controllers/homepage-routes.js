const router = require('express').Router();
const { User, Post } = require('../models');

// get all posts
router.get(`/`, async (req,res)=>{
    try {
        const allPosts = await Post.findAll({
            include: [User]
        })
        // res.json(allPosts)
        console.log(`${allPosts} this is before serialization`)
        const posts = allPosts.map((postArr)=>postArr.get({ plain: true }));
        console.log(`${posts} this is after serialization`)
        console.log(allPosts)
        res.render(`homepage`, {
            posts: posts,
            logged_in:req.session.logged_in
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({msg: `${err}`});
    }
});

module.exports = router;