'use strict';

window.controlScales = (function () {
  var imgFilterPreview = document.querySelector('.filter-image-preview');
  var resizeControlValue = document.querySelector('.upload-resize-controls-value');


  var zoomImg = function (zoomValue) {
    var transformCoeff = zoomValue / 100;
    var inputValue = zoomValue + '%';
    imgFilterPreview.style.transform = 'scale(' + transformCoeff + ')';
    resizeControlValue.setAttribute('value', inputValue);
  };

  var initializeScale = function (element, step, defaultValue) {
    var getCurrentValue = function () {
      return parseInt(defaultValue, 10);
    };
    var decreaseBtn = element.querySelector('.upload-resize-controls-button-dec');
    var increaseBtn = element.querySelector('.upload-resize-controls-button-inc');

    var decreaseZoom = function () {
      var inputValue = getCurrentValue();
      if (inputValue <= 100 && inputValue > step) {
        inputValue -= step;
        zoomImg(inputValue);
      }
    };

    var increaseZoom = function () {
      var inputValue = getCurrentValue();
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

    decreaseBtn.addEventListener('click', onDecreaseZoomBtnClick);
    increaseBtn.addEventListener('click', onIncreaseZoomBtnClick);
  };

  return initializeScale;

})();
