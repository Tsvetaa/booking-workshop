const { createFacility, getAllFacilities } = require('../services/facilityService');
const { getById } = require('../services/roomService');

const facilityController = require('express').Router();

facilityController.get('/create', async (req, res) => {
    res.render('createFacility', {
        title: 'Create New Facility'
    });
});

facilityController.post('/create', async (req, res)=> {
    try {
        await createFacility(req.body.label, req.body.iconUrl);
        res.redirect('/catalog');
    } catch (err) {
        res.render('createFacility', {
           title: '' 
        });
    }
});

facilityController.get('/:roomId/decorateRoom', async (req, res) => {
    const roomId = req.params.roomId;
    const room = await getById(roomId);
    const facilities = await getAllFacilities();

    res.render('decorate', {
        title: 'Add Facility', 
        room,
        facilities
    });
})

facilityController.post('/:roomId/decorateRoom', async (req, res) => { 
    console.log(req.body);
    res.redirect('/facility/' + req.params.roomId + '/decorateRoom');

})

module.exports = facilityController;