function etchASketch() {
  container.innerHTML = "";
  let width = Number(prompt("Size of Grid"));
  let height = width;
  container.setAttribute(
    "style",
    `height: ${height * 25}px; width:${width * 25}px `
  );
  for (let i = 1; i <= width * height; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    box.addEventListener("mouseover", function () {
      let red = Math.round(Math.random() * 255);
      let green = Math.round(Math.random() * 255);
      let blue = Math.round(Math.random() * 255);
      box.setAttribute(
        "style",
        `background-color: rgb(${red},${green},${blue})`
      );
    });
  }
}
etchASketch();
const resetButton = document.querySelector("#le-button");
resetButton.addEventListener("click", etchASketch);
