const author_name = "Климкин Егор";
const telegram_link_text = "https://t.me/ne_sravnim";
const github_repo_link = "https://github.com/KEV0143/Telegram_Software_SMM";

const infoContainer = document.getElementById('info-container');
const openLinkButton = document.getElementById('open-link-button');
const statusMessage = document.getElementById('status-message');

infoContainer.innerHTML = `
    <p>Автор: ${author_name}</p>
    <p>Связь для уточнения деталей по проекту: <a href="${telegram_link_text}" target="_blank">Telegram</a></p>
    <p>Репозиторий проекта: <a href="${github_repo_link}" target="_blank">${github_repo_link}</a></p>
`;

openLinkButton.addEventListener('click', () => {
    statusMessage.textContent = `Открываю Telegram: ${telegram_link_text}`;
    
    setTimeout(() => {
        try {
            const newWindow = window.open(telegram_link_text, '_blank');
            if (newWindow) {
                statusMessage.textContent = "Ссылка должна была открыться в вашем браузере.";
            } else {
                throw new Error("Браузер заблокировал открытие новой вкладки.");
            }
        } catch (e) {
            statusMessage.textContent = `Не удалось автоматически открыть ссылку. Пожалуйста, скопируйте и вставьте ссылку вручную: ${telegram_link_text}`;
            console.error("Ошибка при открытии ссылки:", e);
        }
    }, 1000);
});