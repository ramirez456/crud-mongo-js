const User = require('../models/userModel');
const { use } = require('../routes/apiUserRoute');

class UserRepository {
  async findAll() {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw new Error('Error to get user');
    }
  }
  async create(userRequest){
    try {
      return await User.create(userRequest)
    }catch(error){
      throw new Error('Error to create user');
    }
  }

  async find(id){
    try{
      const user = await User.findById(id);
      return user;
    }catch(error){
      throw new Error('Error to find user');
    }
  }

  async update(id, newUser){
    try{
      const user = await User.updateOne({_id:id}, newUser)
      return user
    }catch(err){
      throw new Error('Error to update user')
    }
  }

  async delete(id){
    try{
      const user = await User.deleteOne({_id:id})
      return user
    }catch(err){
      throw new Error('Error to update user')
    }
  }

}

module.exports = new UserRepository();