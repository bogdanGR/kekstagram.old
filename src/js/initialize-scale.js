'use strict';

window.controlScales = (function () {
  var imgFilterPreview = document.querySelector('.filter-image-preview');

  var initializeScale = function (element, step, defaultValue) {

    // добавляем zoom изображению
    var zoomImg = function (zoomValue) {
      var transformCoeff = zoomValue / 100;
      var inputValue = zoomValue + '%';
      imgFilterPreview.style.transform = 'scale(' + transformCoeff + ')';
      defaultValue.setAttribute('value', inputValue);
    };

    // получает текущие значения
    var getCurrentValue = function () {
      return parseInt(defaultValue.value, 10);
    };

    var decreaseBtn = element.querySelector('.upload-resize-controls-button-dec');
    var increaseBtn = element.querySelector('.upload-resize-controls-button-inc');

    // уменьшаем zoom
    var decreaseZoom = function () {
      var inputValue = getCurrentValue();
      if (inputValue <= 100 && inputValue > step) {
        inputValue -= step;
        zoomImg(inputValue);
      }
    };

    // увеличиваем zoom
    var increaseZoom = function () {
      var inputValue = getCurrentValue();
      if (inputValue < 100 && inputValue >= step) {
        inputValue += step;
        zoomImg(inputValue);
      }
    };

    // вызываем обработчик события по нажатию мышки
    var onIncreaseZoomBtnClick = function () {
      increaseZoom();
    };

    // вызываем обработчик события по нажатию мышки
    var onDecreaseZoomBtnClick = function () {
      decreaseZoom();
    };

    decreaseBtn.addEventListener('click', onDecreaseZoomBtnClick);
    increaseBtn.addEventListener('click', onIncreaseZoomBtnClick);
  };

  return initializeScale;

})();
