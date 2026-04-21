// Select loader and main content
const loader = document.querySelector(".loader"); // Loader screen
const main = document.querySelector(".main"); // Main website content

// 🔑 Check if loader already shown in this session
if (sessionStorage.getItem("loaderShown")) {
  // 👉 If already shown → skip loader
  loader.style.display = "none"; // Hide loader immediately
  main.style.display = "block"; // Show main content
  main.style.opacity = "1"; // Ensure visible
} else {
  // 👉 First time visit → show loader
  sessionStorage.setItem("loaderShown", "true"); // Save flag

  window.addEventListener("load", function () {
    main.style.display = "none"; // Hide main content initially

    // ⏳ Wait for loader animation time
    setTimeout(() => {
      loader.style.opacity = "0"; // Fade out loader

      setTimeout(() => {
        loader.style.display = "none"; // Remove loader

        main.style.display = "block"; // Show main content

        // ✨ Smooth fade-in effect
        main.style.opacity = "0";
        setTimeout(() => {
          main.style.opacity = "1";
        }, 50);
      }, 500); // Time for fade-out animation
    }, 3000); // ⏱ Loader duration (change if needed)
  });
}
