const { User, Thought } = require('../models');

module.exports = {
  
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  async getUserById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createFriend(req,res){
    console.log("test")
    try{
 



        User.findOneAndUpdate(  
            { _id: req.params.userId },
            { $addToSet:{
                friends:req.params.friendId
            }},{
                new:true
            })
            
              return res.status(200).json({ message: 'Friend added!' });
            
    } catch (err) {
        res.status(500).json(err);
      }
  },

  async removeFriend(req,res){
    try{

        User.findOneAndUpdate(  
            { _id: req.params.userId },
            { $pull:{
                friends:req.params.friendId
            }},{
                new:true
            })
            return res.status(200).json({ message: 'Friend removed!' });

    } catch (err) {
        res.status(500).json(err);
      }
  }
};

