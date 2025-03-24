let nameInput = document.getElementById("name");
let commentInput = document.getElementById("comment");
let commentButton = document.getElementById("comment-button");

function updateButtonState() {
  let nameValue = nameInput.value.trim();
  let commentValue = commentInput.value.trim();

  commentButton.disabled = !(nameValue && commentValue);
}
nameInput.addEventListener("input", updateButtonState);
commentInput.addEventListener("input", updateButtonState);

commentButton.addEventListener("click", function (e) {
  e.preventDefault();
});
