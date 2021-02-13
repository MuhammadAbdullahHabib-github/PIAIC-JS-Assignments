var name = prompt("Please enter your name : ");
var date = prompt("Enter date of birth :");
var month = prompt("Enter month of year : ");
var year = prompt("Enter year of birth : ");
var newDate = new Date();
var hour = newDate.getHours();
var message;
if (hour >= 6 && hour <= 12) {
  message = "Hello " + name + " , Good morning";
} else if (hour >= 12 && hour <= 16) {
  message = "Hello " + name + " , Good Afternoon";
} else {
  message = "Hello " + name + " , Good Night";
}
alert(message);
var DOB = "Your DOB is " + date + "/" + month + "/" + year;
alert(DOB);

var originalDOB = new Date("Feburary 26,1996");

var originalDOBTime = originalDOB.getTime();
var newDateTime = newDate.getTime();

var differenceTime = newDateTime - originalDOBTime;

var totalTime = differenceTime / (1000*60*60*24*365); 
var totalYears = Number(totalTime.toString().slice(0,2));

var totalTimeLeft =  totalTime.toString().slice(3);

var totalTime1 = totalTimeLeft / (1000*60*60*24); 
var totalMonths = Number(totalTime1.toString().slice(0,2));

var totalTimeLeft1 = totalTime1.toString().slice(2);

var totalTime2 = totalTimeLeft1 / (1000*60*60); 
var totaldays = Number(totalTime2.toString().slice(2,4));





console.log("You are "+ totalYears +" years "+ totalMonths +" Month "+ totaldays +" Days 19 Hours 20 Minutes 25 Seconds old");

var nextDOB = new Date("Feburary 26 , 2021");

var ftime = nextDOB.getTime();
var stime = newDate.getTime();

var msdiff = ftime - stime;
var daysLeft = msdiff / (1000 * 60 * 60 * 24);
var fdaysLeft = daysLeft.toString().slice(0, 2);

var timeLeftForDays = Number(daysLeft.toString().slice(2));

var hoursLeft = timeLeftForDays / (1000 * 60 * 60);
var fhoursLeft = hoursLeft.toString().slice(0, 1);

var timeLeftForMinutes = Number(hoursLeft.toString().slice(2));

var MinuteLeft = timeLeftForMinutes / (1000 * 60);
var fMinuteLeft = MinuteLeft.toString().slice(0, 1);

var timeLeftForSeconds = Number(MinuteLeft.toString().slice(1));
var fsecondLeft = timeLeftForSeconds.toString().slice(0, 2);

console.log(
  "How much time left in your next birthday? " + fdaysLeft + " days " + fhoursLeft + " hours " + fMinuteLeft + " minutes " + fsecondLeft + " seconds"
);
