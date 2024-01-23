const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');

router.get('/create', (req, res) => {
    console.log(req.user);
    res.render('create');
});

router.post('/create', async (req, res) => {

    const { name, description, imageUrl, difficultyLevel } = req.body;

    await cubeManager.create({ name, description, imageUrl, difficultyLevel: Number(difficultyLevel), owner: req.user._id });

    res.redirect('/');
});

router.get('/details/:id', async (req, res) => {

    const cube = await cubeManager.getOne(req.params.id).lean();

    if (!cube) {
        return res.redirect('/404');
    };

    res.render('details', { cube });
});

router.get('/:id/attach-accessory', async (req, res) => {

    const cube = await cubeManager.getOne(req.params.id).lean();
    const accessories = await accessoryManager.getAvailable(cube.accessories).lean()


    const hasAccessory = accessories.length > 0;

    res.render('accessory/attach', { cube, accessories, hasAccessory });
});

router.post('/:id/attach-accessory', async (req, res) => {
    const { accessory: accessoryId } = req.body;
    const cubeId = req.params.id;

    await cubeManager.attachAccessory(cubeId, accessoryId);

    res.redirect(`/cubes/details/${cubeId}`);
});

router.get('/edit/:id', async (req, res) => {
    const cube = await cubeManager.getOne(req.params.id).lean();

    res.render('edit', { cube });
})

router.post('/edit/:id', async(req, res)=>{
    const cubeData = req.body;

    await cubeManager.update(req.params.id, cubeData);
    res.redirect(`/cubes/details/${req.params.id}`);

})

module.exports = router;