$(() => {
  init();
})

const init = () => {
  burgerInit();
  viewEvents();
}

const checkForm = () => {

  $("#id_form input").next().addClass("d-none");
  let name = $("#id_name").val().trim();
  let email = $("#id_email").val().trim()
  let message = $("#id_message").val().trim()

  if (name.length == 0) {
    $("#id_name").next().removeClass("d-none");
  }

  if (message.length == 0) {
    $("#id_message").next().removeClass("d-none");
  }

  if (!email.includes(".") || !email.includes("@")) {
    $("#id_email").next().removeClass("d-none");
  }
}

const viewEvents = () => {
  $("#id_form").on("submit", (e) => {
    e.preventDefault();
    checkForm()
  })
}