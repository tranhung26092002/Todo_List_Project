
async function SubmitTask(){
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const taskId = urlParams.get('taskId');

        const time = document.getElementById('new_time').value;
        const title = document.getElementById('new_title').value;
        // gui value
        const response = await axios.put(`auth/user/tasks/update/${taskId}`, {
            new_time: time, 
            new_title: title
        });
        if(response.status === 200){
            window.location.href = "/home_page.html";
        }
    } catch (error) {
        if(error.response.status === 401){
            window.location.href = "/login.html";
        }
    }
}
