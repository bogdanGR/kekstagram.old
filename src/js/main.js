'use strict';
(function () {
  var upload = document.querySelector('.upload');

  // форма кадрирования
  var uploadOverlay = upload.querySelector('.upload-overlay');

  // форма загрузки изображения
  var uploadSelect = upload.querySelector('#upload-select-image');
  var uploadCancel = upload.querySelector('.upload-form-cancel');
  var uploadFile = upload.querySelector('#upload-file');
  var imgFilterPreview = upload.querySelector('.filter-image-preview');
  var decreaseBtn = upload.querySelector('.upload-resize-controls-button-dec');
  var increaseBtn = upload.querySelector('.upload-resize-controls-button-inc');
  var resizeControlValue = upload.querySelector('.upload-resize-controls-value');
  var controlFilters = upload.querySelector('.upload-filter-controls');
  var ENTER_KEY_CODE = 13;

  var isActivateEvent = function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  };

  var showImgLoader = function () {
    uploadFile.value = '';

    // скрываем форму кадрирования
    uploadOverlay.classList.add('invisible');

    // показываем форму загрузки изображения
    uploadSelect.classList.remove('invisible');
  };

  var onShowImgLoaderClick = function () {
    showImgLoader();
  };

  var showCroppForm = function () {
    // показываем форму кадрирования
    uploadOverlay.classList.remove('invisible');

    // скрываем форму загрузки изображения
    uploadSelect.classList.add('invisible');
  };

  var onShowCroppFormClick = function () {
    showCroppForm();
  };

  var getCurrentValue = function () {
    return parseInt(resizeControlValue.value, 10);
  };

  var zoomImg = function (zoomValue) {
    var transformCoeff = zoomValue / 100;
    var inputValue = zoomValue + '%';
    imgFilterPreview.style.transform = 'scale(' + transformCoeff + ')';
    resizeControlValue.setAttribute('value', inputValue);
  };

  var decreaseZoom = function () {
    var inputValue = getCurrentValue();
    if (inputValue <= 100 && inputValue > 25) {
      inputValue -= 25;
      zoomImg(inputValue);
    }
  };

  var increaseZoom = function () {
    var inputValue = getCurrentValue();
    if (inputValue < 100 && inputValue >= 25) {
      inputValue += 25;
      zoomImg(inputValue);
    }
  };

  var onIncreaseZoomBtnClick = function () {
    increaseZoom();
  };

  var onDecreaseZoomBtnClick = function () {
    decreaseZoom();
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

  decreaseBtn.addEventListener('click', onDecreaseZoomBtnClick);
  increaseBtn.addEventListener('click', onIncreaseZoomBtnClick);
  uploadCancel.addEventListener('click', onShowImgLoaderClick);
  controlFilters.addEventListener('click', onFilterClick);
  controlFilters.addEventListener('keypress', onFilterKeydown);
  uploadFile.addEventListener('change', onShowCroppFormClick);
  showImgLoader();

})();
