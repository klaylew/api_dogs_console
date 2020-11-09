'use strict';

function getDogImages() {
  console.log("Running get dog images")
  fetch(makeFetch())
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  /* //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden'); */
}

function watchForm() {
  $("form").on(click => {
    console.log("watchForm ran");
    getDogImages();
  });
}

//function to create API fetch string with entered number of pics
function makeFetch(){
  let address = "https://dog.ceo/api/breeds/image/random/";
  address = address + $("#number").val();
  console.log(address);
  return address;  
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});


/** 
 * 
 * need to hold data for number of pictures with a default value of 3
 * 
 * retrieve photo addresses and print to the console
 *  
 * 
 */