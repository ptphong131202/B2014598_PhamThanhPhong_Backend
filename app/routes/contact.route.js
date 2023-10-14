// import libraries
const express = require( 'express' );
const contacts = require( '../controllers/contact.controller' );

// router
const router = express.Router();

// routers
router.route( "/" )
    .get( contacts.findAll )
    .post( contacts.create )
    .delete( contacts.deleteAll );

router.route( "/favorite" )
    .get( contacts.findAllFavorite );

router.route( "/:id" )
    .get( contacts.findOne )
    .put( contacts.update )
    .delete( contacts.delete );


module.exports = router;