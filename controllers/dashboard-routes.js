const router = require('express').Router();
const { User, Post } = require(`../models`)

// Get one user and their posts
router.get(`/`, async (req,res)=> {
    try {
        if(!req.session.logged_in){
            return res.redirect("/login")
        }
        
        const userData = await User.findOne({
            where: { id: req.session.user_id },
            include: [{
                model: Post,
            }]
        });
        
        const user = await userData.get({plain: true})

        res.render(`dashboard`, { 
            user: user,
            logged_in: req.session.logged_in,
        });
    }   
    catch (err) {
        console.log(err);
        res.status(500).json({msg: `${err}`})
    }
});

module.exports = router;