let multiply = function (x, y) {
    let res = x * y;
    return res;
}
function createFunctions() {
    for (i = 1; i <= 10; i++) {
        var str = "multiplyBy" + i + "= multiply.bind(this," + i + ");";
        //Declaring and Setting dynamic variable to undefined using eval
        eval(str);
    }
}
createFunctions();
const displayTable = document.querySelector("div.dispTable"); //show table in div
const getTable = () => {
    let j = document.getElementById('num').value;
    for (i = 1; i <= 10; i++) {
        var str = "console.log(\'" + j + " x " + i + " : \'" + "+" + "multiplyBy" + i + "(" + j + "));";
        //Declaring and Setting dynamic variable to undefined using eval
        eval(str);
    }
}



