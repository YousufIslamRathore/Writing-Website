function servicesHoverIconColor(div, key) {
  if (key == 0) {
    div.firstElementChild.style.transitionDuration = "200ms";
    div.firstElementChild.style.color = "#ffc500";
  } else if (key == 1) {
    div.firstElementChild.style.transitionDuration = "200ms";
    div.firstElementChild.style.color = "#777777";
  }
}

// const faqPreviousCloser = (currentFaq) => {
//   let openedFaq = document.getElementsByClassName("liDisplayParaOn");
//   // if (openedFaq.length == 0) {
//   //   // console.log("koi or bhi open hai")
//   //   currentFaq.nextElementSibling.className = "liParaDisplayOn";
//   //   openedFaq[0].nextElementSibling.className = "liParaDisplayOff"
//   // } else {
//   //   // console.log("yeh lo yeh open krlo")
//   //   faqToggler(currentFaq);
//   // }
//   // // console.log(openedFaq)
//   // // openedFaq[0].className = "liParaDisplayOff";
// };

const faqToggler = (anchorTag) => {
  if (anchorTag.lastElementChild.className == "fa-solid fa-chevron-down") {
    anchorTag.lastElementChild.className = "fa-solid fa-close";
    anchorTag.nextElementSibling.className = "liParaDisplayOn";
  } else {
    anchorTag.lastElementChild.className = "fa-solid fa-chevron-down";
    anchorTag.nextElementSibling.className = "liParaDisplayOff";
  }
};
