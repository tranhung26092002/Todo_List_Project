const express = require('express');
const router = express.Router();
const TaskController = require('../Controller/TaskController');
const authMiddleware = require('../Middleware/AuthMiddleware');

// Đăng ký route để lấy danh sách tasks của người dùng
router.get('/tasks',[
    authMiddleware.isAuthentication
], TaskController.getListTask);

// Đăng ký route để tạo task mới
router.post('/tasks/create',[
    authMiddleware.isAuthentication
], TaskController.createTask);

// Đăng ký route để xóa task
router.delete('/tasks/delete/:taskId',[
    authMiddleware.isAuthentication
], TaskController.deleteTask);


// Đăng ký route để cập nhật task
router.put('/tasks/update/:taskId',[
    authMiddleware.isAuthentication
], TaskController.updateTask);



module.exports = router;
