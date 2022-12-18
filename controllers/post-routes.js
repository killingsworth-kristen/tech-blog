const router = require('express').Router();
const {User, Post, Comment} = require('./../models');

router.get('/:postId', async (req,res)=> {
    try {
        if (!req.session.logged_in) {
            res.redirect('login')
        }
        const postData = await Post.findOne({
            where: { id: req.params.postId },
            include: [{
                model: User,
                attributes: ['username'],
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['username'],
                }],
            }],
        })

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

router.post('/:postId', async (req,res)=>{
    if (!req.session.logged_in) {
        res.redirect('login')
    }
        await Comment.create({
            body: req.body.body,
            UserId: req.session.user_id,
            PostId: req.params.postId
        })
        location.reload()
    
})

// create new post
router.post('/', async (req,res)=>{
    try{
        if (!req.session.logged_in) {
            res.redirect('login')
        }
        await Post.create({
            title: req.body.title,
            body: req.body.body,
            UserId: req.session.user_id
        })
        location.reload()
    } catch (err) {
        console.log(err);
        res.json(err)
    }
})

module.exports = router;