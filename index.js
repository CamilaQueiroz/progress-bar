function LoadProgressBar(options) {
  const haveValidTempoTransicao =
    options && options.tempoTransicao && Number(options.tempoTransicao)
      ? true
      : false;

  const haveValidTempoDelay =
    options && options.tempoDelay && Number(options.tempoDelay) ? true : false;

  const progressBarContainer = document.getElementById("progress-bar");
  progressBarContainer.style.display = "flex";
  progressBarContainer.style.maxWidth = "450px";
  progressBarContainer.style.width = "100%";
  progressBarContainer.style.justifyContent = "space-between";
  progressBarContainer.style.alignItems = "center";
  progressBarContainer.style.margin = "0 auto";

  const progressCounter = document.createElement("span");
  progressCounter.textContent = "85%";
  progressCounter.style.color = (options && options.detalhes) || "#000000";
  progressCounter.style.fontFamily = "inherit";
  progressCounter.style.marginLeft = "10px";
  progressCounter.style.fontWeight = "600";
  progressCounter.style.fontSize = "1.1rem";

  const progressBarWrapper = document.createElement("div");
  progressBarWrapper.style.flex = "1";

  progressBarWrapper.style.border = `2px solid ${
    (options && options.detalhes) || "#000000"
  }`;
  progressBarWrapper.style.padding = "3px";
  progressBarWrapper.style.borderRadius = "20px";
  progressBarWrapper.style.height = "20px";

  const progressBar = document.createElement("div");

  progressBar.style.width = "0%";

  progressBar.style.transition = haveValidTempoTransicao
    ? "all " + options.tempoTransicao * 1000 + "ms"
    : "all 1000ms";
  progressBar.style.backgroundColor = (options && options.barra) || "#3bdf8a";
  progressBar.style.height = "100%";
  progressBar.style.borderRadius = "10px";

  progressBarWrapper.appendChild(progressBar);

  progressBarContainer.appendChild(progressBarWrapper);
  progressBarContainer.appendChild(progressCounter);

  setTimeout(
    () => {
      progressBar.style.width = "85%";
    },
    haveValidTempoDelay ? options.tempoDelay * 1000 : 1000
  );
}
