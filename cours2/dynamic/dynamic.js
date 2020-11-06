"use strict";
function createTable(lines, col, string){
    var tab = [];
    for(let x = 0; x < lines; x++){
        for (let y = 0; y < col; y++) {
            tab[x].push(string + "[" + x + "][" + y + "]");            
        }
    }
    return tab;
}

//function made by IPL
function createDynamicHtmlTableWithCreateElement(containerSelector, arrayToDisplay) {
    
    const divContainer = document.querySelector(containerSelector);
    divContainer.innerHTML = "";
    const myTable = document.createElement("table");
    myTable.className = "table table-bordered text-nowrap";
    divContainer.appendChild(myTable);
  
    for (let x = 0; x < arrayToDisplay.length; x++) {
      //for each line, add a <tr> element
      const myLine = document.createElement("tr");
      // for each <tr> element, append it to the <table> element
      myTable.appendChild(myLine);
      //for each cell, add a <td> element, assign to it the given value in the array, and append the <td> element to the <tr> element
      for (let y = 0; y < arrayToDisplay[0].length; y++) {
        const myCell = document.createElement("td");
        myCell.innerHTML = arrayToDisplay[x][y];
        myLine.appendChild(myCell);
      }
    }
}

const btn = document.querySelector("#btn1");
const lines = document.getElementById("lines");
const columns = document.getElementById("columns");
const string = document.getElementById("string");


btn.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("clickButton::");
    const myArray = createTable(lines.value, columns.value, string.value);
    createDynamicHtmlTableWithCreateElement("#array",myArray);
});

  

