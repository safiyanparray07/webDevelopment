function AppendValue(value) {
    let result = document.getElementById("result");

    if (value === "backspace") {
        result.value = result.value.slice(0, -1);
    } else {
        result.value += value;
    }
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    let result = document.getElementById("result");

    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}