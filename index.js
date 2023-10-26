
let count = 0;
let button = document.getElementById("button");


function update_button() {
  count++;
  console.log(count);
  button.textContent = "I've been clicked " + count + " time(s)";
}