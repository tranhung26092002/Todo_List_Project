
async function getListTask(){
    try {
        // call api get listuser
        const name = await axios.get('auth/admin/user');
        //show name
        const accessToken = localStorage.getItem('access_token')
        const payloadDecoded = jwt_decode(accessToken);
        document.querySelector('.name_user').innerText = payloadDecoded.username;

        const response = await axios.get('auth/user/tasks');
        showListTask(response);

    } catch (error) {
        //error
        if(error.response.status === 401){
            window.location.href = "/login.html";
        }
    }
}
getListTask();


function showListTask(response){
    let htmlTask = ``;
    response.data.forEach(function(task){
        htmlTask +=`<div class="task">
                        <div class="content">
                            <input 
                                id="time"
                                type="text" 
                                class="time" 
                                value='${task.time}'
                                "What time?" >
                            <input 
                            id="title"
                                type="text" 
                                class="title" 
                                value='${task.title}'
                                "What do you have planned?" >
                        </div>
                        <div class="actions">
                            <button 
                                id= "${task._id}"
                                onclick="handleEditTask(this.id)"
                                class="edit">Edit</button>
                            <button 
                                id= "${task._id}"
                                onclick="handleDeleteTask(this.id)"
                                class="delete">Delete</button>
                        </div>
                    </div>`;
    });
    document.querySelector('.tasks').innerHTML = htmlTask;
}
function handleEditTask(taskId){
    window.location.href = `/edit_task.html?taskId=${taskId}`;
}

async function handleDeleteTask(taskId){
    try {
        // call api 
        const response = await axios.delete(`auth/user/tasks/delete/${taskId}`);
        if(response.status === 200){
            window.location.reload();
        }
    } catch (error) {
        if(error.response.status === 401){
            window.location.href = "/login.html";
        }
    }
}




async function handleCreateTask(){
    try {
            // lay thong tin 
        const time = document.getElementById('new_time').value;
        const title = document.getElementById('new_title').value;
        // gui value
        const response =await axios.post('auth/user/tasks/create', {
            new_time: time,
            new_title: title,
        })
        if(response.status === 200){
            window.location.href = "/home_page.html";
        }
    } catch (error) {
        console.log(error);
    }
}

function handleLogoutUser(){
    localStorage.removeItem('access_token');
    window.location.href = "/login.html";
}