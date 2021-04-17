/* Credit: https://piccalil.li/tutorial/create-a-user-controlled-dark-or-light-mode */

// Remove the no JS class so that the button will show
document.documentElement.classList.remove("no-js");

const STORAGE_KEY = "user-color-scheme";
const COLOR_MODE_KEY = "--color-mode";

const modeToggleButton = document.querySelector(".js-mode-toggle");

/**
 * Pass in a custom prop key and this function will return its
 * computed value.
 * A reduced version of this: https://andy-bell.design/wrote/get-css-custom-property-value-with-javascript/
 */
const getCSSCustomProp = (propKey) => {
  let response = getComputedStyle(document.documentElement).getPropertyValue(
    propKey
  );

  // Tidy up the string if there’s something to work with
  if (response.length) {
    response = response.replace(/'|"/g, "").trim();
  }

  // Return the string response by default
  return response;
};

/**
 * Takes either a passed settings ('light'|'dark') or grabs that from localStorage.
 * If it can’t find the setting in either, it tries to load the CSS color mode,
 * controlled by the media query
 */
const applySetting = (passedSetting) => {
  let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);

  if (currentSetting) {
    document.documentElement.setAttribute(
      "data-user-color-scheme",
      currentSetting
    );
    setButtonLabelAndStatus(currentSetting);
  } else {
    console.log(getCSSCustomProp(COLOR_MODE_KEY));
    setButtonLabelAndStatus(getCSSCustomProp(COLOR_MODE_KEY));
  }
};

/**
 * Get’s the current setting > reverses it > stores it
 */
const toggleSetting = () => {
  let currentSetting = localStorage.getItem(STORAGE_KEY);

  switch (currentSetting) {
    case null:
      currentSetting =
        getCSSCustomProp(COLOR_MODE_KEY) === "dark" ? "light" : "dark";
      break;
    case "light":
      currentSetting = "dark";
      break;
    case "dark":
      currentSetting = "light";
      break;
  }

  localStorage.setItem(STORAGE_KEY, currentSetting);

  return currentSetting;
};

/**
 * A shared method for setting the button text label and visually hidden status element
 */
const setButtonLabelAndStatus = (currentSetting) => {
  modeToggleButton.setAttribute(
    "aria-label",
    `Enable ${currentSetting === "dark" ? "light" : "dark"} mode`
  );
};

/**
 * Clicking the button runs the apply setting method which grabs its parameter
 * from the toggle setting method.
 */
modeToggleButton.addEventListener("click", (evt) => {
  evt.preventDefault();

  applySetting(toggleSetting());
});

applySetting();
