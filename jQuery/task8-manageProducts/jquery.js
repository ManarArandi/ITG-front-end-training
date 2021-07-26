$(document).ready(function () {
    var idCount = 0;

    $.validator.addMethod("price", function (value, element) {
        return this.optional(element) || /^(\d{1,3}(\,\d{3})*|(\d+))(\.\d{1,})?\s?\$$/.test(value);
        /*  return this.optional(element) || /^(\d+(?:[\.\,]\d{2})?)\s?\$$/.test(value);*/
    }, "Please enter a valid dollar amount");


    $.validator.addMethod("color", function (value, element) {
        return this.optional(element) || /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(value);
    }, "Please enter color in hex format");

    var validatorr = $("#myform").validate({
        rules: {
            name: "required",
            img: "required",
            price: {
                required: true,
                price: true
            },
            des: "required",
            text: "required",
            color: {
                required: true,
                color: true
            },
        },
        messages: {
            name: "Please enter product name",
            img: "Please enter valid URL",
            price: {
                required: "Please enter product price",
            }
            ,
            des: "Please enter product description",
            text: "Please enter Badge text",
            color: {
                required: "Please enter Badge color",
            }

        },
        /*---------------------Start----------------*/
        submitHandler: function (form) {
            var formData = form.elements
            $("<div></div>")
                .attr("class", "item")
                .attr("id", 'test' + (++idCount))
                .appendTo(".items-list");

            var newDiv0 = $("<div></div>")
                .attr("class", "badge")
                .css("background-color", formData.color.value)
                .html($('input[name="text"').val());


            var img = $('<img></img>')
                .attr("src", $('input[name="img"]').val())
                .attr("class", "item-img")

            var label1 = $('<label></label>')
                .attr("id", "proName")
                .html($('input[name="name"]').val());

            var label2 = $('<label></label>')
                .attr("id", "proPrice")
                .html($('input[name="price"]').val());

            var newDiv = $('<div></div>')
                .attr("class", "name-price")
                .append(label1, label2)

            var para = $('<p></p>')
                .attr("id", "description")
                .html($('input[name="des"]').val());

            var btn1 = $('<button></button>')
                .html("Edit").on("click", function (e) {

                    validatorr.resetForm(); /* if click add product and the fields are empty the error appears when click item to edit the error still this sent will remove them */
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $("#myform").offset().top
                    }, 1000);
                    var itemDiv = $(this).closest(".item");

                    $('input[name="text"]').val(itemDiv.find(".badge").text());

                    $('input[name="color"]').val(rgb2hex(itemDiv.find(".badge").css("background-color")));

                    $('input[name="img"]').val(itemDiv.find(".item-img").attr("src"));

                    $('input[name="name"]').val(itemDiv.find("#proName").text());

                    $('input[name="price"]').val(itemDiv.find("#proPrice").text());

                    $('input[name="des"]').val(itemDiv.find("#description").text());

                    $('input[name="submit"]').replaceWith($("<input>").attr("class", "btn").attr("type", "button")
                        .attr("value", "Save")
                        .attr("name", "savebtn"));

                    $('input[name="savebtn"]').off("click").click(function () {
                        if ($("#myform").valid()) {
                            console.log(itemDiv.find("#proName").text())
                            itemDiv.find(".badge").html($('input[name="text"]').val())
                            itemDiv.find(".badge").css("background-color", $('input[name="color"').val())
                            itemDiv.find(".item-img").attr("src", $('input[name="img"]').val())
                            itemDiv.find("#proName").html($('input[name="name"]').val());
                            itemDiv.find("#proPrice").html($('input[name="price"]').val());
                            itemDiv.find("#description").html($('input[name="des"]').val());

                            $(this).replaceWith($("<input>").attr("class", "btn").attr("type", "submit").attr("name", "submit")
                                .attr("value", "Add Product"))

                            /*$('#myform').find("input[type=text], input[type=url],input[type=number]").val("");*/
                            $('#myform')[0].reset()

                            $([document.documentElement, document.body]).animate({
                                scrollTop: itemDiv.offset().top
                            }, 1000);
                        }
                    })
                });


            var btn2 = $('<button></button>')

                .html("Delete").on("click", function (e) {

                    $(".dialog-text").html("You are about to delete " + $(this).closest(".item").find("#proName").text() + " ,are you sure?")
                    $("#modal-container").css("display", "block");
                    $("#yes").off('click').click(function () {
                        $("#modal-container").css("display", "none");
                        $(e.target).closest(".item").remove();

                    })
                    $("#no").click(function () {
                        $("#modal-container").css("display", "none");

                    })

                })

            var newDiv2 = $('<div></div>')
                .attr("class", "edit-delete")
                .append(btn1, btn2)


            $("<div></div>")
                .attr("class", "two")
                .appendTo('#test' + idCount).append(newDiv0, img);

            $("<div></div>")
                .attr("class", "three")
                .appendTo('#test' + idCount).append(newDiv, para, newDiv2);

            /*----------------to empty the fields-----------------------*/
            $('#myform')[0].reset()
        }
    });
    var hexDigits = new Array
        ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");

    //Function to convert rgb color to hex format
    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    // function submitFunction() {
    //     console.log('Test Function!');
    // }

    // $('#myform').submit(function (event) {
    //     event.preventDefault();
    //     console.log('This is the form data');
    //     if ($(this).valid()) {
    //         console.log("valid")
    //     }
    // });
    // $('.test-button').click(function (event) {
    //     debugger


    //     alert('aaaaaaaaaaaa');
    // })
    function hex(x) {
        return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    }
});


/*

    $("#dialog").dialog({
        title: "Dialog",
        modal: true,
        draggable: false,
        resizable: false,
        autoOpen: false,
        width: 500,
        height: 400,
        buttons: {
            cancle: function () {
                $(this).dialog("close")
            },
            'Yes': function () {
                $(e.target).closest(".item").remove();
            }
        }
    })
var newPara = $('<div class="item"></div>');
var neww=$('<div class="two"></div>');
var label1=$('<label></label>')
var label2=$('<label></label>')
label1.html($('input[name="name"]').val());
label2.html($('input[name="price"]').val());
neww.append(label1);
neww.append(label2);
newPara.append(neww);
$('.items-list').append(newPara);


.parents("li:first")



if we select item to edit and not click save insted we choose another item to edit it the edit will
be to the first item beacuse the (replace with)code did not found any add product button
*/