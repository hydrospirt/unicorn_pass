#!/bin/bash

# Проверка, что скрипт запущен из корневой директории проекта
if [ ! -d "unipass" ]; then
    echo "Директория unipass не найдена. Пожалуйста, запустите скрипт из корневой директории проекта."
    exit 1
fi
# 

# Создание .env файла
ENV_FILE=".env"

# Проверка, существует ли уже .env файл
if [ -f "$ENV_FILE" ]; then
    echo "Файл $ENV_FILE уже существует. Хотите перезаписать его? (y/n)"
    read overwrite
    if [ "$overwrite" != "y" ]; then
        echo "Отмена создания .env файла."
        exit 1
    fi
fi

# Запись значений в .env файл
cat <<EOF > $ENV_FILE
DEBUG=True # False for production server
ALLOWED_HOSTS=127.0.0.1,localhost
SECRET_KEY=django-insecure-hib515um%xfvyne7gy-#l+=0uajnrx@n6ih+4rrq1)zvu1o!!v # example
EOF

echo "Файл $ENV_FILE успешно создан."

# Переход в директорию src
cd src

# Создание миграций
echo "Создание миграций..."
python manage.py makemigrations

# Применение миграций
echo "Применение миграций..."
python manage.py migrate

# Создание суперпользователя
echo "Создание суперпользователя..."
python manage.py createsuperuser

echo "Все операции завершены."