const router = require('express').Router();
const {User, Post, Comment} = require('./../models');

router.get('/:postId', async (req,res)=> {
    try {
        const postData = await User.findOne({
            include: [{
                model: Post,
                include: {
                    model: Comment
                },
                where: {id: req.params.postId},
                
            }]
        });
        if (!postData) {
            res.status(404).json({msg: `This post doesn't exist!`})
            return
        }

        console.log(`This is the post data: ${postData}`)
        const post = postData.get({ plain: true });
        console.log(post)
        res.render(`post`, {
            post: post,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `${err}`})
    }
});

module.exports = router;