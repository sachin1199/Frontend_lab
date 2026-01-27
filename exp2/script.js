const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");

const viewDiv = document.getElementById("profileView");
const editDiv = document.getElementById("profileEdit");

const nameText = document.getElementById("nameText");
const rollText = document.getElementById("rollText");
const courseText = document.getElementById("courseText");

const nameInput = document.getElementById("nameInput");
const rollInput = document.getElementById("rollInput");
const courseInput = document.getElementById("courseInput");

editBtn.addEventListener("click", () => {
  nameInput.value = nameText.innerText;
  rollInput.value = rollText.innerText;
  courseInput.value = courseText.innerText;

  viewDiv.classList.add("hidden");
  editDiv.classList.remove("hidden");
});

saveBtn.addEventListener("click", () => {
  nameText.innerText = nameInput.value;
  rollText.innerText = rollInput.value;
  courseText.innerText = courseInput.value;

  editDiv.classList.add("hidden");
  viewDiv.classList.remove("hidden");
});
