'use strict';
window.filters = (function () {
  var controlFilters = document.querySelector('.upload-filter-controls');
  var imgFilterPreview = document.querySelector('.filter-image-preview');
  var ENTER_KEY_CODE = 13;

  // проверка была ли нажата кнопка энтер
  var isActivateEvent = function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  };

  // применяем выбраный фильтр
  var applyFilter = function (currentFilterName) {
    var currentFilter = 'filter-' + currentFilterName.value;
    imgFilterPreview.setAttribute('class', currentFilter);
  };

  // через делегирование выбираем какой фильтр активен
  var activeFilter = function (evt) {
    var currentElement = evt.target.classList.contains('upload-filter') ? evt.target : evt.target.parentNode.previousElementSibling;
    if (currentElement) {
      applyFilter(currentElement);
    }
  };

  // вызываем обработчик события по нажатию мышки
  var onFilterClick = function (evt) {
    activeFilter(evt);
  };

  // вызываем обработчик события по клавитуре
  var onFilterKeydown = function (evt) {
    if (isActivateEvent(evt)) {
      activeFilter(evt);
    }
  };

  // инициализируем фильтры
  var initializeFilters = function () {
    controlFilters.addEventListener('click', onFilterClick);
    controlFilters.addEventListener('keypress', onFilterKeydown);
  };
  return initializeFilters;

})();
