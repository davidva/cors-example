var send = function() {
  $("p").text("");
  var text = $("input").val();
  $.ajax({
    url: "http://localhost:8001/perform",
    method: "POST"
  }).done(showSuccess).fail(showError)
}

var showSuccess = function(data) {
  $("p").text("success");
}

var showError = function() {
  $("p").text("error");
}

$().ready(function() {
  $("button").on("click", send);
});
