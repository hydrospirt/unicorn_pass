function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        showNotification("Пароль скопирован в буфер обмена!");
    }, function(err) {
        showNotification("Не удалось скопировать пароль: " + err);
    });
}

function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification is-success";
    notification.innerHTML = `
        <button class="delete"></button>
        ${message}
    `;

    document.body.appendChild(notification);

    // Добавляем обработчик для закрытия оповещения
    const deleteButton = notification.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        notification.parentNode.removeChild(notification);
    });

    // Удаляем оповещение через 5 секунд
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
    (document.querySelectorAll(".notification .delete") || []).forEach(($delete) => {
        const $notification = $delete.parentNode;

        $delete.addEventListener("click", () => {
            $notification.parentNode.removeChild($notification);
        });
    });
});