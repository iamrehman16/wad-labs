const body = document.querySelector("body");

//initializing arrays
const serials = ["1", "2", "3","4"];
const names = ["Ali", "Rahman", "Tayyab","Ghufran"];
const gpa = ["3.7", "3.9", "3.6", "3.3"];



//avg function
function avg(gpas){
    let sum = 0;
    let count = 0;
    for(let gpa of gpas){
        sum += parseFloat(gpa);
        count++;
    }
    return (sum/count).toFixed(2);
}

//creating table
const table = document.createElement("table");
const thead = document.createElement("thead");

//creating heading data
const thd1 = document.createElement("td");
thd1.innerText = "Serial";
const thd2 = document.createElement("td");
thd2.innerText = "Name";
const thd3 = document.createElement("td");
thd3.innerText = "CGPA";

//appending heading data
thead.appendChild(thd1);
thead.appendChild(thd2);
thead.appendChild(thd3);

//appending thead to table
table.appendChild(thead);

//creating body
const tbody = document.createElement("tbody");

//creating rows and appending
for (let i = 0; i < 4; i++) {
  const trow = document.createElement("tr");

  const trd1 = document.createElement("td");
  trd1.innerText = serials[i];
  const trd2 = document.createElement("td");
  trd2.innerText = names[i];
  const trd3 = document.createElement("td");
  trd3.innerText = gpa[i];

  trow.appendChild(trd1);
  trow.appendChild(trd2);
  trow.appendChild(trd3);

  tbody.appendChild(trow);
}

//adding last row for button and average
const trow = document.createElement("tr");
const trd1 = document.createElement("td");
const trd2 = document.createElement("td");
trd2.innerText="Average : ";
const trd3 = document.createElement("td");
trow.appendChild(trd1);
trow.appendChild(trd2);
trow.appendChild(trd3);
//add this last row to tbody
tbody.appendChild(trow);


//append body to table
table.appendChild(tbody);
//append table to body
body.append(table);

//creating and appending button
const btn = document.createElement("button");
btn.innerText = "Calculate Avg";
body.appendChild(btn);

//adding listener to button
btn.addEventListener("click", () => {
  const avg_cgpa = avg(gpa);
  trd3.innerText=avg_cgpa;
});
