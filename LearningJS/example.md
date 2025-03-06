
  for (let i = 1; i <= 10; i++) {
    let mystart= start;
      table += "<tr>";
      for (let j = 1; j <= end; j++) {
        table += `<td> ${mystart*i}</td>`;
        mystart++;
      }
      
      table += "</tr>";
    }
    table += "</table>";