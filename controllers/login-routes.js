const router = require('express').Router();
const {User} = require('./../models');

// login/sign up page
router.get(`/`, async (req,res)=>{
    try {
        if (req.session.logged_in) {
            res.redirect(`/dashboard`)
        }
        res.render(`login`)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({msg: `${err}`});
    }
}); 

// Find one user (log in)
router.post('/', async (req,res)=> {
    try {
        console.log("Backend responding")
        const userData = await User.findOne({ where: { username: req.body.username } });
    
        if (!userData) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        const validPassword = await userData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          
          res.json({ user: userData, message: 'You are now logged in!' });
        });
    
      } catch (err) {
        res.status(400).json({msg: `${err}`});
      }
});

// Create new user (sign up)
router.post('/sign-up', async (req,res)=>{
    try {
        const newUser = await User.create(req.body);
    
        req.session.save(() => {
          req.session.user_id = newUser.id;
          req.session.logged_in = true;
    
          res.redirect('/dashboard')
        });
      } catch (err) {
        res.status(500).json({msg: `${err}`});
      }
});

module.exports = router;