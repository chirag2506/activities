console.log("hello");

const forms = document.getElementsByClassName("itemForm");
if (forms.length === 1) {
    forms[0].querySelectorAll("button")[1].disabled = true;
}

let id = 1;
function IDgenerate() {
    return id++;
}

function AddNewLine(item_id, current_form_number) {

    if (forms.length === 1) {
        forms[0].querySelectorAll("button")[1].disabled = false;
    }

    formList = document.getElementsByClassName("itemForm");
    formItem = formList[formList.length - 1];
    // console.log(formItem);

    let clone = $(item_id).clone();
    var form_number = IDgenerate();

    iName = 'iName'.concat(form_number.toString());
    iQuantity = 'iQuantity'.concat(form_number.toString());
    iRate = 'iRate'.concat(form_number.toString());
    iAmount = 'iAmount'.concat(form_number.toString());
    curr = 'curr'.concat(form_number.toString());
    iCopy = 'iCopyButton'.concat(form_number.toString());
    iDelete = 'iDeleteButton'.concat(form_number.toString());

    clone.find('#iName'.concat(current_form_number)).attr("name", iName);
    clone.find('#iName'.concat(current_form_number)).attr("id", iName);

    clone.find('#iQuantity'.concat(current_form_number)).attr("name", iQuantity);
    clone.find('#iQuantity'.concat(current_form_number)).attr("id", iQuantity);

    clone.find('#iRate'.concat(current_form_number)).attr("name", iRate);
    clone.find('#iRate'.concat(current_form_number)).attr("id", iRate);

    clone.find('#iAmount'.concat(current_form_number)).attr("name", iAmount);
    clone.find('#iAmount'.concat(current_form_number)).attr("id", iAmount);

    clone.find('#curr'.concat(current_form_number)).attr("name", curr);
    //setting current currency in curr
    clone.find('#curr'.concat(current_form_number)).attr("value", document.getElementById("currency").options[currency.selectedIndex].value);
    clone.find('#curr'.concat(current_form_number)).attr("id", curr);

    // clone.find('#iCopyButton0').attr("name", iName);
    clone.find('#iCopyButton'.concat(current_form_number)).attr("id", iCopy);

    clone.find('#iDeleteButton'.concat(current_form_number)).attr("id", iDelete);

    // console.log(clone[0]);
    let div_to_append = '<div class="itemForm" id="item'.concat(form_number.toString(), '">', clone[0].innerHTML, '</div');
    // console.log(div_to_append);

    formItem.insertAdjacentHTML('afterend', div_to_append);
}

function newLine(){
    
    first_form_in_list_id = forms[0].id;
    first_form_in_list_id_number = first_form_in_list_id.slice(first_form_in_list_id.length - 1);
    
    AddNewLine(`#${first_form_in_list_id}`, first_form_in_list_id_number);
}

function changeAmount() {

    //update amount for each item

    // forms_length = document.getElementsByClassName("itemForm").length;
    for (let index = 0; index < id; index++) {
        if (!document.getElementById(`item${index}`)) {
            continue;
        }
        qunatity = document.getElementById("iQuantity".concat(index)).value;
        rate = document.getElementById("iRate".concat(index)).value;
        document.getElementById("iAmount".concat(index)).value = qunatity * rate;
    }

    changeSubTotal();
    changeTotal();

}

function changeSubTotal() {

    //update total amount (wihout tax)
    // forms_length = document.getElementsByClassName("itemForm").length;
    let subTotal = 0;
    for (let index = 0; index < id; index++) {
        if (!document.getElementById(`item${index}`)) {
            continue;
        }
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

var currency_dict = {
    "INR": 1,
    "GBP": 101.45,
    "USD": 74.64,
    "AED": 20.32,
    "EUR": 84.55,

};
var currency_active = "INR";
function setCurrency() {

    var currency = document.getElementById("currency");
    var new_currency_name = currency.options[currency.selectedIndex].value;

    // console.log(currency_dict[currency_active]);
    // console.log(currency_dict[new_currency_name]);
    conversion_factor = currency_dict[currency_active] / currency_dict[new_currency_name];
    // console.log(conversion_factor);

    for (let index = 0; index < id; index++) {
        if (!document.getElementById(`item${index}`)) {
            continue;
        }
        document.getElementById("curr".concat(index)).value = new_currency_name;
        document.getElementById("iRate".concat(index)).value *= conversion_factor;
    }
    document.getElementById("totalLabel").innerHTML = "<b>Total (".concat(new_currency_name, ")</b>");
    document.getElementById("totalDueCurr").innerHTML = "<b>".concat(new_currency_name, "</b>");

    changeAmount();
    currency_active = new_currency_name;
}

function download() {
    element = document.getElementById("page");

    var opt = {
        margin: 0.25,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'legal', orientation: 'landscape' }
    };

    html2pdf().set(opt).from(element).save("invoice.pdf");
}

function copyForm(clicked_id) {

    current_form_number = clicked_id.slice(clicked_id.length - 1);

    AddNewLine("#item".concat(current_form_number), current_form_number);

    new_form_number = id - 1;
    document.getElementById('iName'.concat(new_form_number.toString())).value =
        document.getElementById('iName'.concat(current_form_number)).value;
    document.getElementById('iQuantity'.concat(new_form_number.toString())).value =
        document.getElementById('iQuantity'.concat(current_form_number)).value;
    document.getElementById('iRate'.concat(new_form_number.toString())).value =
        document.getElementById('iRate'.concat(current_form_number)).value;
    document.getElementById('iAmount'.concat(new_form_number.toString())).value =
        document.getElementById('iAmount'.concat(current_form_number)).value;

    changeAmount();

}

function deleteForm(delete_id) {

    current_form_number = delete_id.slice(delete_id.length - 1);
    curent_form = document.getElementById("item".concat(current_form_number));
    curent_form.remove();

    if (forms.length === 1) {
        forms[0].querySelectorAll("button")[1].disabled = true;
    }

    changeAmount();
}