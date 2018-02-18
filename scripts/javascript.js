$(document).ready(function () {
  


  var data = [];
  //Currently gets the box ID
  $(".address-box").click(function () {

    var box = {};

    // get all the nested children
    var children = $(this).children('.address-data').children()

    // iterate through each and make an associative array with the text
    $.each(children, function (value) {
      var className = $(this).attr('class');
      box[className] = $(this).text();
    });
    console.log(box);
  });

  $("#next-step-button").on('click', function(){
    
      window.location='index2.html';
    });

  });



function validateForm() {
  var isValid = true;
  $('#form input').each(function () {
    if ($(this).val() === '')
      isValid = false;
  });

  return isValid;

}

