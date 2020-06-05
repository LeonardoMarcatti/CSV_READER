/*async function GetData() { 
    let response = await fetch('cad.csv');
    let data = await response.text();
    let rows = data.split('\n');
    rows.forEach( el => { 
        let row = el.split(',');
        let tr = $('<tr>');
        for (let index = 0; index < row.length-1; index++) {            
            let td = $('<td>');
            td.append(row[index]);
            tr.append(td);
            $('tbody').append(tr);            
        };
    });
 };

 GetData();*/

 function handleFiles(files) {
    // Check for the various File API support.
    if (window.FileReader) {
        // FileReader are supported.
        getAsText(files[0]);
    } else {
        alert('FileReader are not supported in this browser.');
    }
  };

  function getAsText(fileToRead) {
    var reader = new FileReader();
    // Read file into memory as UTF-8      
    reader.readAsText(fileToRead);
    // Handle errors load
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
  };

  function loadHandler(event) {
    var csv = event.target.result;
    processData(csv);
  };

  function processData(csv) {
      let rows = csv.split(/\r\n|\n/);
      rows.forEach( el => { 
        let row = el.split(',');
        let tr = $('<tr>');
        for (let index = 0; index < row.length-1; index++) {            
            let td = $('<td>');
            td.append(row[index]);
            tr.append(td);
            $('tbody').append(tr);            
        };
    });
  };

  function errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    };
  };
    