# Webpack configuration

http://localhost:3001/

## :fire: Особенности
* используются препроцессоры [SASS](https://sass-lang.com/)
* используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
* используется [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей
* используется проверка кода на ошибки перед коммитом

## :hammer_and_wrench: Установка
* установите [NodeJS](https://nodejs.org/en/)
* скачайте сборку с помощью [Git](https://git-scm.com/downloads): ```git clone https://github.com/AndreyShyshkin/Webpack.git```
* перейдите в скачанную папку со сборкой: ```cd Webpack```
* скачайте необходимые зависимости: ```npm i```
* чтобы начать работу, введите команду: ```npm run dev``` (режим разработки)
* чтобы собрать проект, введите команду ```npm run build``` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером.
Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.

## :open_file_folder: Файловая структура

```
Webpack
├── server
├── src
│   ├── assets
│   |   ├── favicons
│   |   ├── fonts
│   ├── layout
│   └── screens
├── .babelrc
├── .gitignore
├── package.json
├── package-lock.json
└── webpack.config.js
```

* Корень папки:
    * ```.babelrc``` — настройки Babel
    * ```.gitignore``` – запрет на отслеживание файлов Git'ом
    * ```package.json``` — список зависимостей
    * ```package-lock.json``` — список зависимостей
    * ```webpack.config.js``` — настройки Webpack
* Папка ```src``` - используется во время разработки:
    * макет: ```src/layout```
    * экранны : ```src/screens```
* Папка ```assets``` - ассеты 
    * иконка: ```src/favicons```
    * шрифты  : ```src/fonts```

## :keyboard: Команды

* ```npm run start``` - собрать проект с оптимизацией c запуска сервера
* ```npm run dev``` - запуск сервера для разработки проекта
* ```npm run build``` - собрать проект с оптимизацией без запуска сервера
* ```npm run build:dev``` - собрать проект для разработки
* ```npm run build:watcher``` - собрать проект для просмотра


### Шрифты
* шрифты находятся в папке ```src/assets/fonts```
    * используйте  ```.ttf```

```

### Сторонние библиотеки
* все сторонние библиотеки устанавливаются в папку ```node_modules```
    * для их загрузки воспользуйтеcь командой ```npm i package_name```

