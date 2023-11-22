

let countryElements = document.getElementById('countries').childNodes;
    let countryCount = countryElements.length;
    for (let i = 0; i < countryCount; i++) {
      countryElements[i].onclick = function() {
        alert('You clicked on ' + this.getAttribute('data-name'));
      }
    }