$(document).ready(function () {


//$('selector').('method / function (){
// }');

  $("#addBtn").click(function () {

    let task = $("#taskInput").val();
    task = task.trim();

    if (!task) {
      return alert("Enter task");;
    }

    let html = `
      <li class="flex justify-between border-b py-2">
        <div>
          <input type="checkbox" class="check">
          <span class="text">${task}</span>
        </div>
        <div>
          <button class="edit text-blue-500">Edit</button>
          <button class="delete text-red-500 ml-2">Delete</button>
        </div>
      </li>
    `;

    $("#taskList").append(html);
    $("#taskInput").val("");
  });

  // checkbox complete
  $("#taskList").on("change", ".check", function () {

    let text = $(this).next(".text");

    if ($(this).is(":checked")) {
      text.addClass("line-through text-gray-400");
    } else {
      text.removeClass("line-through text-gray-400");
    }
  });

  // edit task
  $("#taskList").on("click", ".edit", function () {

    let btn = $(this);
    let span = btn.closest("li").find(".text");

    if (btn.text() == "Save") {
      let value = btn.closest("li").find("input[type=text]").val();
      span.text(value);
      span.show();
      btn.closest("li").find("input[type=text]").remove();
      btn.text("Edit");
      return;
    }

    let oldText = span.text();
    span.hide();

    span.after(`<input type="text" value="${oldText}" class="border px-1">`);
    btn.text("Save");
  });

  // delete task
  $("#taskList").on("click", ".delete", function () {
    $(this).closest("li").remove();
  });

});