$(document).on("turbolinks:load", function () {
  if ($('.static_pages.index').length > 0) {
    indexTasks(function (response) {
      var htmlString = response.tasks.map(function(task) {
        return "<div class='col-12 col-sm-3 mb-3 p-2 task' data-id='" + task.id + "'>" + task.content + "</div><div class='col-12 col-sm-3 mb-3 p-2'><button type='submit' class='btn btn-success'>Mark Complete</button></div><div class='col-12 col-sm-3 mb-3 p-2'><button type='submit' class='btn btn-primary'>Mark Active</button></div><div class='col-12 col-sm-3 mb-3 p-2'><button type='submit' class='btn btn-danger'>Remove</button></div>";
      });

      $("#tasks").html(htmlString);
    });
  }

});
