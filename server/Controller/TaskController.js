const jwt = require('jsonwebtoken');
const taskModel = require('../Models/TaskModel');
const userModel = require('../Models/UserModel');

const getListTask = async (req, res) => {
  try {
    const bearerHeader = req.headers['authorization'];
    const accessToken = bearerHeader.split(' ')[1];
    const decodeJwt = jwt.verify(accessToken, process.env.SECRET_JWT);
    const userId = decodeJwt._id;
    const user = await userModel.findById(userId);
    
    const tasks = await taskModel.find({ userId: user._id });
    return res.status(200).send(tasks);
  } catch (error) {
      // log error
  }
}

const createTask = async (req, res) => {
  try{
      // get infor client
      const bearerHeader = req.headers['authorization'];
      const accessToken = bearerHeader.split(' ')[1];
      const decodeJwt = jwt.verify(accessToken, process.env.SECRET_JWT);
      const userId = decodeJwt._id;
      const user = await userModel.findById(userId);
      
      const time = req.body.new_time;
      const title = req.body.new_title;

      // creat data to database
      await taskModel.create({
        userId: user._id,
        time: time,
        title: title,
      });
      return res.status(200).send('register task');
  }
  catch(error){
      console.log('error',error);
  }
}

// endpoint PUT /auth/user/tasks/:taskId
const updateTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const time = req.body.new_time;
    const title = req.body.new_title;

    const result = await taskModel.findByIdAndUpdate(taskId, {time, title});
    return res.status(200).send('updata task success');
  } catch (error) {
    // log error
  }
};



const deleteTask = async (req, res) => {
  try {
      // delete user
      const taskId = req.params.taskId;
      await taskModel.findByIdAndRemove(taskId);
      return res.status(200).send('delete task success');
  } catch (error) {
      // log error
  } 
}

module.exports = {
    createTask: createTask,
    getListTask: getListTask,
    deleteTask: deleteTask,
    updateTask: updateTask
};