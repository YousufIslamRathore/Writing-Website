function servicesHoverIconColor(div, key) {
  if (key == 0) {
    div.firstElementChild.style.transitionDuration = "200ms";
    div.firstElementChild.style.color = "#ffc500";
  } else if (key == 1) {
    div.firstElementChild.style.transitionDuration = "200ms";
    div.firstElementChild.style.color = "#777777";
  }
}

const faqToggler = (anchorTag) => { 
  if(anchorTag.lastElementChild.className == "fa-solid fa-chevron-down") {
    anchorTag.lastElementChild.className = "fa-solid fa-close";
    anchorTag.nextElementSibling.className = "liParaDisplayOn";
  } else {
    anchorTag.lastElementChild.className = "fa-solid fa-chevron-down";
    anchorTag.nextElementSibling.className = "liParaDisplayOff";
  }


}