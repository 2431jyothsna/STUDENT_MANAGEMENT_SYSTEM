let students = [];

function addStudent() {
  let name = document.getElementById("name").value.trim();
  let id = document.getElementById("id").value.trim();
  let grade = document.getElementById("grade").value.trim();

  if (name && id && grade) {
    students.push({ name, id, grade });
    displayStudents();
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("grade").value = "";
  } else {
    alert("Please fill in all fields.");
  }
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

function displayStudents() {
  let table = document.getElementById("studentTable");
  table.innerHTML = "";

  students.forEach((student, index) => {
    table.innerHTML += `
      <tr>
        <td data-label="Name">${student.name}</td>
        <td data-label="ID">${student.id}</td>
        <td data-label="Grade">${student.grade}</td>
        <td data-label="Actions">
          <button onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}
