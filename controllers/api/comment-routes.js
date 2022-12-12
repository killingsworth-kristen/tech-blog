const router = require('express').Router();
const { Comment, Post, User } = require('./../../models')

router.get('/', async (req,res) => {
    try {
        const allComments = await Comment.findAll({include: [Post, User]})
        res.json(allComments)
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `${err}`})
    }
});

router.post('/:postId', async (req,res)=>{
    try {
        const newComment = await Comment.create({
            body: req.body.body,
            PostId: req.params.postId,
            UserId: req.session.user_id,

        })
    } catch (err) {
        console.log(err);
        es.status(500).json({msg: `${err}`})
    }
})

module.exports = router