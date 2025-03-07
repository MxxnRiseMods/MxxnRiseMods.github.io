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

document.addEventListener("DOMContentLoaded", () => {
  // Handle Add Mod Form Submission (Admin Page)
  const form = document.querySelector("#addModForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const modName = document.querySelector("#modName").value;
      const modDescription = document.querySelector("#modDescription").value;
      const modFile = document.querySelector("#modFile").files[0];

      if (modFile) {
        const mods = JSON.parse(localStorage.getItem("mods")) || [];
        const modData = {
          name: modName,
          description: modDescription,
          fileName: modFile.name
        };
        mods.push(modData);
        localStorage.setItem("mods", JSON.stringify(mods));
        alert(`Mod "${modName}" added successfully!`);
        form.reset();
      } else {
        alert("Please upload a valid .jar file!");
      }
    });
  }

  // Display Mods on the Mods Page
  const modsList = document.querySelector("#modsList");

  if (modsList) {
    const mods = JSON.parse(localStorage.getItem("mods")) || [];
    if (mods.length === 0) {
      modsList.innerHTML = "<p>No mods available yet. Check back soon!</p>";
    } else {
      mods.forEach((mod) => {
        const modElement = document.createElement("div");
        modElement.className = "mod";
        modElement.innerHTML = `
          <h3>${mod.name}</h3>
          <p>${mod.description}</p>
          <a href="#">Download ${mod.fileName}</a>
        `;
        modsList.appendChild(modElement);
      });
    }
  }
});
