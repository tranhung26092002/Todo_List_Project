
function handleFood(){
    window.location.href = '/doanvat.html';
}

function handleDrink(){
    window.location.href = '/drink_page.html';
}

function handleBill(){
    window.location.href = '/thanhtoan.html';
}

function handleNews(){
    window.location.href = '/tintuc.html';
}

function handleAddress(){
    window.location.href = '/diachi.html';
}

function handleLogoutUser(){
    localStorage.removeItem('access_token');
    window.location.href = '/login.html';
}