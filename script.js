var today = new Date();
var diffDays = 0;
var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec");
var curr_date = today.getDate();
var curr_month = today.getMonth();
var curr_year = today.getFullYear();
var a;
var b;
var c;
var diffDays;

$("#todayDate").html(m_names[curr_month] + ". " + curr_date + ", " + curr_year);
$("#datepicker").datepicker();

function daysLeft() {
	a = $( "#datepicker" ).datepicker('getDate').getTime();
	b = today.getTime();
	c = 24*60*60*1000;
	diffDays = Math.round((a - b)/c);

// 13. You are almost there!
// We need a variable where we can store the integer value difference of days and display that in a concatenated HTML string.
// "You have ____ days left!"
	var messageDaysLeft = "You have " + diffDays + " days left!";
	console.log(messageDaysLeft);
}

$("#datepicker").on("change", function(){
	daysLeft();

// 14. Now, instead of console.log, let's update the HTML string every time the user clicks a date.
// Use jQuery to write the result string in the element with an id of 'result'

$("#result").html("You have " + diffDays + " days left!");

});

// UH-OH! We defined the variable inside daysLeft and we need the same data in our .on('change', function(){})
// 15. Define the variable globally and leave your local variable references alone.

