import { Form } from "@bubble/common";

const svgns = "http://www.w3.org/2000/svg";

export const makeSvgFromBubbles = (bubbles: Form[]) => {
  console.log("bubbles: ", bubbles);
  const svg = document.createElementNS(svgns, "svg");
  svg.setAttribute("viewBox", "0 0 1000 1000");
  for (const form of bubbles) {
    console.log("form: ", form);
    const formNode = document.createElementNS(svgns, "circle");
    formNode.setAttributeNS(null, "cx", form.data.cx + "");
    formNode.setAttributeNS(null, "cy", form.data.cy + "");
    formNode.setAttributeNS(null, "r", form.data.r + "");
    formNode.setAttributeNS(null, "fill", form.data.color);
    svg.appendChild(formNode);
  }
  return svg;
};
