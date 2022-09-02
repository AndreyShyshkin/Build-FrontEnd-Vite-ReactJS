# Webpack configuration

http://localhost:3001/

## :fire: Особенности
* используются препроцессоры [SCSS](https://sass-lang.com/)
* используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
* используется [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей
* используется [Normalize](https://necolas.github.io/normalize.css/) для правильного отображения во всех браузерах
* используется проверка кода на ошибки перед коммитом

## :hammer_and_wrench: Установка
* установите [NodeJS](https://nodejs.org/en/)
* скачайте сборку с помощью [Git](https://git-scm.com/downloads): ```git clone https://github.com/AndreyShyshkin/webpack-react.git```
* перейдите в скачанную папку со сборкой: ```cd webpack-react```
* скачайте необходимые зависимости: ```yarn```
* чтобы начать работу, введите команду: ```yarn run dev``` (режим разработки)
* чтобы собрать проект, введите команду ```yarn run build``` (режим сборки)

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
    * ```.eslintrc.json``` — настройки ESLint
    * ```.gitignore``` – запрет на отслеживание файлов Git'ом
    * ```.stylelintrc``` — настройки Stylelint
    * ```.stylelintignore``` – запрет на отслеживание файлов Stylelint'ом
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

* ```yarn run start``` - собрать проект с оптимизацией c запуска сервера
* ```yarn run dev``` - запуск сервера для разработки проекта
* ```yarn run build``` - собрать проект с оптимизацией без запуска сервера
* ```yarn run build:dev``` - собрать проект для разработки
* ```yarn run build:watcher``` - собрать проект для просмотра


### Шрифты
* шрифты находятся в папке ```src/assets/fonts```
    * используйте  ```.ttf```

```

### Сторонние библиотеки
* все сторонние библиотеки устанавливаются в папку ```node_modules```
    * для их загрузки воспользуйтеcь командой ```npm i package_name```

