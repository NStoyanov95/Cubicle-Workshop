const router = require('express').Router();

const userManager = require('../managers/userManager');

router.get('/register', (req, res) => {
    res.render('register')
});
router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    const hash = await userManager.hashPassword(password);
    await userManager.addUser(username, hash);
    res.redirect('login');
})


router.get('/login', (req, res) => {
    res.render('login')
});



module.exports = router;