window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let pilot = document.querySelector("input[name=pilotName]");
      let coPilot = document.querySelector("input[name=copilotName]");
      let fuel = document.querySelector("input[name=fuelLevel]");
      let cargo = document.querySelector("input[name=cargoMass]");

   form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (pilot.value === "" || coPilot.value === "" || fuel.value === "" || cargo.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      if(isNaN(fuel.value) || isNaN(cargo.value)) {
         alert("Fuel level and cargo mass values must be numbers.");
         event.preventDefault();
      }
      if (!isNaN(pilot.value) || !isNaN(coPilot.value)) {
         alert("Please enter valid names for the Pilot and Co-Pilot.");
         event.preventDefault();
      }
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} Ready`;
      document.getElementById("copilotStatus").innerHTML = `Co-pilot ${coPilot.value} Ready`;

      if (fuel.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      }
      if (cargo.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      }
      else if (cargo.value < 10000 && fuel.value > 10000) {
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
      }

   });
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const mission = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*json.length);
         mission.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">
         `;
      });
   });
});

// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!

*/
