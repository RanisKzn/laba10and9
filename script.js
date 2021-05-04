function countResult() {
  var res = document.getElementById("result");
  var rad1 = document.getElementsByName("subject");
  var rad2 = document.getElementsByName("subject1");
  var rad3 = document.getElementsByName("subject2");
  var rad4 = document.getElementsByName("subject3");
  var rad5 = document.getElementsByName("subject4");
  var rad6 = document.getElementsByName("subject5");
  var rad7 = document.getElementsByName("subject6");
  var rad8 = document.getElementsByName("subject7");
  var rad9 = document.getElementsByName("subject8");

  var counter = 0;
  if (rad1[0].checked) {
    counter++;
  }
  if (rad2[2].checked) {
    counter++;
  }
  if (rad3[2].checked) {
    counter++;
  }
  if (rad4[1].checked) {
    counter++;
  }
  if (rad5[0].checked) {
    counter++;
  }
  if (rad6[0].checked) {
    counter++;
  }
  if (rad7[2].checked) {
    counter++;
  }
  if (rad8[1].checked) {
    counter++;
  }
  if (rad9[2].checked) {
    counter++;
  }

  var str =
    String(document.getElementById("inputname").value) +
    " your resault " +
    String(counter);
  res.innerHTML = str;
}
