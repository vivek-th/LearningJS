function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function generateTable() {
  const startInput = document.getElementById("startNo");
  const endInput = document.getElementById("endNo");
  const startNo = parseInt(startInput.value);
  const endNo = parseInt(endInput.value);
  const table = document.getElementById("numberTable");

  table.innerHTML = ""; // Clear previous table

  // Reset error state
  startInput.classList.remove("error");
  endInput.classList.remove("error");

  // Validate input
  if (isNaN(startNo)) {
    startInput.classList.add("error");
  }
  if (isNaN(endNo)) {
    endInput.classList.add("error");
  }
  if (isNaN(startNo) || isNaN(endNo) || startNo >= endNo) {
    return;
  }

  // Generate table

  for (let i = startNo; i <= 10; i++) {
    const row = table.insertRow();
    const cell = row.insertCell();
    cell.textContent = i;
    if (isPrime(i)) {
      cell.classList.add("prime");
    }
    if (i % 2 === 0) {
      cell.classList.add("even");
    }

    for (let j = 1; j <= startNo; j++) {
        const column= table.insertcol()
    }
  }
}
