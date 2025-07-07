document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", () => {
    // Collapse all other boxes
    document.querySelectorAll(".box").forEach((b) => {
      if (b !== box) b.classList.remove("expanded");
    });

    // Toggle clicked box
    box.classList.toggle("expanded");
  });
});
