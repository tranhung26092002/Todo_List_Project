function handleLogoutUser(){
    localStorage.removeItem('access_token');
    window.location.href = '/login.html';
}

async function getListUser(){
    try {
        // call api get listuser
        const response = await axios.get('auth/admin/user');
        //show name
        const accessToken = localStorage.getItem('access_token')
        const payloadDecoded = jwt_decode(accessToken);
        document.querySelector('.name_user').innerText = payloadDecoded.username;

    } catch (error) {
        //error
        if(error.response.status === 401){
            window.location.href = '/login.html';
        }
    }
}
getListUser();