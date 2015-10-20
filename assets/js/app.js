var blendOptions = document.querySelectorAll('#blend-options li a'),
  blendTexts = document.querySelectorAll('.blend-text span'),
  blendTextOnImage = document.querySelector('#text-on-image span'),
  fontColor = document.querySelector('#font-color');

for (var i = blendOptions.length - 1; i >= 0; i--) {
  blendOptions[i].addEventListener('click', applyBlendMode);
}

fontColor.addEventListener('keyup', function() {
  for (var i = blendTexts.length - 1; i >= 0; i--) {
    blendTexts[i].style.color = this.value;
  }

  blendTextOnImage.style.color = this.value;
});

applyBlendMode('difference');

function applyBlendMode(mixBlendMode) {
  if (typeof mixBlendMode !== 'string') {
    var mixBlendMode = mixBlendMode.currentTarget.innerHTML;
  }

  for (var i = blendTexts.length - 1; i >= 0; i--) {
    blendTexts[i].style.mixBlendMode = mixBlendMode;
  }

  blendTextOnImage.style.mixBlendMode = mixBlendMode;
}
