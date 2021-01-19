/* Cassie Williams 09/21/2020
  Adapted from https://javascript30.com/
  New keywords: clearTimeout, setTimeout
  New methods/properties: have never used the arrow function, so was tricky to change the arrow function to a traditional one */


// did not mess with this portion of code
// it was already worked up when he started the video
  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


  const sliderImages = document.querySelectorAll('.slide-in');
  
//changed function name to differentiate from text slider
  function checkImageSlide() {
    //changed from arrow function to traditional function
    sliderImages.forEach(function (sliderImage) { 
        
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 4;
      //changed dividers to 4 so images and text would slide in sooner

      const bottom = sliderImage.offsetTop + sliderImage.height;
      const isQuarterShown = slideInAt > sliderImage.offsetTop;
      //changed to isQuarterShown to name appropriately
      const isNotScrolledPast = window.scrollY < bottom;
      if (isQuarterShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } // removed else statement so iamges will stay in place once scrolled
    });
  }

  window.addEventListener('scroll', debounce(checkImageSlide));

  
  
  //added slider effect for HTML elements using function above
  //changed all variable names to differentiate from checkImageSlide function
  //added .text-active and.text-slide-in to css/html
  const sliderParagraphs = document.querySelectorAll('.text-slide-in');

  function checkTextSlide() {
    sliderParagraphs.forEach(function (sliderParagraph) { 
        
      // changed to offsetHeight to access height of element
      const slideTextInAt = (window.scrollY + window.innerHeight) - sliderParagraph.offsetHeight / 4;
    
      const textBottom = sliderParagraph.offsetTop + sliderParagraph.offsetHeight;
      const textIsQuarterShown = slideTextInAt > sliderParagraph.offsetTop;
      const textIsNotScrolledPast = window.scrollY < textBottom;
      if (textIsQuarterShown && textIsNotScrolledPast) {
        sliderParagraph.classList.add('text-active');
      } 
    });
  }

  window.addEventListener('scroll', debounce(checkTextSlide));

