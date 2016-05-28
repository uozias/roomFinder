
var sumoContent = require('../models/sumo_content');

var AdminController = {};

AdminController.index =  function(req, res){
  sumoContent.all({}, function(results){
    var renderParams = {
      results: results
    };

    res.render('admin/index', renderParams);
  })
};

module.exports = AdminController;

