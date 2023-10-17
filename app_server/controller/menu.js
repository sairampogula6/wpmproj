module.exports.home = function(req, res){
    res.render('home', { title: 'home' });
  };
  /* GET menu page */
  module.exports.menu = function(req, res){
    res.render('menu', { title: 'menu' });
  };

  module.exports.nonveg = function(req, res){
    res.render('nonveg', { title: 'Nonveg Menu',
    
    menuItems: [
      {
        name: "Chicken Tikka Masala",
        price: 300,
        description: "Tender pieces of chicken marinated in a blend of aromatic spices, cooked in a luscious tomato-based gravy. Served with fragrant basmati rice.",
        rating: 4,
        image:"images/chickentikkamas.jpeg" 
      },
      {
        name: "Lamb Kebabs",
        price: 400,
        description: "Succulent lamb kebabs seasoned with a medley of spices and grilled to perfection. Served with mint chutney and naan bread.",
        rating: 5,
        image: "images/lambkebab.jpeg"
      },
      {
        name: "Seafood Paella",
        price: 400,
        description: "A delightful seafood medley of shrimp, mussels, and squid, cooked with saffron-infused rice and a hint of citrus.",
        rating: 4,
        image: "images/seafoodpaella.jpeg"
      },
      {
        name: "Chicken Biryani",
        price: 400,
        description: "Chicken Biryani is a fragrant South Asian dish that combines marinated chicken with aromatic basmati rice, expertly layered and cooked with a blend of spices. The result is a flavorful and captivating culinary experience that's enjoyed globally.",
        rating: 4,
        image: "images/chickenbir.jpeg"
      }
    ]
      
    });
  };

  module.exports.veg = function(req, res){
    res.render('veg', { title: 'veg Menu',
    menuItems : [
      {
        name: "Paneer Tikka Masala",
        price: 280,
        description: "Succulent pieces of paneer (Indian cottage cheese) are marinated in a blend of spices, skewered, and char-grilled to perfection. Served in a rich tomato and onion-based masala sauce, this dish offers a delightful combination of flavors and textures.",
        rating: 5,
        image:"images/paneer.jpeg"
      },
      {
        name: "Vegetable Biryani",
        price: 400,
        description: "Fragrant basmati rice infused with saffron, layered with a colorful assortment of seasonal vegetables, and slow-cooked with aromatic spices. This vegetarian biryani is a celebration of flavors and textures, perfect for those seeking a wholesome meal.",
        rating: 4,
        image:"images/vegbir.jpeg"
      },
      {
        name: "Mushroom Masala",
        price: 270,
        description: "Plump mushrooms cooked in a savory and spiced tomato-onion gravy, Mushroom Masala is a delectable option for mushroom enthusiasts. Its rich flavors and tender mushrooms create a satisfying dish.",
        rating: 4,
        image:"images/mushroom.jpeg"
      },
      {
        name: "Vegan Pad Thai (Vegan)",
        price: 290,
        description: " A vegan twist on the Thai favorite, this dish features rice noodles stir-fried with an assortment of vegetables, tofu, and a zesty tamarind-based sauce. It's a tantalizing blend of sweet, sour, and savory flavors.",
        rating: 5,
        image:"images/padthai.jpeg"
      }
    ]
    });
  };

  module.exports.desert = function(req, res){
    res.render('desert', { title: 'desert Menu',
    menuItems : [
      {
        name: "Classic Tiramisu ",
        price: 280,
        description: "Indulge in layers of coffee-soaked ladyfingers and velvety mascarpone cheese, delicately dusted with cocoa powder. Our Classic Tiramisu is a timeless Italian dessert that combines rich flavors and a light, creamy texture for a delightful after-meal treat.",
        rating: 5,
        image:"images/classictiramisu.jpeg"
      },
      {
        name: " Gulab Jamun",
        price: 200,
        description: "Gulab Jamun is a delectable Indian dessert featuring golden, syrup-soaked dough balls with a delightful blend of sweetness and aromatic flavors, often served on special occasions and celebrations.",
        rating: 4,
        image:"images/gulabjamun.jpeg"
      },
      {
        name: "Raspberry White Chocolate Cheesecake",
        price: 270,
        description: "Delight in the harmonious pairing of tangy raspberries and smooth white chocolate in our Cheesecake. The velvety cheesecake sits atop a buttery graham cracker crust, creating a dessert that's both visually appealing and delectably flavorful.",
        rating: 4,
        image:"images/rasberry.jpeg"
      },
      {
        name: "Molten Chocolate Lava Cake",
        price: 290,
        description:"A decadent dessert experience awaits with our Molten Chocolate Lava Cake. As you cut into the warm cake, a luscious river of molten chocolate flows, complementing the moist chocolate cake exterior. Served with a scoop of vanilla ice cream for an extra touch of sweetness.",
        rating: 5,
        image:"images/chocolava.jpeg"
      }
    ]
   });
  };

  