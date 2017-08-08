'use strict';
(function () {
  window.initializeScale = function (element, step, defaultValue) {
    var imgFilterPreview = document.querySelector('.filter-image-preview');
    var resizeControlValue = document.querySelector('.upload-resize-controls-value');

    var zoomImg = function (zoomValue) {
      var transformCoeff = zoomValue / 100;
      var inputValue = zoomValue + '%';
      imgFilterPreview.style.transform = 'scale(' + transformCoeff + ')';
      resizeControlValue.setAttribute('value', inputValue);
    };

    var decreaseZoom = function () {
      var inputValue = defaultValue;
      if (inputValue <= 100 && inputValue > step) {
        inputValue -= step;
        zoomImg(inputValue);
      }
    };

    var increaseZoom = function () {
      var inputValue = defaultValue;
      if (inputValue < 100 && inputValue >= step) {
        inputValue += step;
        zoomImg(inputValue);
      }
    };

    var onIncreaseZoomBtnClick = function () {
      increaseZoom();
    };

    var onDecreaseZoomBtnClick = function () {
      decreaseZoom();
    };

    element.addEventListener('click', onDecreaseZoomBtnClick);
    element.addEventListener('click', onIncreaseZoomBtnClick);
  };
})();
