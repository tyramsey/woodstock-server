const router = require('express').Router();
const Userinfo = require('../db').import('../models/userinfo-model');

let validateSession = require('../middleware/validate-session');

router.post('/createuserinfo', validateSession, (req, res) => {
    const createUserinfo = {
        firstName: req.body.userinfo.firstName,
        lastName: req.body.userinfo.lastName,
        budget: req.body.userinfo.budget,
        owner_id: req.user.id
    }
    Userinfo.create(createUserinfo)
    .then(userinfo => res.status(200).json(userinfo))
    .catch(err => res.status(500).json({error: err}))

});

router.get('/getuserinfo', validateSession, (req, res) => {
    let owner_id = req.user.id
    Userinfo.findAll({
        where: {owner_id: owner_id}
    })
    .then(userinfo => res.status(200).json(userinfo))
    .catch(err => res.status(500).json({error: err}))
});

router.put('/updateuserinfo/:id', validateSession, function(req, res) {
    const updateUserinfo = {
        budget: req.body.userinfo.budget,
    };
    const query = { where: {id: req.params.id}};

    Userinfo.update(updateUserinfo, query)
    .then((userinfo) => res.status(200).json(userinfo))
    .catch((err) => res.status(500).json({error: err}));
})

router.delete('/deletein/:id', validateSession, function(req, res) {
    const query = { where: { id: req.params.id, owner_id: req.user.id}};
    Userinfo.destroy(query)
    .then((response) =>
    res.status(200).json({
      message: "User Info Has Been Deleted",
    })
    )
    .catch((err) => res.status(500).json({ error: err }));
    });
    module.exports = router;