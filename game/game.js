$(document).ready(function(){

 $("#playlink").click(function() {
	$(".place").hide();
	$("#lol").css("background","url('stage.png')");
	$("#lol").css("background-size","cover");
	$(".player").css("display","inline-block");
	$("#enemyTank").css("display","inline-block");
	$("#enemySki").css("display","inline-block");
 });

 $("#up").click(function() {
	$(".player").css("top","2px");
 });

 $("#left").click(function() {
	$(".player").css("left","900px");
 });

});
