import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initEarlyAccess from "../components/initEarlyAccess.js";
import initStartExplore from "../components/initStartExplore.js";
import initBlog from "../components/initBlog.js";
import initFooter from "../components/initFooter.js";

const initHomePage = (element) => {
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section early_access"></section>
    <section class="section start_explore"></section>
    <section class="section blog"></section>
    <section class="section footer"></section>
    <p class="all_rights">© 2023 GPT-3. Все права защищены.</p>
  `;
    element.insertAdjacentHTML("beforeend", template);
};

const rootNode = document.querySelector("#root");

const homePage = () => {
  
  // инициализация элементов Главной страницы
  initHomePage(rootNode);

  // инициализация шапки страницы с мок датой
  initHeader();
  // инициализация бургера для адаптивного меню
  initBurger();
  // инициализация хиро раздела
  initHero();

  // инициализация хиро раздела
  initBrands();

  // инициализация хиро раздела
  initWhatIsGpt();

  // инициализация раздела "Будущее наступило" с мок датой
  initFutureHere();

  initEarlyAccess();

  initStartExplore();

  initBlog();

  initFooter();

};

export default homePage;