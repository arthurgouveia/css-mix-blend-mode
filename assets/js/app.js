(function(){
  'use strict';

  var blendOptions = document.querySelectorAll('#blend-options li a'),
      blendTexts = document.querySelectorAll('.blend-text span'),
      imageText = document.querySelector('#image-text'),
      imageContainer = document.querySelector('#image-container'),
      imageChangeButton = document.querySelector('#image-change-button'),
      fontColorLevels = document.querySelectorAll('.font-color-levels'),
      fontColorSample = document.querySelector('#font-color-sample'),
      fontColorLevelRed = document.querySelector('#font-color-level-red'),
      fontColorLevelGreen = document.querySelector('#font-color-level-green'),
      fontColorLevelBlue = document.querySelector('#font-color-level-blue');

  for (var i = blendOptions.length - 1; i >= 0; i--) {
    blendOptions[i].addEventListener('click', applyBlendMode);
  }

  for (var i = fontColorLevels.length - 1; i >= 0; i--) {
    fontColorLevels[i].addEventListener('change', changeTextColor);
  }

  imageChangeButton.addEventListener('click', function() {
    imageContainer.style.background = "url('https://placeimg.com/500/500/any?v=" + Date.now() + "')";
    imageContainer.style.backgroundSize = 'cover';
  });

  applyBlendMode('difference');

  function applyBlendMode(mixBlendMode) {
    if (typeof mixBlendMode !== 'string') {
      var mixBlendMode = mixBlendMode.currentTarget.innerHTML;
    }

    for (var i = blendTexts.length - 1; i >= 0; i--) {
      blendTexts[i].style.mixBlendMode = mixBlendMode;
    }

    imageText.style.mixBlendMode = mixBlendMode;
  }

  function changeTextColor() {
    var color = 'rgb(' + fontColorLevelRed.value +
                ', ' + fontColorLevelGreen.value +
                ', ' + fontColorLevelBlue.value + ')';

    for (var i = blendTexts.length - 1; i >= 0; i--) {
      blendTexts[i].style.color = color;
    }

    imageText.style.color = color;
    fontColorSample.style.background = color;
  }
}());
