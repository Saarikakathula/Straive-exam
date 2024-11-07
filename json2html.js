// Export a default function that converts JSON to an HTML table
export default function json2html(data) {
    // Create the table element with data-user attribute
    let table = '<table data-user="kathulasaarika@gmail.com">';
    
    // Add the table header (thead)
    table += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
    
    // Add the table body (tbody)
    table += '<tbody>';
    
    // Loop through the data array and create a table row for each object
    data.forEach(item => {
      table += '<tr>';
      table += `<td>${item.Name}</td>`;
      table += `<td>${item.Age}</td>`;
      
      // If the Gender key exists, display it, otherwise leave it blank
      if (item.Gender) {
        table += `<td>${item.Gender}</td>`;
      }
      
      table += '</tr>';
    });
    
    // Close the table body and table
    table += '</tbody></table>';
    
    // Return the complete HTML table as a string
    return table;
  }
  