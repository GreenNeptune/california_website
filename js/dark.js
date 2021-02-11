const darkInit = () => {
  renderDarkWindow();
  declareDarkEvents();
}

const renderDarkWindow = () => {
  $('body').append(`
  <div class="dark_window" id="id_dark_window">
  <div class="dark_box_inside">
  <button id="dark_close_btn" class="btn btn-dark m-2">X</button>
    <img id="id_dark_img" src="" class="w-100 float-left mr-2">
  </div>
</div>
  `);
}

const declareDarkEvents = () => {
  $("#dark_close_btn").on("click", () => {
    $("#id_dark_window").css("display", "none");
  })

}
const showDark = (_img, _title, _info) => {
  $("#id_dark_window").css("display", "flex")
  $("#id_dark_img").attr("src", _img);
}