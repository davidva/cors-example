var send = function() {
  $("p").text("");

  var payload = JSON.stringify({ text: $("input").val() });

  var options = {
    url: "http://localhost:8001/perform",
    method: "POST",
    contentType: "application/json; charset=utf-8",
    data: payload
  };

  $.ajax(options).done(showSuccess).fail(showError)
}

var showSuccess = function(data) {
  $("p").text(data.text);
}

var showError = function() {
  $("p").text("error");
}

$().ready(function() {
  $("button").on("click", send);
});
