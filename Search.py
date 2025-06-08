import webbrowser
import time

author_name = "Климкин Егор"
telegram_link_text = "https://t.me/ne_sravnim"
github_repo_link = "https://github.com/KEV0143/Telegram_Software_SMM"

print(f"\nАвтор: {author_name}")
print(f"Связь для уточнения деталей по проекту: Telegram ({telegram_link_text})")
print(f"Репозиторий проекта: {github_repo_link}")

user_choice = input(f"\nВведите '1', чтобы открыть ссылку (написать автору в Telegram): ")

if user_choice == '1':
    print(f"\nОткрываю Telegram: {telegram_link_text}")
    time.sleep(1)
    try:
        webbrowser.open_new_tab(telegram_link_text)
        print("Ссылка должна была открыться в вашем браузере.")
    except Exception as e:
        print(f"Не удалось автоматически открыть ссылку. Ошибка: {e}")
        print(f"Пожалуйста, скопируйте и вставьте ссылку вручную: {telegram_link_text}")
else:
    print("\nДействие отменено или введен неверный символ.")

print(f"Репозиторий проекта: {github_repo_link}")

input("\nНажмите Enter для выхода...")