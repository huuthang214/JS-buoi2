// BÀI TẬP 1

function cals(){
    var days = document.getElementById("days").value * 1;
    var oneDayAmount = 100000 * 1;
    var sum = 0;
    sum = days * oneDayAmount;
    var result = "<p>Tháng nay bạn được: " + sum + "</p>";
    document.getElementById("result").innerHTML = result;
}

// Bài Tập 2
function tinhNgay(){
    var no1 = document.getElementById("no1").value*1;
    var no2 = document.getElementById("no2").value*1;
    var no3 = document.getElementById("no3").value*1;
    var no4 = document.getElementById("no4").value*1;
    var no5 = document.getElementById("no5").value*1;
    var avg = 0;
    avg = (no1 + no2 + no3 + no4 + no5) / 5
    var ketQua = "<p>Trung bình cộng là: " + avg + "</p>";
    document.getElementById('ketQua').innerHTML = ketQua;

}
//Bài Tập 3
function tinhTien(){
    var usd = document.getElementById('usd').value*1;
    tinh = 23500 * usd;
    var ketQua = "<p>Tiền Việt của bạn là: " + tinh + " VND</p>";
    document.getElementById('tinh').innerHTML = ketQua;
}
// Bài tập 4
function hcn(){
    var length = document.getElementById('length').value*1;
    var width = document.getElementById('width').value*1;
    var perimeter = 0;
    var area = 0;
    perimeter = (length + width) * 2;
    area = length * width;
    var result = "<p> Chu vi hcn là: " + perimeter + "</p>" + "<p>Diện tích hcn là: " + area + "</p>";
    document.getElementById('tinhHcn').innerHTML = result;
}
// Bài Tập 5
function kySo(){
    var no1 = document.getElementById('number').value * 1;
    var hundred = Math.floor(no1 / 100);
    var ten = Math.floor(no1 % 100 / 10);
    var unit = Math.floor(no1 % 10);
    var tong = hundred + ten + unit
    result = "<p>Tổng các ký số của số bạn vừa nhập là: " + tong + "</p>";
    document.getElementById('tinhKyso').innerHTML = result;
}