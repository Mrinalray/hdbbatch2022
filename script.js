// Search Functionality
const searchBar = document.getElementById("searchBar");
const studentList = document.getElementById("studentList");
const students = studentList.getElementsByClassName("student-card");

searchBar.addEventListener("keyup", function () {
  const filter = searchBar.value.toLowerCase();
  for (let i = 0; i < students.length; i++) {
    const name = students[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    if (name.includes(filter)) {
      students[i].style.display = "";
    } else {
      students[i].style.display = "none";
    }
  }
});
