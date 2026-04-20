window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  const main = document.querySelector(".main");

  // Show loader first, hide main
  main.style.display = "none";

  // Wait for few seconds (loader animation time)
  setTimeout(() => {
    // Fade out loader
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";

      // Show main content
      main.style.display = "block";

      // Smooth fade-in
      main.style.opacity = "0";
      setTimeout(() => {
        main.style.opacity = "1";
      }, 50);
    }, 500);
  }, 5000); // 👈 loader duration (2.5 sec)
});
