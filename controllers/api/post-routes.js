const router = require('express').Router();
const {Post, User} = require('./../../models')

router.get('/', async (req,res)=>{
    try{
        const allPosts = await Post.findAll({
            include: [User]
        })
        res.json(allPosts)
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `${err}`});
    }
});

// get post by id
router.get('/:postId', async (req,res)=>{
    try{
        const user = await User.findOne({
            include: {
                model: Post,
                where: {id: req.params.postId}}
        })
        if (!user) {
            res.status(404).json({msg: `This user does not exist!`})
        }
        res.status(200).json(user)
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `${err}`})
    }
});



// new post
router.post('/', async (req,res) =>{
    try {
        const newPost = await Post.create(req.body);
        res.json(newPost)
    } catch (err) {
        console.log(err);
        res.json(err)
    }
})

module.exports = router