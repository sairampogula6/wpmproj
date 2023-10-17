var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
  };
  
  var mongoose = require('mongoose');
  var MenuItem = mongoose.model('MenuItem');
  
  module.exports.menuItemsCreate = function (req, res) {
    console.log(req.body);
    const { name, price, description, rating, image } = req.body;
    const newMenuItem = {
      name,
      price,
      description,
      rating,
      image,
    };
  
    MenuItem.create(newMenuItem)
      .then((menuItem) => {
        console.log('MenuItem created:', menuItem);
        return res.status(201).json(menuItem);
      })
      .catch((err) => {
        console.error(err);
        return res.status(400).json({ error: 'Could not create menu item' });
      });
  };
  
  module.exports.menuItemsList = function (req, res) {
    MenuItem.find({})
      .exec()
      .then((menuItems) => {
        sendJsonResponse(res, 200, menuItems);
      })
      .catch((err) => {
        console.error(err);
        sendJsonResponse(res, 500, { error: 'An error occurred' });
      });
  };
  
  module.exports.menuItemsReadOne = async function (req, res) {
    try {
      const menuItem = await MenuItem.findById(req.params.menuitemid).exec();
      sendJsonResponse(res, 200, menuItem);
    } catch (err) {
      sendJsonResponse(res, 500, { error: 'An error occurred' });
    }
  };
  
  module.exports.menuItemsUpdateOne = function (req, res) {
    MenuItem.findByIdAndUpdate(
      req.params.menuitemid,
      { $set: req.body },
      { new: true }
    )
      .exec()
      .then((menuItem) => {
        sendJsonResponse(res, 200, menuItem);
      })
      .catch((err) => {
        console.error(err);
        sendJsonResponse(res, 500, { error: 'An error occurred' });
      });
  };
  
  module.exports.menuItemsDeleteOne = function (req, res) {
    MenuItem.findByIdAndRemove(req.params.menuitemid)
      .exec()
      .then(() => {
        sendJsonResponse(res, 204, null);
      })
      .catch((err) => {
        console.error(err);
        sendJsonResponse(res, 500, { error: 'An error occurred' });
      });
  };
  