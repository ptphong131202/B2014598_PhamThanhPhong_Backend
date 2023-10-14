// create
exports.create = ( req, res ) => { res.send( { message: "Create handler!" } ) };

// findAll 
exports.findAll = ( req, res ) => { res.send( { message: "Find all handler!" } ) };

// findOne
exports.findOne = ( req, res ) => { res.send( { message: "Find one handler!" } ) };

// update
exports.update = ( req, res ) => { res.send( { message: "Update handler!" } ) };

// delete
exports.delete = ( req, res ) => { res.send( { message: "Delete handler!" } ) };

// deleteAll
exports.deleteAll = ( req, res ) => { res.send( { message: "Delete all handler!" } ) };

// findAllFavorite
exports.findAllFavorite = ( req, res ) => { res.send( { message: "Find all favorite handler!" } ) };