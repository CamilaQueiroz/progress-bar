function LoadProgressBar(
  detailsColor = null,
  progressBarBg = null,
  timeToLoad = null
) {
  const progressBarContainer = document.getElementById("progress-bar");
  progressBarContainer.style.display = "flex";
  progressBarContainer.style.maxWidth = "450px";
  progressBarContainer.style.width = "100%";
  progressBarContainer.style.justifyContent = "space-between";
  progressBarContainer.style.alignItems = "center";
  progressBarContainer.style.margin = "0 auto";

  const progressCounter = document.createElement("span");
  progressCounter.textContent = "85%";
  progressCounter.style.color = detailsColor || "#ffffff";
  progressCounter.style.fontFamily = "inherit";
  progressCounter.style.marginLeft = "10px";
  progressCounter.style.fontWeight = "600";
  progressCounter.style.fontSize = "1.1rem";

  const progressBarWrapper = document.createElement("div");
  progressBarWrapper.style.flex = "1";

  progressBarWrapper.style.border = `2px solid ${detailsColor || "#ffffff"}`;
  progressBarWrapper.style.padding = "3px";
  progressBarWrapper.style.borderRadius = "20px";
  progressBarWrapper.style.height = "20px";

  const progressBar = document.createElement("div");

  progressBar.style.width = "0%";
  progressBar.style.transition = "all 1s";
  progressBar.style.backgroundColor = progressBarBg || "#3bdf8a";
  progressBar.style.height = "100%";
  progressBar.style.borderRadius = "10px";

  progressBarWrapper.appendChild(progressBar);

  progressBarContainer.appendChild(progressBarWrapper);
  progressBarContainer.appendChild(progressCounter);

  setTimeout(() => {
    progressBar.style.width = "85%";
  }, timeToLoad || 1000);
}
