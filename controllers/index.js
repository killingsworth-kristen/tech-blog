const homepageRoutes = require(`./homepage-routes`);
// const loginRoutes = require(`./login-routes`);
// const dashboardRoutes = require(`./dashboard-routes`);

const router = require('express').Router();

router.use(`/`,homepageRoutes);
// router.use(`/login`,loginRoutes);
// router.use(`/dashboard`,dashboardRoutes);

module.exports = router

