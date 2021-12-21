// var formSelect;
// var formSelect;

var formSelect = document.querySelector("form");
var tbodyElem = document.querySelector("tbody");
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
var rowOne = "";
modalDiv.classList.add("displaynone");
function formValidation(formInputs) {
  let isValidForm = true;
  formInputs.forEach((element) => {
    if (!element.value) {
      isValidForm = false;
      element.classList.add("mandatory");
    }
  });
  return isValidForm;
}
function generatTableRow(formInputs) {
  let cells = ``;
  formInputs.forEach((element) => {
    value = element.value ? element.value : "--";
    cells += `<td> ${value} </td> `;
  });
  const row = `<tr>${cells}<td><a><i class='fas fa-edit edit'></i></a></td><td><a ><i class='fas fa-trash delete'></i></a></td> </tr>`;
  return row;
}
addButton[0].addEventListener("click", function (e) {
  e.preventDefault();
  if (!formValidation(inputSelect)) {
    console.log("Invalid form");
    return;
  }
  tbodyElem.innerHTML += generatTableRow(inputSelect);
  var rowInndex = tableEmp.rows.length;
  console.log(rowInndex);
  for (var i = 1; i <= rowInndex; i++) {
    inputSelect[i].value = "";
    tableEmp.rows[i].addEventListener("click", function () {
      rowNo = this.rowIndex;
    });
  }
  console.log(rowNo);
  // for (i = 0; i < inputSelect.length; i++) {
  //   if (inputSelect[i].value == "") {
  //     inputSelect[i].classList.add("mandatory");
  //     addButton[0].disabled = true;
  //     addButton[0].style.color = "red";
  //   } else {
  //     if (inputSelect[inputSelect.length - 1].value == "") {
  //       inputSelect[inputSelect.length - 1].classList.add("mandatory");
  //     } else {
  //       tbodyElem.innerHTML += `<tr >${tableAppend()}<td><a><i class='fas fa-edit edit'></i></a></td><td><a ><i class='fas fa-trash delete'></i></a></td></tr>`;
  //     }
  // var rowInndex = tableEmp.rows.length;
  // console.log(rowInndex);
  // for (var i = 1; i <= rowInndex; i++) {
  //   tableEmp.rows[i].addEventListener("click", function () {
  //     rowNo = this.rowIndex;
  //   });
  // }
  // }

  // function tableAppend() {
  //   for (i = 0; i < inputSelect.length; i++) {
  //     rowOne += `<td>${inputSelect[i].value}</td>`;
  //
  //   }
  //   return rowOne;
  // }
});
tbodyElem.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.closest("tr").remove();
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
});
