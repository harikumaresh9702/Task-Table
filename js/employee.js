// var formSelect;
// var formSelect;

var formSelect = document.querySelector("form");
var tbodyElem = document.getElementById("employeeTd");
var inputSelect = document.querySelectorAll(".required");
var editInput = document.getElementsByClassName("editInput");
var removeButton = document.getElementsByClassName("delete");
var closeModal = document.getElementById("close");
var modalDiv = document.getElementById("editModal");
var addButton = document.getElementsByClassName("addEm");
var editButton = document.getElementById("editEm");
var tableRow = document.getElementsByClassName("tableRow");
var tableEmp = document.getElementById("employeeDisplay");
var rowNo = "";
var rowIndex = "";
modalDiv.classList.add("displaynone");
formValidation = (inputElem) => {
  let formReturn = true;
  inputElem.forEach((data) => {
    if (!data.value) {
      data.classList.add("mandatory");
      formReturn = false;
      return;
    }
    data.classList.remove("mandatory");
  });
  return formReturn;
};
formEmpty = (inputElem) => {
  inputElem.forEach((data) => {
    data.value = "";
  });
};
formRender = (inputElem) => {
  let tdElem = ``;
  inputElem.forEach((data) => {
    tdElem += `<td>${data.value}</td>`;
  });
  const row = `<tr>${tdElem}<td><a><i class='fas fa-edit edit'></i></a></td><td><a ><i class='fas fa-trash delete'></i></a></td> </tr>`;
  return row;
};
// Insert a row at the end of table

// Insert a cell at the end of the row

// Append a text node to the cell

addButton[0].addEventListener("click", function (e) {
  e.preventDefault();
  if (!formValidation(inputSelect)) {
    console.log("invalid");
    return;
  }
  tbodyElem.innerHTML += formRender(inputSelect);
  rowIndex = tableEmp.rows.length;
  formEmpty(inputSelect);
  console.log(rowIndex);
  for (var i = 1; i <= rowIndex; i++) {
    tableEmp.rows[i].addEventListener("click", function () {
      rowNo = this.rowIndex;
      console.log(rowNo);
    });
  }
});
tbodyElem.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("are u sure want to delete")) {
      e.target.closest("tr").remove();
    } else {
      ("");
    }
  }
});

tbodyElem.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit")) {
    modalDiv.classList.remove("displaynone");
    for (i = 0; i < editInput.length; i++) {
      editInput[i].value = e.target.closest("tr").cells[i].innerHTML;
    }
  }
});
closeModal.addEventListener("click", function () {
  modalDiv.classList.add("displaynone");
});

editButton.addEventListener("click", function (e) {
  e.preventDefault();
  for (i = 0; i < editInput.length; i++) {
    tableEmp.rows[rowNo].cells[i].innerHTML = editInput[i].value;
  }
  modalDiv.classList.add("displaynone");
});
