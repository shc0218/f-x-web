let x;
function f(x) {
    if (x >= 0 && x <= 3) {
      return x - 1
    } else if (x > 3) {
       return  f(x - 3);
    } else if (x == "최예원 바보") {
         return  "맞지"
    } else {
        return "0 이상인 값을 입력해주세요"
    }
}
function onSubmit() {
    console.log(f(x) + "    "  + x);
    document.getElementById("result").innerText = f(x);
}

function onChangeTextBox(obj) {
    x = obj.value;
}
