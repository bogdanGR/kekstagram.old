'use strict';
(function () {
  var upload = document.querySelector('.upload');

  // форма кадрирования
  var uploadOverlay = upload.querySelector('.upload-overlay');

  // форма загрузки изображения
  var uploadSelect = upload.querySelector('#upload-select-image');
  var uploadCancel = upload.querySelector('.upload-form-cancel');
  var uploadFile = upload.querySelector('#upload-file');
  var resizeControlValue = upload.querySelector('.upload-resize-controls-value');
  var recizeControlFieldset = upload.querySelector('.upload-resize-controls');
  var STEP_OF_ZOOM = 25;


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

  window.controlScales(recizeControlFieldset, STEP_OF_ZOOM, resizeControlValue.value);
  window.filters();


  uploadCancel.addEventListener('click', onShowImgLoaderClick);
  uploadFile.addEventListener('change', onShowCroppFormClick);
  showImgLoader();

})();
