let x;
function f(x) {
    if (x >= 0 && x <= 3) {
      return x - 1
    } else if (x > 3) {
       return  f(x - 3);
    } else if (x == "최예원 바보") {
         return  "맞지"
    } else {
        return "0이상값 입력하라고 병신아"
    }
}
function onSubmit() {
    console.log(f(x) + "    "  + x);
    document.getElementById("result").innerText = f(x);
}

function onChangeTextBox(obj) {
    x = obj.value;
}
