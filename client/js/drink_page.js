 let cart = [];
function addToCart(name, price) {
// Tìm sản phẩm trong giỏ hàng bằng tên
let product = cart.find(item => item.name === name);
if (product) {
// Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng lên 1
product.quantity += 1;
} else {
// Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm vào giỏ hàng
cart.push({ name: name, price: price, quantity: 1 });
}
// Cập nhật giỏ hàng trên giao diện
renderCart();
}
function renderCart() {
let cartElement = document.getElementById("cart");
cartElement.innerHTML = ""; // Xóa hết các phần tử trong giỏ hàng trên giao diện
let total = 0;
// Duyệt qua các sản phẩm trong giỏ hàng
for (let item of cart) {
let itemElement = document.createElement("li");
itemElement.innerText = `${item.name} x ${item.quantity} = ${item.price * item.quantity} đồng`;
cartElement.appendChild(itemElement);
total += item.price * item.quantity;
}
// Hiển thị tổng tiền trên giao diện
let totalElement = document.getElementById("total");
totalElement.innerText = total;

}
window.onload = function() {
renderCart();
};

function checkout() {
var cartList = document.getElementById("cart").children;
var total = 0;
var items = [];

// Tính tổng tiền và lấy danh sách sản phẩm
for (var i = 0; i < cartList.length; i++) {
var item = {};
item.name = cartList[i].dataset.name;
item.price = parseInt(cartList[i].dataset.price);
total += item.price;
items.push(item);
}

// Hiển thị cửa sổ thông báo xác nhận thanh toán
let message =`Bạn có chắc chắn muốn thanh toán cho các sản phẩm sau đây?\n\n`;

let confirmCheckout = confirm(message);
console.log(confirm)

// Nếu người dùng xác nhận thanh toán, xóa danh sách sản phẩm và reset tổng tiền
if (confirmCheckout) {
alert("Thanh toán thành công!");
}
}