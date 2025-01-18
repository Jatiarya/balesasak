function showPopup(title, content) {
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-content").innerText = content;
  document.getElementById("popup-overlay").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup-overlay").style.display = "none";
}
