const router = require('express').Router();
const {User,Post} = require('./../../models')

router.get('/', async (req,res)=>{
    try{
        const allUsers = await User.findAll()
        res.json(allUsers)
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: err})
    }
})

// create new account/user
router.post('/', async (req,res)=>{
    try {
        const userData = await User.create(req.body);
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
    
          res.status(200).json(userData);
        });
      } catch (err) {
        res.status(400).json(err);
      }
});

// login to existing account
router.post('/login', async (req,res)=>{
    try {
        const userData = await User.findOne({ where: {username: req.body.username} });
    
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
        res.status(500).json({msg: `${err}`});
      }
});

// get one user and associated posts
router.get('/:id', async (req,res)=>{
    try{
        const user = await User.findByPk(req.params.id,{
            include: [Post]
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

router.post('/logout', async (req,res)=>{
    console.log(`This is the req.session.logged_in value: ${req.session.logged_in}`)
    try {
        if (req.session.logged_in) {
            req.session.destroy(() => {
            res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `${err}`})
    }
});


module.exports = router