/**
 * Created by Navya on 6/7/2016.
 */

module.exports = function() {
    
  //  var mongoose = require("mongoose");
  //  mongoose.connect('mongodb://localhost/cs5610summer1');
    
    var models = {
        userModel       : require("./user/user.model.server")(),
        websiteModel    : require("./website/website.model.server")(),
        pageModel       : require("./page/page.model.server")(),
        widgetModel     : require("./widget/widget.model.server")()
    };
    return models;
};