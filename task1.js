function formatDate(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    return `${day}.${month}.${year}`;
}
function addDays(date, days) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}
function showTasks() {
    let today = new Date();
    let tasks = [
        {
            title: "Підготувати конспект",
            description: "Написати конспект до лабораторної роботи",
            deadline: "2026-10-20",
            duration: 3,
            done: true
        },
        {
            title: "Зробити презентацію",
            description: "Підготувати слайди до захисту",
            deadline: "2026-10-29",
            duration: 4,
            done: false
        },
        {
            title: "Написати звіт",
            description: "Оформити звіт у Word",
            deadline: "2026-11-04",
            duration: 2,
            done: false
        },
        {
            title: "Вивчити теорію",
            description: "Повторити матеріал до практичної роботи",
            deadline: "2026-11-10",
            duration: 5,
            done: false
        }
    ];
    let doneTasks = [];
    let progressTasks = [];
    let futureTasks = [];
    tasks.forEach(function(task) {
        let deadlineDate = new Date(task.deadline);
        let startDate = new Date(deadlineDate);
        startDate.setDate(deadlineDate.getDate() - task.duration);

        if (task.done) {
            doneTasks.push(task);
        } else if (today >= startDate) {
            progressTasks.push(task);
        } else {
            let diffTime = startDate - today;
            let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            task.startIn = diffDays;
            futureTasks.push(task);
        }
    });
    let html = "";
    html += `<div class="b-group done">
                <h3>Виконані задачі</h3>`;
    if (doneTasks.length > 0) {
        doneTasks.forEach(function(task) {
            html += `<div class="b-task-item">
                        <b>Назва:</b> ${task.title}<br>
                        <b>Опис:</b> ${task.description}<br>
                        <b>Термін виконання:</b> ${formatDate(new Date(task.deadline))}<br>
                        <b>Тривалість:</b> ${task.duration} дн.
                     </div>`;
        });
    } else {
        html += `<p>Немає виконаних задач.</p>`;
    }
    html += `</div>`;
    html += `<div class="b-group progress">
                <h3>Задачі в процесі</h3>`;
    if (progressTasks.length > 0) {
        progressTasks.forEach(function(task) {
            html += `<div class="b-task-item">
                        <b>Назва:</b> ${task.title}<br>
                        <b>Опис:</b> ${task.description}<br>
                        <b>Термін виконання:</b> ${formatDate(new Date(task.deadline))}<br>
                        <b>Тривалість:</b> ${task.duration} дн.
                     </div>`;
        });
    } else {
        html += `<p>Немає задач у процесі.</p>`;
    }
    html += `</div>`;

    html += `<div class="b-group future">
                <h3>Повинні початися пізніше</h3>`;
    if (futureTasks.length > 0) {
        futureTasks.forEach(function(task) {
            html += `<div class="b-task-item">
                        <b>Назва:</b> ${task.title}<br>
                        <b>Опис:</b> ${task.description}<br>
                        <b>Термін виконання:</b> ${formatDate(new Date(task.deadline))}<br>
                        <b>Тривалість:</b> ${task.duration} дн.<br>
                        <b>Почнеться через:</b> ${task.startIn} дн.
                     </div>`;
        });
    } else {
        html += `<p>Немає майбутніх задач.</p>`;
    }
    html += `</div>`;
    document.getElementById("result").innerHTML = html;
}
