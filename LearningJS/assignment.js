console.log("hello world");
// const numTable = document.getElementById("numTable");

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function handleOnClick() {
  const start = parseInt(startNum.value);
  const end = parseInt(endNum.value);
  console.log("Hello world from click");
  console.log(start);
  console.log(end);
  let table = "<table>";

  for (let i = 1; i <= 10; i++) {
    let mystart = start;
    table += "<tr>";
    for (let j = start; j <= end; j++) {
      table += `<td > ${mystart * i}</td>}`;
      mystart++;
    }

    table += "</tr>";
  }
  table += "</table>";

  const numTable = document.getElementById("numTable");
  numTable.innerHTML = table;

  const tds = document.querySelectorAll("#numTable td");

  tds.forEach(td => {
    const value = parseInt(td.textContent);
    if (isPrime(value)) {
      td.classList.add("prime");
    }
    else if (value % 2 === 0) {
      td.classList.add("even");
    }
  });
}
