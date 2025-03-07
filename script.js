document.addEventListener("DOMContentLoaded", () => {
  // Handle Add Mod Form Submission
  const form = document.querySelector("#addModForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const modName = document.querySelector("#modName").value;
      const modDescription = document.querySelector("#modDescription").value;

      alert(`Mod "${modName}" added!`);
    });
  }
});
