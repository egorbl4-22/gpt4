import StartExploreData from "../../mockData/StartExploreData.js";
import { startExploreTemplate } from "../templates/startExploreTemplate.js";

const initStartExplore = () => {
  const StartExploreNode = document.querySelector(".start_explore");

  StartExploreNode.insertAdjacentHTML(
    "beforeend",
    startExploreTemplate(StartExploreData)
  );
};

export default initStartExplore;