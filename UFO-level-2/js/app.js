
var tableData = data;

// YOUR CODE HERE!

// Reference table body
var tbody = d3.select("tbody");

data.forEach(function (data) {
    // console.log(data);
    var row = tbody.append("tr");

    Object.entries(data).forEach(function ([key, value]) {
        console.log(key, value);
        var data = row.append("td");
            data.text(value);
    });
});

//     for (const key in data) {
//         if (data.hasOwnProperty(key)) {
//             console.log(key)
//             var value = data[key];
//             console.log(value)
//             var data = row.append("td");
//             data.text(value);
//         }
//     }
// });

// Select the button
var button = d3.select("button");

// Select the form
var form = d3.select("form");

form.on("submit", FilterSubmit)
button.on("click", FilterSubmit)

function FilterSubmit(){
    d3.event.preventDefault();
    tbody.selectAll("tr").remove();
    var userInput = document.getElementById("datetime").value;
    var filteredData = data.filter(sighting => sighting.datetime === userInput);
    filteredData.forEach(function (data) {
              var row = tbody.append("tr");
    
        Object.entries(data).forEach(function ([key, value]) {
            console.log(key, value);
            var data = row.append("td");
                data.text(value);
        });
    });   
}


