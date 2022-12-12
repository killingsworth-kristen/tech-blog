const router = require('express').Router();

const homepageRoutes = require(`./homepage-routes`);
const loginRoutes = require(`./login-routes`);
const dashboardRoutes = require(`./dashboard-routes`);
const postRoutes = require('./post-routes')
const apiRoutes = require('./api')


router.use(`/`, homepageRoutes);
router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/post', postRoutes);

module.exports = router

