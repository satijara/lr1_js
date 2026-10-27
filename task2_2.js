let arr = [];
function generateArr() {
    let table = document.getElementById("table");
    arr = [];
    for (let i = 0; i < table.rows.length; i++) {
        arr[i] = [];
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            let number = Number(table.rows[i].cells[j].textContent);
            arr[i][j] = number;
        }
    }
}
function findMinMax() {
    let minPos = Infinity;
    let maxPos = -Infinity;
    let minNeg = Infinity;
    let maxNeg = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let x = arr[i][j];
            if (x > 0) {
                if (x < minPos) minPos = x;
                if (x > maxPos) maxPos = x;
            }
            if (x < 0) {
                if (x < minNeg) minNeg = x;
                if (x > maxNeg) maxNeg = x;
            }
        }
    }
    return [minPos, maxPos, minNeg, maxNeg];
}
function colorTable() {
    let table = document.getElementById("table");
    let values = findMinMax();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let cell = table.rows[i].cells[j];
            let x = arr[i][j];
            cell.style.border = "1px solid #aaa";
            cell.style.fontWeight = "normal";
            if (x > 0) {
                cell.style.backgroundColor = "#b8e6b8";
            }
            if (x < 0) {
                cell.style.backgroundColor = "#f5b5b5";
            }
            if (x == 0) {
                cell.style.backgroundColor = "#eeeeee";
            }
            if (x == values[0] || x == values[1] ||
                x == values[2] || x == values[3]) {
                cell.style.border = "3px solid #7653aa";
                cell.style.fontWeight = "bold";
            }
        }
    }
    document.getElementById("result").innerHTML =
        "Мінімальне додатне число: " + values[0] + "<br>" +
        "Максимальне додатне число: " + values[1] + "<br>" +
        "Мінімальне від'ємне число: " + values[2] + "<br>" +
        "Максимальне від'ємне число: " + values[3];
}
function tableObrab() {
    generateArr();
    colorTable();
}
