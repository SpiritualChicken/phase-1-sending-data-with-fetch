// Add your code here
const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: "Steve",
      email: "steve@steve.com"
    }),
};


function submitData() {
    return fetch("http://localhost:3000/users", configurationObject) 
         .then(resp => resp.json())
         .then(data => document.querySelector("body").append(`<p>${data.id}</p>`) )
        .catch((error) => document.querySelector("body").innerHTML += `<div id="error">${error.message}</div>`) 

}
