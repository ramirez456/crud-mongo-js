const userService = require('../services/userService');

  exports.sayHello = (req, res) => {
    res.status(200).json({ message: "Hola Mundo" });
  };

  exports.getAllUsers = async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.createUser = async (req, res) => {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  exports.findById = async (req, res) => {
    try{
      const userId = req.params.id;
      const user =  await userService.findById(userId)
      res.status(200).json(user)
    }catch(err){
      res.status(500).json({err: err.message})
    }
  }

  exports.update = async (req, res) => {
    try{
      const id = req.params.id;
      const newUser  = req.body 
      const user =  await userService.update(id, newUser)
      res.status(200).json(user)
    }catch(err){
      res.status(500).json({err: err.message})
    }
  }

  exports.delete = async (req, res) => {
    try{
      const id = req.params.id;
      const user =  await userService.delete(id)
      res.status(200).json(user)
    }catch(err){
      res.status(500).json({err: err.message})
    }
  }

  