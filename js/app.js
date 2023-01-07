import MainController from "./controllers/MainController.js";

//dom이 모두 로드되고,controller의 init()실행
document.addEventListener("DOMContentLoaded",() => {
  MainController.init();
});