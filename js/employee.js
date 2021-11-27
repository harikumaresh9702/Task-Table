var form_Select = document.querySelector("form");
var tbody_Ele = document.querySelector("tbody");
var Input_Select = document.getElementsByClassName("form-control");
var remove_Button = document.getElementsByClassName("delete");
var close_Modal = document.getElementById("close");
var Modal_Div = document.getElementById("edit-div");
var Add_button = document.getElementsByClassName("addEm");
var Edit_button = document.getElementsByClassName("EditEm");
var Table_row = document.getElementsByClassName("Table_row");
var table = document.getElementById("table"),
  rindex;

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

arr.forEach(glow);
function glow(out) {
  blur(out);
  return Input_Select[out].addEventListener("focus", function (e) {
    e.target.classList.remove("requried");
    e.target.classList.add("glow");
    Add_button[0].disabled = false;
    Add_button[0].style.color = "white";
  });
}
function blur(out) {
  return Input_Select[out].addEventListener("blur", function (e) {
    e.target.classList.remove("glow");
  });
}

form_Select.addEventListener("submit", function (e) {
  e.preventDefault();
  tbody_Ele.innerHTML +=
    "<tr class='Table_rows'><td>" +
    (Input_Select[0].value == "" ? "-" : Input_Select[0].value) +
    "</td><td>" +
    (Input_Select[1].value == "" ? "-" : Input_Select[1].value) +
    "</td><td>" +
    (Input_Select[2].value == "" ? "-" : Input_Select[2].value) +
    "</td><td>" +
    (Input_Select[3].value == "" ? "-" : Input_Select[3].value) +
    "</td><td>" +
    (Input_Select[4].value == "" ? "-" : Input_Select[4].value) +
    "</td><td>" +
    (Input_Select[5].value == "" ? "-" : Input_Select[5].value) +
    "</td><td><a><i class='fas fa-edit edit'></i></a></td><td><a ><i class='fas fa-trash delete'></i></a></td></tr>";
  arr.map(zero);
  function zero(out) {
    Input_Select[out].value = "";
  }
  for (var i = 0; i <= table.rows.length; i++) {
    table.rows[i].addEventListener("click", function () {
      var rindex = this.rowIndex;
      Edit_button[0].addEventListener("click", function (e) {
        e.preventDefault();
        table.rows[rindex].cells[0].innerHTML = Input_Select[6].value;
        table.rows[rindex].cells[1].innerHTML = Input_Select[7].value;
        table.rows[rindex].cells[2].innerHTML = Input_Select[8].value;
        table.rows[rindex].cells[3].innerHTML = Input_Select[9].value;
        table.rows[rindex].cells[4].innerHTML = Input_Select[10].value;
        table.rows[rindex].cells[5].innerHTML = Input_Select[11].value;
        Modal_Div.style.display = "none";
      });
    });
  }
});

tbody_Ele.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.closest("tr").remove();
    console.log(rindex);
  }
});

close_Modal.addEventListener("click", function () {
  //alert();
  console.log(close_Modal.value);
  Modal_Div.style.display = "none";
});
Add_button[0].addEventListener("click", function (e) {
  var required = [0, 1, 2, 3, 4];
  required.map(
    (restrict = (index) => {
      if (Input_Select[index].value == "") {
        Input_Select[index].classList.add("requried");
        Add_button[0].disabled = true;
        Add_button[0].style.color = "red";
      } else {
        tbody_Ele.addEventListener("click", function (e) {
          if (e.target.classList.contains("edit")) {
            var edit_Name = e.target.closest("tr").cells[0].innerHTML;
            var edit_Age = e.target.closest("tr").cells[1].innerHTML;
            var edit_Gender = e.target.closest("tr").cells[2].innerHTML;
            var edit_Basic = e.target.closest("tr").cells[3].innerHTML;
            var edit_Proof = e.target.closest("tr").cells[4].innerHTML;
            var edit_Address = e.target.closest("tr").cells[5].innerHTML;
            Input_Select[6].value = edit_Name;
            Input_Select[7].value = edit_Age;
            Input_Select[8].value = edit_Gender;
            Input_Select[9].value = edit_Basic;
            Input_Select[10].value = edit_Proof;
            Input_Select[11].value = edit_Address;
            Modal_Div.style.display = "block";
          }
        });
      }
    })
  );
});
