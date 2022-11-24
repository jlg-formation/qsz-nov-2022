import { getBubbles } from "./bubbles";
import "./style.scss";
import { makeSvgFromBubbles } from "./svg";

const app = document.querySelector<HTMLDivElement>("#app");
if (app === null) {
  throw new Error("#app not found");
}

setInterval(async () => {
  const bubbles = await getBubbles();
  const svg = makeSvgFromBubbles(bubbles);
  app.innerHTML = "";
  app.appendChild(svg);
}, 100);
