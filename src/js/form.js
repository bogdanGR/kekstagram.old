'use strict';
(function () {
  var upload = document.querySelector('.upload');

  // форма кадрирования
  var uploadOverlay = upload.querySelector('.upload-overlay');

  // форма загрузки изображения
  var uploadSelect = upload.querySelector('#upload-select-image');
  var uploadCancel = upload.querySelector('.upload-form-cancel');
  var uploadFile = upload.querySelector('#upload-file');
  var decreaseBtn = document.querySelector('.upload-resize-controls-button-dec');
  var increaseBtn = document.querySelector('.upload-resize-controls-button-inc');
  var resizeControlValue = document.querySelector('.upload-resize-controls-value');

  var getCurrentValue = function () {
    return parseInt(resizeControlValue.value, 10);
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

  window.initializeScale(decreaseBtn, 25, getCurrentValue());
  window.initializeScale(increaseBtn, 25, getCurrentValue());
  window.initializeFilters();

  uploadCancel.addEventListener('click', onShowImgLoaderClick);
  uploadFile.addEventListener('change', onShowCroppFormClick);
  showImgLoader();

})();
