# Сбор.очка

## Структура проекта
-  src - исхдные файлы проекта
   -  assets - [скрипты, картинки, стили, шрифты]
   -  styles - стили
      -  *.scss собираемые файлы стилей, будут в билде 1 к 1
      -  _*.scss - модули стилей
   - script - скрипты
      -  script.js - собираемые файлы скриптов, будут в билде 1 к 1
      -  _*.js - модули скриптов
   -  static - копируется без обработки в build
      -  img - картинки
      -  font - шрифты
   - *.html самостоятельные страницы
   - _*.html - компоненты страниц
-  node_modules - модули как для страниц так и для сборки
-  build - готовая сборка, повторяет структуру src но содержит уже готовые файлы
- package.json - информация о проекте
  - dependences - список явно установленных плагинов
  - scripts - команды сборки "npm run ..."
- packaje-lock.json - ВСЕ зависимости проекта (не необходим для установки модулей)

## Оживление проекта
1. Для работы сборки требуется node.js, все команды пишутся из корня проекта
2. Пинаем "npm run setup" - устанавливаются все модули
   1. Если node.js будет ругаться на отстутствие инструментов сборки
      1. Ставим питон 2.Х
      2. Если у вас винда - Пинаем "npm i windows-build-tools"
         1. Установка будет вечной, брыкаем ее минут через 5
3. Собираем. Команды пинаем через "gulp [keys]". Также готовые команды записаны в файле /package.json в поле scripts и могут быть запущены через "npm run taskname"
   1. Ключи:
      1. --ram - собирает в оперативку
      2. --separate - заменяет в html ["style.css","script.js"] на ["PAGENAME.css","PAGENAME.js"], позволяя писать отдельные файлы скриптов и стилей для каждой страницы с соответствующими именами исходных файлов
      3. --min - минифицирует стили и скрипты
      4. --watch - подымает локальный сервер и следит за изменениями файлов, пересобирая/копируя при изменении и автоматически обновляя страницу (Процесс в терминале будет бесконечным)
2. Прочие команды "gulp (taskname)" :
   1. imagemin - оптимизация картинок на диск, исходные остаются в src, ужатые ложатся в build в соответствующую папку
   2. ttfToWoff - рекомпил шрифтов на диск, новые заменяют старые, формат меняется на .woff2

## Ремонт
Если что-то брыкаeтся, удаляем папку node_modules и файл package-lock.json, повторяем шаги по оживлению проекта с начала, если не помогло зовем Никитку