function addFruit(event) {
    if (event.key == "Enter") {
        let fruit = document.getElementById("fruit").value;
        let price = document.getElementById("price").value;
        if (price == "" || Number(price) < 0) {
            alert("Введіть правильну вартість!");
            return;
        }
        let li = document.createElement("li");
        li.textContent = fruit + " - " + price + " грн";
        document.getElementById("result").appendChild(li);
        document.getElementById("price").value = "";
    }
}
