import FooterData from "../../mockData/FooterData.js";
import { FooterTemplate } from "../templates/footerTemplate.js";

const initFooter = () => {
  const FooterNode = document.querySelector(".footer");

  FooterNode.insertAdjacentHTML(
    "beforeend",
   FooterTemplate(FooterData)
  );
};

export default initFooter;