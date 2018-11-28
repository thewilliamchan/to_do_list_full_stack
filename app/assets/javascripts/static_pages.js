var indexAllTasks = function () {
  if ($(".static_pages.index").length > 0) {
    indexTasks(function (response) {
      var htmlString = "";
      response.tasks.forEach(function (task) {
        if (!task.completed) {
          htmlString += "<div class='col-6 mb-2 p-2 task' data-id='" + task.id + "'>" + task.content + "</div><div class='col-3 mb-2 p-2'><button type='submit' class='btn btn-success'>Mark Complete</button></div><div class='col-3 mb-2 p-2'><button type='submit' class='btn btn-danger'>Remove</button></div>";
        } else if (task.completed) {
          htmlString += "<div class='col-6 mb-2 p-2 text-success task' data-id='" + task.id + "'>" + task.content + "</div><div class='col-3 mb-2 p-2'><button type='submit' class='btn btn-warning'>Mark Active</button></div><div class='col-3 mb-2 p-2'><button type='submit' class='btn btn-danger'>Remove</button></div>";
        }
      });

      $("#tasks").html(htmlString);
    });
  }
};

var indexActiveTasks = function () {
  if ($(".static_pages.index").length > 0) {
    indexTasks(function (response) {
      var htmlString = "";
      response.tasks.forEach(function (task) {
        if (!task.completed) {
          htmlString += "<div class='col-6 mb-2 p-2 task' data-id='" + task.id + "'>" + task.content + "</div><div class='col-3 mb-2 p-2'><button type='submit' class='btn btn-success'>Mark Complete</button></div><div class='col-3 mb-2 p-2'><button type='submit' class='btn btn-danger'>Remove</button></div>";
        }
      });

      $("#tasks").html(htmlString);
    });
  }
};

var indexCompletedTasks = function () {
  if ($(".static_pages.index").length > 0) {
    indexTasks(function (response) {
      var htmlString = "";
      response.tasks.forEach(function (task) {
        if (task.completed) {
          htmlString += "<div class='col-6 mb-2 p-2 text-success task' data-id='" + task.id + "'>" + task.content + "</div><div class='col-3 mb-2 p-2'><button type='submit' class='btn btn-warning'>Mark Active</button></div><div class='col-3 mb-2 p-2'><button type='submit' class='btn btn-danger'>Remove</button></div>";
        }
      });

      $("#tasks").html(htmlString);
    });
  }
};

$(document).on("click", ".btn-outline-secondary", function () {
  var content = $(".toDoInput").val();
  if (content) {
    postTask(content, function (response) {
      $(".toDoInput").val("");
      if ($(".allTasks").hasClass("active")) {
        indexAllTasks();
      } else if ($(".activeTasks").hasClass("active")) {
        indexActiveTasks();
      } else if ($(".completedTasks").hasClass("active")) {
        indexCompletedTasks();
      }
    });
  }
});

$(document).on("turbolinks:load", function () {
  if ($(".static_pages.index").length > 0) {
    indexAllTasks();
  }
});

$(document).on("click", ".nav-link", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
  if ($(".allTasks").hasClass("active")) {
    indexAllTasks();
  } else if ($(".activeTasks").hasClass("active")) {
    indexActiveTasks();
  } else if ($(".completedTasks").hasClass("active")) {
    indexCompletedTasks();
  }
});

$(document).on("click", ".btn-success", function () {
  var taskId = $(this).parent().prev().attr("data-id");
  markTaskComplete(taskId, function (response) {
    if ($(".allTasks").hasClass("active")) {
      indexAllTasks();
    } else if ($(".activeTasks").hasClass("active")) {
      indexActiveTasks();
    } else if ($(".completedTasks").hasClass("active")) {
      indexCompletedTasks();
    }
  });
});

$(document).on("click", ".btn-warning", function () {
  var taskId = $(this).parent().prev().attr("data-id");
  markTaskActive(taskId, function (response) {
    if ($(".allTasks").hasClass("active")) {
      indexAllTasks();
    } else if ($(".activeTasks").hasClass("active")) {
      indexActiveTasks();
    } else if ($(".completedTasks").hasClass("active")) {
      indexCompletedTasks();
    }
  });
});

$(document).on("click", ".btn-danger", function () {
  var taskId = $(this).parent().prev().prev().attr("data-id");
  deleteTask(taskId, function (response) {
    if ($(".allTasks").hasClass("active")) {
      indexAllTasks();
    } else if ($(".activeTasks").hasClass("active")) {
      indexActiveTasks();
    } else if ($(".completedTasks").hasClass("active")) {
      indexCompletedTasks();
    }
  });
});
