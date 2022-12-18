const router = require('express').Router();
const { Comment, Post, User } = require('./../../models')

// get all posts with comments and usernames
router.get('/', async (req,res) => {
    try {
        const allComments = await Comment.findAll({include: [Post, User]})
        res.json(allComments)
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `${err}`})
    }
});

// create new comment
router.post('/:postId', async (req,res)=>{
    try {
        if (!req.session.logged_in) {
            res.status(401).json({msg: "Not logged in!"})
        }
        const newComment = await Comment.create({
            body: req.body.body,
            PostId: req.params.postId,
            UserId: req.session.user_id,

        })
        res.status(200).json(newComment)
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `${err}`})
    }
})

// router.post('/', (req,res)=>{
//         Comment.create({
//             body: req.body.body,
//             UserId: req.session.user_id,
//             PostId: req.params.postId
//         }).then((response)=>{
//             res.json(response)
//         }).catch((err)=> {
//             console.log(err);
//             res.status(500).json(err)
//         });
        
// });

module.exports = router