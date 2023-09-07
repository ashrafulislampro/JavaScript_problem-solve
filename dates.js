function getDayName(dateString){
    let dayName;
    // Write your code here
    let daysNameArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   let index = new Date(dateString).getDay();
    dayName = daysNameArr[index];
    console.log("dayddddddd", daysNameArr[index]);
    return  dayName;
}

const result = getDayName("11/10/2010");
console.log("result", result);