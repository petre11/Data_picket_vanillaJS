// Date variables
let today = new Date(),
    day = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

// Calendar DOM elements
let yearSpan = document.querySelector('.year'),
    mothSpan = document.querySelector('.month'),
    arrowButtons = document.querySelectorAll('[data-button]'),
    daysInCalendar = document.querySelectorAll('td');

//Get days name
getDaysName = (newDate) => {
    let d = newDate,
        weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let n = weekday[d.getDay()];
    return n;
};
// Get month name
getMonthName = (mm) =>{
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

        let n = month[mm];
    return n;
}

// Number of days of the month
daysInMonth = (yyyy,mm) => {
    let d= new Date(yyyy, mm+1, 0);
    return d.getDate();
}

//find position of first day in month
findPositionOfFirstDay = (yyyy,mm) => {
 let d= new Date(yyyy, mm, 1); 
    return d.getDay() -1;
}

//file calendar tile
fileTiel = (yyyy,mm) => {
    for (var index = 1; index < daysInMonth(yyyy,mm)+1; index++) {
        daysInCalendar[findPositionOfFirstDay(yyyy,mm)+index].innerHTML = index;
        
    }
};

//clear calendar tile
clearCalendarTile = () => {
    daysInCalendar.forEach(function(element){
        element.innerHTML = "";
    })
}

// INIT CALENDAR
calendarINIT = (yyyy,mm) => {
    yearSpan.innerHTML = yyyy;
    mothSpan.innerHTML = getMonthName(mm);
    daysInMonth(yyyy,mm);
    findPositionOfFirstDay(yyyy,mm);
    fileTiel(yyyy,mm);
}

calendarINIT(year,month);

//Change display Month
(changeDisplayMont = () => {
    for (button of arrowButtons) {
        button.addEventListener('click', function() {
            if ((this).className == 'arrow-left'){
                month --
                if(month == -1 ){
                    month = 11
                    year = year - 1
                }
                mothSpan.innerHTML = getMonthName(month);
                clearCalendarTile();
                calendarINIT(year,month);
            }
            else {
                month++
                if(month == 11) {
                    month = 0
                    year = year + 1
                }
                mothSpan.innerHTML = getMonthName(month);
                clearCalendarTile();
                calendarINIT(year,month);
            }
        });
    }
})();
