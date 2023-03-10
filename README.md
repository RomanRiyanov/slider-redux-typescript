# Technology demonstrator

Проект на основе [макета](https://github.com/reduxjs/cra-template-redux-typescript), целью которого является оттачивание и демонстрация навыков работы со следующими технологиями

### React Powered Infinite Slider

* Контент главной страницы сверстан с помощью отзывчивых грид элементов без использования медиа-запросов
* При клике на фото открывается роут с идентификатором карточки, который содержит слайдер с фотографиями
* Использованы CSS-модули и препроцессор SCSS

### Redux Toolkit

* Создан redux store и два редюсера, sliderReducer и likeReducer
* В store три сущности, к которым обращаются при помощи useDispatch и useSelector:
> - value - общий массив с данными карточек
> - currentCard - текущая карточка, которая отображается в слайдере
> - likes - массив с лайками

### TypeScript

* Применяется строгая статическая типизация, аннотации типов, интерфейсы, дженерики

### ESLint

* Используется линтер ESLint с настройками 'airbnb' и 'airbnb-typescript'

