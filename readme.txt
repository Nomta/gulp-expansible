09.03.18

Есть лишние зависимости в package.json
  (возможно):
    "gulp-cache",
    "gulp-svgmin",
    "imagemin-svgo",
    "postcss-cssnext"
Добавлен task "concat-js"
Изменен config (vendors & output)

Готов к работе

Запуск в production версии: gulp prod
Узнать структуру конфига: gulp config
Переменная окружения: 
    глобальная переменная (NODE_ENV)