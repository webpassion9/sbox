import * as flsFunctions from "./modules/functions.js";
import { initializeSelect } from './modules/select.js';
import datepicker from 'js-datepicker';
import intlTelInput from 'intl-tel-input';
// import 'intl-tel-input/build/js/utils.js';

flsFunctions.isWebp();

import { viewportSet } from './modules/viewportSet.js';
viewportSet();

// --------------------------------------------------------------------------
// set ratio
// --------------------------------------------------------------------------
function forcedOriginalScale(containerClass) {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (!isMobile) {
    var App = document.querySelector(containerClass);
    App.style.zoom = 1 / devicePixelRatio;
  }
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    forcedOriginalScale('.wrapper');
  }
);

// --------------------------------------------------------------------------
// select
// --------------------------------------------------------------------------
initializeSelect();

const inputElement = document.querySelector('.input-datepicker');
if (inputElement) {
  const picker = datepicker(inputElement, {
    formatter: (input, date, instance) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const formattedDate = `${day}/${month}/${year}`;

      input.value = formattedDate;
    }
  });
}

// --------------------------------------------------------------------------
// phone input
// --------------------------------------------------------------------------
const phoneInput = intlTelInput(document.querySelector('#input-phone'), {
  preferredCountries: ["gr", "us"],
  useFullscreenPopup: false
});
