var accordion = document.querySelectorAll(".title");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        var desc = document.querySelectorAll(".activity-detail");
        desc[i].style.maxHeight = toggleMaxHeight(i);
        // desc[i].style.padding = "1.5rem 1rem";
        desc[i].style.padding = togglePadding(i);
    });
}

function toggleMaxHeight(index) {
    var desc = document.querySelectorAll(".activity-detail");
    var maxHeight = desc[index].style.maxHeight;
    console.log(maxHeight);

    if (maxHeight === "0px" || maxHeight === "")
        return "400px";
    else if (desc[index].style.maxHeight !== "0")
        return "0";
}
function togglePadding(index) {
    var desc = document.querySelectorAll(".activity-detail");
    var padding = desc[index].style.padding;
    console.log(padding);
    if (padding === "" || padding === "0px 1.5rem") 
        return "1.5rem 1.5rem";
    else if (padding !== "0")
        return "0 1.5rem"; 
}