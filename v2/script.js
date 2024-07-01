var add_task_btn = document.querySelector(".add_task_btn");
var wrapper = document.querySelector(".wrapper");
var close_btns = document.querySelectorAll(".close_btn");

add_task_btn.addEventListener("click", function () {
    wrapper.classList.add("active");
});

close_btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        wrapper.classList.remove("active");
    });
});