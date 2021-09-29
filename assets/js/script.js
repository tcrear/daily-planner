// console.log("hello")
var containerEl = $(".container")
var currentHour = moment().format("HH")
// var currentHour = 11
// console.log(currentHour)

var timeArr = [
    {
        text: "8 AM",
        hourVal: 8
    },
    {
        text: "9 AM",
        hourVal: 9
    },
    {
        text: "10 AM",
        hourVal: 10
    },
    {
        text: "11 AM",
        hourVal: 11
    },
    {
        text: "12 PM",
        hourVal: 12
    },
    {
        text: "1 PM",
        hourVal: 13
    },
    {
        text: "2 PM",
        hourVal: 14
    },
    {
        text: "3 PM",
        hourVal: 15
    },
    {
        text: "4 PM",
        hourVal: 16
    },
    {
        text: "5 PM",
        hourVal: 17
    },
    {
        text: "6 PM",
        hourVal: 18
    },
]

function saveToLocal() {
    console.log("I've been clicked")
    //Try $(this) to get the reference of what was clicked
}
for(i=0; i<timeArr.length; i++){
    // var newH = $("<h1>").text("example")
    // containerEl.append(newH)

    var newRow = $("<div>").attr("class", "row")
    var newP = $("<p>").attr("class", "col-2 hour").text(timeArr[i].text)

    var newTextarea = $("<textarea>")
    if(timeArr[i].hourVal < currentHour){
        newTextarea.attr("class", "col-8 past")
    } else if (timeArr[i].hourVal == currentHour){
        newTextarea.attr("class", "col-8 present")
    } else {
        newTextarea.attr("class", "col-8 future")
    }

    var newButton = $("<button>").attr("class", "col-2 saveBtn").text("save").on("click", saveToLocal)

    newRow.append(newP)
    newRow.append(newTextarea)
    newRow.append(newButton)

    containerEl.append(newRow)
}

// var past = moment();
var now = moment();
// var future = moment();

// $("span").text(past.format)
$("#currentDay").text(now.format('MMMM Do YYYY, h:mm:ss a'));


