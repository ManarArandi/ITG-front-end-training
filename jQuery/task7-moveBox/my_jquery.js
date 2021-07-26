/*-------------- The button on the left which has text (Move to Right)--------------*/
$(document).ready(function () {
    $("#btnLeft").click(function () {
        if ($("#left").children().length > 0)
            $("#right").append($("#left .square:last"));

        else alert("There are no more boxes to move!")

    });
/*-------------- The button on the right which has text (Move to Left)--------------*/
    $("#btnRight").click(function () {
        if ($("#right").children().length > 0)
            $("#left").append($("#right .square:last"));
        else alert("There are no more boxes to move!")
    });
});





