var input = document.createElement("input");
input.setAttribute("type","date");
input.setAttribute("name","Date"); 
input.setAttribute("id","date");


var button = document.createElement("button");
button.innerHTML="Display Data";
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",display_data);

var center = document.createElement("div");
center.setAttribute("class","container");

center.append(input,button);

document.body.append(center);
//For dividing and rounding numbers
function mathfloor(value_1,value_2){
    return Math.floor(value_1/value_2);
}

function variable(content,data){
    var label = document.createElement("p");
    label.innerHTML = content + data;
    return label;
}

function display_data(){
    var get_date = document.getElementById("date").value;
    if(Date.parse(get_date)){
        var input_date = new Date(get_date); // Date given by the User
        var current_date = new Date(); // Current Date
        var milli_sec = current_date.getTime()-input_date.getTime(); //Gives Milli Second

        var second = mathfloor(milli_sec,1000);

        var minute = mathfloor(second,60);

        var hour = mathfloor(minute,60);

        var day = mathfloor(hour,24);

        var month = ((current_date.getFullYear()-input_date.getFullYear())*12) + (current_date.getMonth()-input_date.getMonth());
        
        var year = current_date.getFullYear()-input_date.getFullYear();
        console.log(year)
    }
    var millisec = variable("Milli Second : ",milli_sec);

    var second_1 = variable("Second : ",second);

    var minute_1 = variable("Minute : ",minute);

    var hour_1 = variable("Hour : ",hour);

    var day_1 = variable("Day : ",day);

    var month_1 = variable("Month : ",month);

    var year_1 = variable("Year : ",year);

    var Given_date = variable("Given input date is ",input_date);

    var text = document.createElement("div");
    text.setAttribute("class","text-center");

    text.append(Given_date,year_1,month_1,day_1,hour_1,minute_1,second_1,millisec);

    document.body.append(text);
} 

