var interval = null;
function show_loading_box() {
  jQuery(".eco-box").css("display", "none");
  clearInterval(interval);
}
jQuery('document').ready(function () {

  interval = setInterval(show_loading_box, 1000);
});


jQuery(document).ready(function () {
  var element = jQuery('.wp-block-search__button');
  jQuery('.wp-block-search__button').on('click', function () {
    jQuery('.wp-block-search__input').toggleClass('active');
    console.log(element);
  });
})

// Wrap the code in a document ready function to ensure the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the current page URL
  var currentPageUrl = window.location.href;

  // Select the menu item with the matching href attribute
  var menuItem = document.querySelector('nav a[href="' + currentPageUrl + '"]');

  console.log("menuItem",menuItem)
  // Add a custom class to the selected menu item
  if (menuItem) {
    menuItem.classList.add('current-menu-item');
  }
});




/***************** bottom-to-top-button  **********************/


document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".back-to-top");

  window.addEventListener("scroll", function () {
    var shouldDisplay = window.scrollY > 20;

    buttons.forEach(function (button) {
      button.style.display ="block";
    });
  });
  // Scroll to top when button is clicked
  jQuery('.back-to-top').click(function (evt) {
    evt.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, 800);
   
    return false;
  });

});


/**************************************** Pre-lodaer js ****************************************/

/************ add extra div in product section js *********************/
jQuery('.best-plan-section .ai-best-plan').each(function() {
  // Iterate through each .ai-best-plan
  var gridContainer = jQuery(this);

  // Find titles, subtitles, and prices within this .ai-best-plan
  var titles = gridContainer.find('.wp-block-stackable-heading');
  var subtitles = gridContainer.find('.wp-block-stackable-subtitle');
  var prices = gridContainer.find('.wp-block-stackable-price');

  // Iterate over each pair of title, subtitle, and price and wrap them together
  titles.each(function(index) {
    var title = jQuery(this);
    var subtitle = subtitles.eq(index); // Get corresponding subtitle for this title
    var price = prices.eq(index); // Get corresponding price for this title
    var parentDiv = jQuery('<div class="price-new"></div>');
    title.add(subtitle).add(price).wrapAll(parentDiv);
  });
});


jQuery('.best-plan-section .ai-best-plan').each(function() {
  // Iterate through each .ai-best-plan
  var gridContainer = jQuery(this);

  // Find icon lists and button groups within this .ai-best-plan
  var iconLists = gridContainer.find('.wp-block-stackable-icon-list');
  var buttonGroups = gridContainer.find('.wp-block-stackable-button-group');

  // Iterate over each pair of icon list and button group and wrap them together
  iconLists.each(function(index) {
    var iconList = jQuery(this);
    var buttonGroup = buttonGroups.eq(index); // Get corresponding button group for this icon list
    var parentDiv = jQuery('<div class="price-new-two"></div>');
    iconList.add(buttonGroup).wrapAll(parentDiv);
  });
});


/******************* Active card jquery ***************************************/
jQuery('.best-plan-section .ai-best-plan-active').each(function() {
  // Iterate through each .ai-best-plan
  var gridContainer = jQuery(this);

  // Find titles, subtitles, and prices within this .ai-best-plan
  var titles = gridContainer.find('.wp-block-stackable-heading');
  var subtitles = gridContainer.find('.wp-block-stackable-subtitle');
  var prices = gridContainer.find('.wp-block-stackable-price');

  // Iterate over each pair of title, subtitle, and price and wrap them together
  titles.each(function(index) {
    var title = jQuery(this);
    var subtitle = subtitles.eq(index); // Get corresponding subtitle for this title
    var price = prices.eq(index); // Get corresponding price for this title
    var parentDiv = jQuery('<div class="price-new-active"></div>');
    title.add(subtitle).add(price).wrapAll(parentDiv);
  });
});




jQuery('.best-plan-section .ai-best-plan-active').each(function() {
  // Iterate through each .ai-best-plan
  var gridContainer = jQuery(this);

  // Find icon lists and button groups within this .ai-best-plan
  var iconLists = gridContainer.find('.wp-block-stackable-icon-list');
  var buttonGroups = gridContainer.find('.wp-block-stackable-button-group');

  // Iterate over each pair of icon list and button group and wrap them together
  iconLists.each(function(index) {
    var iconList = jQuery(this);
    var buttonGroup = buttonGroups.eq(index); // Get corresponding button group for this icon list
    var parentDiv = jQuery('<div class="price-new-two-active"></div>');
    iconList.add(buttonGroup).wrapAll(parentDiv);
  });
});



// BMI calculator Js //


    // document.getElementById('calculate').addEventListener('click', function() {
    //     var height = parseFloat(document.getElementById('height').value);
    //     var weight = parseFloat(document.getElementById('weight').value);

    //     if (height > 0 && weight > 0) {
    //         var bmi = weight / ((height / 100) ** 2);
    //         document.getElementById('bmi-result').innerText = bmi.toFixed(1);
    //     } else {
    //         alert('Please enter valid height and weight.');
    //     }
    // });

    // document.getElementById('re-calculate').addEventListener('click', function() {
    //     document.getElementById('height').value = '';
    //     document.getElementById('weight').value = '';
    //     document.getElementById('age').value = '';
    //     document.getElementById('gender').value = 'male';
    //     document.getElementById('bmi-result').innerText = '0.0';
    // });















