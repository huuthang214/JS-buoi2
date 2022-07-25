// BÀI TẬP 1

function cals(){
    var days = document.getElementById("days").value * 1;
    var oneDayAmount = 100000 * 1;
    var sum = 0;
    sum = days * oneDayAmount;
    var result = "<p>Tháng nay bạn được: " + sum + "</p>";
    document.getElementById("result").innerHTML = result;
}