var indexAllTasks = function (response) {
  if ($(".static_pages.index").length > 0) {
    indexTasks(function (response) {
      var htmlString = "";
      response.tasks.forEach(function (task) {
        if (!task.completed) {
          htmlString += "<div class='col-12 col-sm-6 mb-3 p-2 task' data-id='" + task.id + "'>" + task.content + "</div><div class='col-12 col-sm-3 mb-3 p-2'><button type='submit' class='btn btn-success'>Mark Complete</button></div><div class='col-12 col-sm-3 mb-3 p-2'><button type='submit' class='btn btn-danger'>Remove</button></div>";
        } else if (task.completed) {
          htmlString += "<div class='col-12 col-sm-6 mb-3 p-2 text-success task' data-id='" + task.id + "'>" + task.content + "</div><div class='col-12 col-sm-3 mb-3 p-2'><button type='submit' class='btn btn-primary'>Mark Active</button></div><div class='col-12 col-sm-3 mb-3 p-2'><button type='submit' class='btn btn-danger'>Remove</button></div>";
        }
      });

      $("#tasks").html(htmlString);
    });
  }
};

var indexActiveTasks = function (response) {
  if ($(".static_pages.index").length > 0) {
    indexTasks(function (response) {
      var htmlString = "";
      response.tasks.forEach(function (task) {
        if (!task.completed) {
          htmlString += "<div class='col-12 col-sm-6 mb-3 p-2 task' data-id='" + task.id + "'>" + task.content + "</div><div class='col-12 col-sm-3 mb-3 p-2'><button type='submit' class='btn btn-success'>Mark Complete</button></div><div class='col-12 col-sm-3 mb-3 p-2'><button type='submit' class='btn btn-danger'>Remove</button></div>";
        }
      });

      $("#tasks").html(htmlString);
    });
  }
};

var indexCompletedTasks = function (response) {
  if ($(".static_pages.index").length > 0) {
    indexTasks(function (response) {
      var htmlString = "";
      response.tasks.forEach(function (task) {
        if (task.completed) {
          htmlString += "<div class='col-12 col-sm-6 mb-3 p-2 text-success task' data-id='" + task.id + "'>" + task.content + "</div><div class='col-12 col-sm-3 mb-3 p-2'><button type='submit' class='btn btn-success'>Mark Complete</button></div><div class='col-12 col-sm-3 mb-3 p-2'><button type='submit' class='btn btn-danger'>Remove</button></div>";
        }
      });

      $("#tasks").html(htmlString);
    });
  }
};
