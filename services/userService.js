const userRepository = require('../repositories/userRepository');

class UserService {
  async getAllUsers() {
    try {
        const users = await userRepository.findAll();
        return users;
      } catch (error) {
        throw new Error('Error al obtener usuarios');
      }
  }

  async createUser(userRequest){
    try {
      return await userRepository.create(userRequest);
    }catch(error){
      throw new Error('Error to create user', error);
    }
  }
  async findById(id){
    try{
      const user = await userRepository.find(id) 
      return user
    }catch(err){
      throw new Error('Error to find user',err);
    }
  }

  async update(id, newUser) {
    try{
      const user = await userRepository.update(id,newUser) 
      return user
    }catch(err){
      throw new Error("Error to update User", err)
    }
  }

  async delete(id) {
    try{
      const user = await userRepository.delete(id) 
      return user
    }catch(err){
      throw new Error("Error to delete User", err)
    }
  }
}

module.exports = new UserService();