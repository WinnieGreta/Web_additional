
let dates =[];

function addToArray() {
  arrElement = document.getElementById("dateArr").value;
  console.log(arrElement);
  dates.push({date: new Date(arrElement)});
  console.log(dates[0]);
  unsortedPreview = document.getElementById("unsortedArray");
  unsortedPreview.innerHTML += " " + arrElement + ",";
}

function sortDateArray() {
  sortedDates = dates.sort((a, b) => a.date - b.date);

  for (i = 0; i < sortedDates.length; i++) {
    sortedPreview = document.getElementById("sortedArray");
    sortedPreview.innerHTML += " " + sortedDates[i].date.toLocaleDateString() + ",";
  }
}
