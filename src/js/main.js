'use strict';
(function () {

  var upload = document.querySelector('.upload');

// форма кадрирования
  var uploadOverlay = upload.querySelector('.upload-overlay');

// форма загрузки изображения
  var uploadSelect = upload.querySelector('#upload-select-image');
  var uploadCancel = upload.querySelector('.upload-form-cancel');
  var uploadFile = upload.querySelector('#upload-file');
  var uploadFilter = upload.querySelectorAll('.upload-filter');
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
    imgFilterPreview.style.transform = 'scale(' + transformCoeff + ')';
    var inputValue = zoomValue + '%';
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

  var addFilterToImg = function (activeClass) {
    var currentFilter = 'filter-' + activeClass.value;
    imgFilterPreview.setAttribute('class', currentFilter);
  };

  var activateFilter = function (evt) {
    var currentElement = evt.target.classList.contains('upload-filter');
    if (currentElement !== null) {
      addFilterToImg(evt.target);
      console.log(evt.target);
    }
  };

  var onActivateFilterClick = function (evt) {
    activateFilter(evt);
  };

  var onActivateFilterKeydown = function (evt) {
    if (isActivateEvent(evt)) {
      activateFilter(evt);
    }
  };

  decreaseBtn.addEventListener('click', onDecreaseZoomBtnClick);
  increaseBtn.addEventListener('click', onIncreaseZoomBtnClick);
  uploadCancel.addEventListener('click', onShowImgLoaderClick);
  controlFilters.addEventListener('click', onActivateFilterClick);
  controlFilters.addEventListener('keydown', onActivateFilterKeydown);
  uploadFile.addEventListener('change', onShowCroppFormClick);
  onShowImgLoaderClick();
})();
