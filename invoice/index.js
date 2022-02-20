console.log("hello");

let id = 1;
function IDgenerate() {
    return id++;
}

function newLine() {
    formList = document.getElementsByClassName("itemForm");
    formItem = formList[formList.length - 1];
    // console.log(formItem);

    let clone = $("#item0").clone();
    var form_number = IDgenerate();

    iName = 'iName'.concat(form_number.toString());
    iQuantity = 'iQuantity'.concat(form_number.toString());
    iRate = 'iRate'.concat(form_number.toString());
    iAmount = 'iAmount'.concat(form_number.toString());

    clone.find('#iName0').attr("name", iName);
    clone.find('#iName0').attr("id", iName);

    clone.find('#iQuantity0').attr("name", iQuantity);
    clone.find('#iQuantity0').attr("id", iQuantity);

    clone.find('#iRate0').attr("name", iRate);
    clone.find('#iRate0').attr("id", iRate);

    clone.find('#iAmount0').attr("name", iAmount);
    clone.find('#iAmount0').attr("id", iAmount);

    // console.log(clone[0]);
    let div_to_append = '<div class="itemForm" id="item'.concat(form_number.toString(), '">', clone[0].innerHTML, '</div');
    // console.log(div_to_append);

    formItem.insertAdjacentHTML('afterend', div_to_append);
}

function changeAmount() {

    //update amount for each item

    forms_length = document.getElementsByClassName("itemForm").length;
    for (let index = 0; index < forms_length; index++) {
        qunatity = document.getElementById("iQuantity".concat(index)).value;
        rate = document.getElementById("iRate".concat(index)).value;
        document.getElementById("iAmount".concat(index)).value = qunatity * rate;
    }

    changeSubTotal();
    changeTotal();

}

function changeSubTotal() {

    //update total amount (wihout tax)
    forms_length = document.getElementsByClassName("itemForm").length;
    let subTotal = 0;
    for (let index = 0; index < forms_length; index++) {
        subTotal += Number(document.getElementById("iAmount".concat(index)).value);
    }

    document.getElementById("subTotal").value = subTotal;
}

function changeTotal() {

    //update total amount
    vat = Number(document.getElementById("vAT").value);
    subTotal = Number(document.getElementById("subTotal").value);

    document.getElementById("vATAmount").value = subTotal * vat / 100;

    document.getElementById("total").value = subTotal + (subTotal * vat / 100);
    document.getElementById("totalDue").value = subTotal + (subTotal * vat / 100);
}

function setCurrency() {

    var currency = document.getElementById("currency");
    var currency_name = currency.options[currency.selectedIndex].value;

    document.getElementById("curr1").value = currency_name;
    document.getElementById("totalLabel").innerHTML = "<b>Total (".concat(currency_name, ")</b>");
    document.getElementById("totalDueCurr").innerHTML = "<b>".concat(currency_name, "</b>");
}