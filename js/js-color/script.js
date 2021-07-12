let colorName  = document.getElementById("colorName");
let colorValue = document.getElementById("colorValue");
let addColor   = document.getElementById("addColor");
let errorname  = document.getElementById("errorname");
let errorvalue = document.getElementById("errorvalue");
/*----------------------------------------------------*/
let myInput = document.getElementById("myInput");
/*----------------------------------------------------*/
let newText    = document.getElementById("newText");
let addNewText = document.getElementById("addNewText");
let area       = document.getElementById("area");
/*----------------------------------------------------*/
let random = document.getElementById("random");
/*----------------------------------------------------*/
var colorArray = [];
var index;

addColor.onclick = function () {
    var flag=false;
    errorname.innerHTML  = "";
    errorvalue.innerHTML = "";

    if (colorName.value === '' || colorName.value == null) {
        errorname.innerHTML = "Please enter a color name"
        flag=true;
    }
    if (colorValue.value === '' || colorValue.value == null) {
        errorvalue.innerHTML = "Please enter color value"
        flag=true;
       
    }
    if(!flag) {
       
        const found = colorArray.some(el => el.name.toLowerCase() === colorName.value.toLowerCase());
        if (!found) {
            var colorObj = {
                name: colorName.value,
                value: colorValue.value
            };
            
            colorArray.push( colorObj )
            console.log(colorArray);
            colorName.value  = "";
            colorValue.value = "";
        }
        else {
            alert("This color already exist")
        }
    }
};
/*----------------------------------------------------------*/
autocomplete(document.getElementById("myInput"), colorArray);

function autocomplete(myInput, colorArray) {
    myInput.addEventListener("input", function(e) {
        var containerList, item;
        var val = this.value;

        if (!val) {
        closeAllLists();
        return false;
    } /*to delete the list when remove all text in input field*/

        containerList = document.createElement("DIV");

        containerList.setAttribute("class", "autocomplete-items");
        
        this.parentNode.appendChild(containerList);

        for (var j = 0; j < colorArray.length; j++) {
          /*check if the item contains the letters as the text field*/
          if (colorArray[j].name.toLowerCase().includes(val.toLowerCase())){
            /*create a DIV element for each matching element:*/
            item = document.createElement("DIV");

            item.innerHTML = colorArray[j].name.toLowerCase().replace(val, '<b>' + val.toLowerCase() + '</b>');
            /*item.innerHTML += "<input type='hidden' value='" + colorArray[j].name + "'>";*/
            /*execute a function when someone clicks on the item value (DIV element):*/
            item.addEventListener("click", function(e) {

                /*The getElementsByTagName() method returns a collection of an elements's child elements with the specified tag name, as a NodeList object.*/
             var colorval= colorArray.find((x)=>x.name===e.target.outerText)
             area.style.color=colorval.name;
            //    console.log(e)
                closeAllLists();
            });
            containerList.appendChild(item);
          }
        }
    });
  
    function closeAllLists() {
     var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
          x[i].parentNode.removeChild(x[i]);
        
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
 
 /*----------------------------------------------------------*/
addNewText.onclick=function(){
    if (newText.value === '' || newText.value == null) {
        area.innerHTML="Hello World";
    }
    else{
area.innerHTML=newText.value;
newText.value = '';
}
};
/*-----------------------------------------------------------*/
random.onclick=function(){
   index= Math.floor(Math.random() * colorArray.length);
   area.style.color=colorArray[index].name;
};

/*-----------------------------------------------------------*/



 /*  for (var i = 0, l = colorArray.length; i < l; i++) {
             if (colorArray[i].name == colorName.value) {
                 alert("hi")
                 flag = 1;
             }
         }
         if (flag == 0) {
          
             colorObj.name = colorName.value;
             colorObj.value = colorValue.value;
             colorArray.push(colorObj)
             console.log(colorArray);
          
         }*/