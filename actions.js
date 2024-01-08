
function shopOpen(day,time){
    if (day == "Monday" || day == "Tuesday"  || day == "Wednesday" || day == "Thursday") {
        if (time >= "7:30" || time <= "20:30") {
            document.write("Open Now");
        }else{
            document.write("Close Now");
        }
    }else if(day == "Friday"){
        if (time >= "7:30" || time <= "22:00") {
            document.write("Open Now");
        }else{
            document.write("Close Now");
        }
    }else if(day == "Saturday"){
        if (time >= "9:00" || time <= "22:00") {
            document.write("Open Now");
        }else{
            document.write("Close Now");
        }
    }else if(day == "Sunday"){
        if (time >= "9:00" || time <= "20:30") {
            document.write("Open Now");
        }else{
            document.write("Close Now");
        }
    }
}

shopOpen("Monday","7:30");
document.write("<br>");
shopOpen("Monday","6:30");
document.write("<br>");
shopOpen("Monday","20:40");
