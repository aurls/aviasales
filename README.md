# Тестовое задание Aviasales на позицию Frontend Developer

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/standard/semistandard)
[![Build Status](https://travis-ci.org/vladtaranov/aviasales.svg?branch=master)](https://travis-ci.org/vladtaranov/aviasales)
[![Coverage Status](https://coveralls.io/repos/github/vladtaranov/aviasales/badge.svg?branch=master)](https://coveralls.io/github/vladtaranov/aviasales?branch=master)

### Уровень — junior. Демо [по ссылке](https://vladtaranov.github.io/aviasales-demo/).

_Выполнено в январе 2020 г._

Задание находится [здесь](https://github.com/KosyanMedia/test-tasks/tree/master/aviasales_frontend).

#### Стек
* React/Redux
* SCSS
* Webpack
* PropTypes

#### npm scripts
* _npm run watch_ — запускаем webpack-dev-server
* _npm run build_ — билдим

#### Особенности выполненого задания
* _Pixel Perfect_ (макет находится [по ссылке](https://www.figma.com/file/4fQe1lEbo4DARjvNtaU0uJ/Aviasales-test-task))
* Адаптивная вёрстка, _SCSS_ как препроцессор
* Самостоятельно настроенный _webpack_ — режимы production и development, webpack-dev-server, babel, основные лоудеры и плагины
* UI построен на _React_. Основные компоненты — фильтры, сортировка, список билетов — независимы и могут быть переиспользованы, не ломая вёрстку и логику приложения
* Состояние управляется _Redux_
* Предусмотрены основные сценарии — нет соединения, медленное соединение, не выбран ни один фильтр и пр.






