$(document).on("turbolinks:load", function () {
  if ($('.static_pages.index').length > 0) {
    indexTasks(function (response) {
      var htmlString = response.tasks.map(function(task) {
        return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'>" + task.content + "</div><span class='input-group-btn'><button type='submit' class='btn'>Remove</button></span>";
      });

      $("#tasks").html(htmlString);
    });
  }
});
