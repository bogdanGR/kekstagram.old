'use strict';
window.filters = (function () {
  var controlFilters = document.querySelector('.upload-filter-controls');
  var imgFilterPreview = document.querySelector('.filter-image-preview');
  var ENTER_KEY_CODE = 13;

  var isActivateEvent = function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  };

  var applyFilter = function (currentFilterName) {
    var currentFilter = 'filter-' + currentFilterName.value;
    imgFilterPreview.setAttribute('class', currentFilter);
  };

  var activeFilter = function (evt) {
    var currentElement = evt.target.classList.contains('upload-filter') ? evt.target : evt.target.parentNode.previousElementSibling;
    if (currentElement) {
      applyFilter(currentElement);
    }
  };

  var onFilterClick = function (evt) {
    activeFilter(evt);
  };

  var onFilterKeydown = function (evt) {
    if (isActivateEvent(evt)) {
      activeFilter(evt);
    }
  };

  var initializeFilters = function () {
    controlFilters.addEventListener('click', onFilterClick);
    controlFilters.addEventListener('keypress', onFilterKeydown);
  };
  return initializeFilters;

})();
