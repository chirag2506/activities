class Student {
    constructor(name, rollno, percentage) {
        this.name = name
        this.rollno = rollno
        this.percentage = percentage
    }
}

var index = 0;
function generateIndex() {
    return index++;
}

class UI {

    static addStudentToList = (student) => {
        const list = document.getElementById('students-list');
        const row = document.createElement('tr')
        const id = generateIndex();
        row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.rollno}</td>
        <td>${student.percentage}</td>
        <td><button id="del${id}" class="btn btn-danger btn-sm delete" onClick="deleteStudent(this.id)">X</button></td>`

        list.appendChild(row)

        console.log(student);
    }

    static clearFields() {
        document.querySelector('#name').value = "";
        document.querySelector('#rollno').value = "";
        document.querySelector('#percentage').value = "";
    }

    static showAlert(message, className) {
        const div = document.createElement('div')
        div.innerText = message
        div.className = `alert alert-${className}`
        document.getElementById('student-form').prepend(div)
        setTimeout(() => document.querySelector('.alert').remove(), 2000)
    }
}

//Add a Student
document.querySelector('#student-form').addEventListener('submit', addAStudent, false)

function addAStudent(e) {
    // prevent actual submission
    e.preventDefault()
    // Get Form Values
    const name = document.querySelector('#name').value;
    const rollno = document.querySelector('#rollno').value;
    const percentage = document.querySelector('#percentage').value;

    if (!name || !rollno || !percentage) {
        UI.showAlert("Please enter correct details", "danger");
        return;
    }
    if (!Number(percentage)) {
        UI.showAlert("Please ensure that percentage is in form of numbers", "danger");
        return;
    }
    if (Number(percentage) > 100 || Number(percentage) < 0) {
        UI.showAlert("Please ensure that percentage is between 0 and 100", "danger");
        return;
    }

    // Instantiate a new Book object
    const student = new Student(name, rollno, percentage)
    // Add book object to UI
    UI.addStudentToList(student)
    UI.showAlert("Student Added", 'success')
    UI.clearFields();
}

function deleteStudent(delete_id) {
    document.getElementById(delete_id).parentElement.parentElement.remove()
}