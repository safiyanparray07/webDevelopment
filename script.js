function AppendValue(value) {
    document.getElementById("result").value += value;
}

function ClearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    let expression = document.getElementById("result").value;
    document.getElementById("result").value = eval(expression);
}