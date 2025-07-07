document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach((b) => {
      if (b !== box) b.classList.remove("expanded");
    });
    box.classList.toggle("expanded");
  });
});
