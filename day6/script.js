/**
 * Created by preb on 11.12.16.
 */
const dataURL = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let data = "";
const xhr = new XMLHttpRequest();

xhr.open('GET', dataURL);
xhr.addEventListener("load", function () {
  data = JSON.parse(xhr.responseText);
});
xhr.send();

const input = document.querySelector("input");
const suggestionsList = document.getElementById("suggestions");


let previousQuery = "";
function displaySuggestions() {
    if(this.value !== previousQuery) {
        previousQuery = this.value;
        if(this.value === "") {
            suggestionsList.innerHTML = "";
        } else {
            console.log(this.value);
            let results = data.reduce((accu, current) => {
                let regExp = new RegExp(this.value, 'ig');
                if (current.city.match(regExp) || current.state.match(regExp)) {
                    let new_city = {
                        city: current.city.replace(regExp, '<mark>$&</mark>'),
                        state: current.state.replace(regExp, '<mark>$&</mark>')
                    };
                    accu.push(new_city);
                }

                return accu;
            }, []);
            let resultHTML = results.reduce((accu, current) => {
                return accu + `<li>${current.city}, ${current.state}</li>`;
            }, "");
            suggestionsList.innerHTML = resultHTML;
        }
    }
}

input.addEventListener("change", displaySuggestions);
input.addEventListener('keyup', displaySuggestions);