document.addEventListener("DOMContentLoaded", function() {
  const partyList = document.getElementById("party-list");
  const partyForm = document.getElementById("party-form");

  // Array for party objects
  let parties = [];

  // Function 
  function renderPartyList() {
    partyList.innerHTML = ""; // Clear previous content
    parties.forEach((party, index) => {
      const partyElement = document.createElement("div");
      partyElement.innerHTML = `
        <p><strong>Name:</strong> ${party.name}</p>
        <p><strong>Date:</strong> ${party.date}</p>
        <p><strong>Time:</strong> ${party.time}</p>
        <p><strong>Location:</strong> ${party.location}</p>
        <p><strong>Description:</strong> ${party.description}</p>
        <button class="delete-btn" data-index="${index}">Delete</button>
      `;
      partyList.appendChild(partyElement);
    });
  }

  // Function for form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("party-name").value;
    const date = document.getElementById("party-date").value;
    const time = document.getElementById("party-time").value;
    const location = document.getElementById("party-location").value;
    const description = document.getElementById("party-description").value;

    // Creating new party object
    const newParty = {
      name,
      date,
      time,
      location,
      description
    };

    // Add new party to array
    parties.push(newParty);

    // Render updated party list
    renderPartyList();

    // Clear form fields
    partyForm.reset();
  }

  // Function to  delete button click
  function handleDeleteButtonClick(event) {
    if (event.target.classList.contains("delete-btn")) {
      const index = event.target.getAttribute("data-index");
      parties.splice(index, 1); // Remove party from array
      renderPartyList(); // Re-render party list
    }
  }

  // event listener to form submission
  partyForm.addEventListener("submit", handleFormSubmit);

  // event listener for delete button 
  partyList.addEventListener("click", handleDeleteButtonClick);
});