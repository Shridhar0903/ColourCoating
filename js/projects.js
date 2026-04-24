function openLightbox(imgSrc) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = imgSrc;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

/* CLOSE ON OUTSIDE CLICK */
document.getElementById("lightbox").addEventListener("click", function (e) {
  if (e.target.id === "lightbox") {
    closeLightbox();
  }
});
