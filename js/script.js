"use strict";

/**
 * restElementStyle
 * * Resets all class elements.
 * @param {currentElement} It's a current element you clicked.
 */

function resetElementStyle(currentElement) {
  let activeClassElement = document.querySelector(".active");
  let currentElelmentWithoutDot = currentElement.replace(".", "");

  if (activeClassElement !== null) {
    if (activeClassElement.classList[1] !== currentElelmentWithoutDot) {
      activeClassElement.classList.toggle("active");
      let descriptionElement = activeClassElement.nextElementSibling;
      descriptionElement.classList.toggle("deactive");

      let currentCaretElement = activeClassElement.querySelector(".caret-left");
      currentCaretElement.classList.remove("ph-caret-down");
      currentCaretElement.classList.add("ph-caret-left");
    }
  }
}

/**
 * openDescription
 * * To apply active and deactivate classes to elements
 * * Remove and add "ph-caret-left" and "ph-caret-down".
 * @param {currentElement} It's a current element you clicked.
 */

function openDescription(currentElement) {
  resetElementStyle(currentElement);
  let currentCaretElement = document.querySelector(
    `${currentElement} a .caret-left`
  );

  let selectedElement = document.querySelector(currentElement);
  selectedElement.classList.toggle("active");

  let descriptionElement = selectedElement.nextElementSibling;
  descriptionElement.classList.toggle("deactive");

  if (selectedElement.classList.contains("active")) {
    currentCaretElement.classList.remove("ph-caret-left");
    currentCaretElement.classList.add("ph-caret-down");
  } else if (!selectedElement.classList.contains("active")) {
    currentCaretElement.classList.remove("ph-caret-down");
    currentCaretElement.classList.add("ph-caret-left");
  }
}
