$(document).ready(function(){

  $("#MainClick").click(function(e){
  	e.preventDefault();
    $("#down1, #down3, #down2").toggle(1000);
  });// end of click function
});// end of ready