$(() => {
  init();
})

const init = () => {
  burgerInit();
  AOS.init();
  declareImgsClick();
  darkInit();
}

const declareImgsClick = () => {
  $(".gallery img").on("click", function () {
    let urlImg = $(this).attr("src");
    showDark(urlImg);
  })
}