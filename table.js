function Edit() {
  var table = document.getElementById("mytable");
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      document.getElementById("Name").value = this.cells[0].innerHTML;
      document.getElementById("Number").value = this.cells[1].innerHTML;
      document.getElementById("Gmail").value = this.cells[2].innerHTML;
      console.log(i);
      update.setAttribute("style", "visibility:visibil");
    };
  }
}
function Save() {
  var table = document.getElementById("mytable");
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      this.cells[0].innerHTML = document.getElementById("Name").value;
      this.cells[1].innerHTML = document.getElementById("Number").value;
      this.cells[2].innerHTML = document.getElementById("Gmail").value;
      document.getElementById("Name").value = "";
      document.getElementById("Number").value = "";
      document.getElementById("Gmail").value = "";
    };
  }
}
function Delete() {
  var table = document.getElementById("mytable");
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      var r = confirm("Are you sure you want to delete this row?");
      if (r == true) {
        this.remove();
      } else {
        txt = "You pressed Cancel!";
      }
    };
  }
}
function AddData(e) {
  e.preventDefault();
  var name = document.getElementById("Name").value;
  var number = document.getElementById("Number").value;
  var gmail = document.getElementById("Gmail").value;
  var table = document.getElementById("tbody");
  var temp = `<tr>
    <td>${name}</td>
    <td>${number}</td>
    <td>${gmail}</td>
    <td><button onclick="Edit()">Edit</button></td>
    <td><button onclick="Delete()">Delete</button></td>
    <td><button onclick="Save()" id='save'>Save</button></td>
    </tr>
    `;
  table.innerHTML += temp;
  document.getElementById("Name").value = "";
  document.getElementById("Gmail").value = "";
  document.getElementById("Number").value = "";
}