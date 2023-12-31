import earlyAccess from "../../mockData/earlyAccess.js";
import { EarlyAccessTemplate } from "../templates/earlyAccessTemplate.js";

const initEarlyAccess = () => {
  const EarlyAccessNode = document.querySelector(".early_access");

  EarlyAccessNode.insertAdjacentHTML(
    "beforeend",
    EarlyAccessTemplate(earlyAccess)
  );
};

export default initEarlyAccess;