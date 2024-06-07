let day = prompt("Enter a day");
if (day === "saturday" ||  "sunday") {
    alert("it's a weekend");
}
else if (day === "monday" || "tuesday" || "wednesday" || "thursday"){
    alert("it's a weekday");
}
else {
    alert("Please Enter a Valid Day");
}