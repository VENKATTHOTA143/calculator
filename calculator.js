function clearInputField() {
   document.getElementById("input-field").value = "";
 }

function Show(value) {
  document.getElementById("input-field").value += value;
}

function backSpace() {
  let displayed_value = document.getElementById("input-field");
  displayed_value.value = displayed_value.value.slice(0, -1);
}


document.addEventListener("keydown", function (event) {
  const value = document.getElementById("input-field");

  if (event.key === "Backspace") {
    displayed_value.value = displayed_value.value.slice(0, -1);
  }

  if (event.key === "Enter") {
    calculated_value();
  }
});

function calculated_value() {
  const final_value = document.getElementById("input-field");
  try {
    final_value.value = eval(final_value.value);
  } catch (error) {
    final_value.value = "error";
  }
}
