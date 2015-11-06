$(document).ready(function(){

 $("#playlink").click(function() {
	$(".place").hide();
	$("#lol").css("background","url('stage.png')");
	$("#lol").css("background-size","cover");
	$(".player").css("display","inline-block");
	$("#enemyTank").css("display","inline-block");
	$("#enemySki").css("display","inline-block");
 });

 $("#top").click(function() {
	$(".player").css("top","5px");
 });
	
 $("#left").click(function() {
	$(".player").css("left","5px");
 });
 
 $("#right").click(function() {
	$(".player").css("left","1000px");
 });
 $("#bottom").click(function() {
 	$(".player").css("top","1000px");
 });
$("#top2").click(function() {
	$("#enemyTank").css("top","5px");
 });
	
 $("#left2").click(function() {
	$("#enemyTank").css("left","5px");
 });
 
 $("#right2").click(function() {
	$("#enemyTank").css("left","1000px");
 });
 $("#bottom2").click(function() {
 	$("#enemyTank").css("top","1000px");
 });

});