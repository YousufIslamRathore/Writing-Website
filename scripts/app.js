function servicesHoverIconColor(div, key) {
  if (key == 0) {
    div.firstElementChild.style.transitionDuration = "200ms";
    div.firstElementChild.style.color = "#ffc500";
  } else if (key == 1) {
    div.firstElementChild.style.transitionDuration = "200ms";
    div.firstElementChild.style.color = "#777777";
  }
}
