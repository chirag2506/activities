console.log("hello");

id_field = document.getElementById("std_id");
form = document.getElementById("form");

id_field.addEventListener("change", function () {
    id = id_field.value;
    form.action = `/sqlite/${id}`;
})