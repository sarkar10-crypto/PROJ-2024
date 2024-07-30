const endDate = "30 july 2024 8:44 pm"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;   // converted from milliseconds to seconds
    // console.log(diff / 3600 / 60);                    //converting seconds to days


    // To not get the --ve value applying return condition
    if (diff < 0) return;

    console.log(Math.floor(diff / 3600 / 24));
    inputs[0].value = Math.floor(diff / 3600 / 24);   // Got displayed days in the input box
    //Displaying hrs that is remaining after counting days in the input box
    inputs[1].value = Math.floor(diff / 3600) % 24;
    //displaying remaining minutes .
    inputs[2].value = Math.floor(diff / 60) % 60;
    //displaying seconds in the input box
    inputs[3].value = Math.floor(diff) % 60;
}
//initial call--> it's done upon refreshing the web page.
clock();

/*
1 day == 24 hrs
1 hrs == 60 min
60 min == 3600 sec
*/

//To make the the function reload after 1 sec we are making a function , a self calling function.
setInterval(
    () => {
        clock();
    },
    1000
)
    
