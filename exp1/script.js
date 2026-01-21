//  DARK MODE + DATE (DASHBOARD) 
const themeBtn = document.getElementById("themeBtn");
const dateBox = document.getElementById("dateBox");

if (dateBox) {
  const today = new Date().toDateString();
  dateBox.innerText = "Today: " + today;
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

//  PROFILE EDIT 
const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");

if (editBtn && saveBtn) {
  const viewDiv = document.getElementById("profileView");
  const editDiv = document.getElementById("profileEdit");

  editBtn.addEventListener("click", () => {
    viewDiv.classList.add("hidden");
    editDiv.classList.remove("hidden");
  });

  saveBtn.addEventListener("click", () => {
    document.getElementById("nameText").innerText =
      document.getElementById("nameInput").value;

    document.getElementById("rollText").innerText =
      document.getElementById("rollInput").value;

    document.getElementById("courseText").innerText =
      document.getElementById("courseInput").value;

    editDiv.classList.add("hidden");
    viewDiv.classList.remove("hidden");
  });
}

//  FEEDBACK SUBMIT 
const feedbackBox = document.getElementById("messageBox");
const previewText = document.getElementById("previewText");
const submitBtn = document.getElementById("submitBtn");
const thanksText = document.getElementById("thanksText");

if (feedbackBox) {
  feedbackBox.addEventListener("input", () => {
    previewText.innerText = feedbackBox.value;
  });
}

if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    thanksText.innerText = "Thank you for your feedback!";
    feedbackBox.value = "";
    previewText.innerText = "";
  });
}
