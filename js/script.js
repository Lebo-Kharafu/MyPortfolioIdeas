function updateSkillList() {
  // Fetch the JSON data (assuming the file is named 'skills.json')
  fetch("./json/skills.json")
    .then((response) => response.json()) // Parse the JSON data
    .then((data) => {
      const skillList = document.getElementById("skillList"); // Get the skill list container
      skillList.innerHTML = ""; // Clear the current content of the skill list

      // Loop through each skill in the JSON data
      for (let skillKey in data) {
        if (data.hasOwnProperty(skillKey)) {
          // Ensure it's a direct property
          const skill = data[skillKey]; // Get the skill object

          // Create a new section element
          const skillSection = document.createElement("section");
          skillSection.classList.add("skill-pair");

          // Create the img element for the skill icon
          const skillImage = document.createElement("img");
          skillImage.src = skill.src;
          skillImage.alt = skill.name + " Icon";
          skillImage.classList.add("skill-icon");

          // Create the progress element for the skill level
          const skillProgress = document.createElement("progress");
          skillProgress.title = skill.name;
          skillProgress.value = skill.progress;
          skillProgress.max = 100;

          // Append the img and progress elements to the skill section
          skillSection.appendChild(skillImage);
          skillSection.appendChild(skillProgress);

          // Append the new skill section to the skillList
          skillList.appendChild(skillSection);
        }
      }
    })
    .catch((error) => console.error("Error loading skills.json:", error));
}

function updateProfiles() {
  // Fetch the JSON data (assuming the file is named 'skills.json')
  fetch("./json/profiles.json")
    .then((response) => response.json()) // Parse the JSON data
    .then((data) => {
      const slide = document.getElementById("slider"); // Get the skill list container
      slide.innerHTML = ""; // Clear the current content of the skill list

      // Loop through each skill in the JSON data
      for (let slideKey in data) {
        if (data.hasOwnProperty(slideKey)) {
          // Ensure it's a direct property
          const prof = data[slideKey]; // Get the skill object

          // Create a new section element
          const slideSection = document.createElement("section");
          slideSection.classList.add("profiles");

          const h1 = document.createElement("h1");
          const textNode = document.createTextNode(slideKey);
          h1.appendChild(textNode);

          // Create the img element for the skill icon
          const slideImage = document.createElement("img");
          slideImage.src = prof.src;
          slideImage.alt = slideKey + " Icon";
          slideImage.classList.add("accPic");

          const h5 = document.createElement("h5");
          const a = document.createElement("a");
          a.classList.add("proflink");
          a.href = prof.link;
          a.target = "_blank";
          a.textContent = prof.username;
          h5.appendChild(a);

          // Append the img and progress elements to the skill section
          slideSection.appendChild(h1);
          slideSection.appendChild(slideImage);
          slideSection.appendChild(h5);

          // Append the new skill section to the skillList
          slide.appendChild(slideSection);
        }
      }
    })
    .catch((error) => console.error("Error loading skills.json:", error));
}

function showSideNav() {
  const sidenav = document.getElementById("sidenav");

  if (sidenav.style.display === "flex") {
    sidenav.style.display = "none";
  } else {
    sidenav.style.display = "flex";
  }
}

function showModal() {
  const modal = document.getElementById("modal");
  const container = document.getElementById("modal-contain");

  if (modal.style.display === "block") {
    modal.style.display = "none";
    container.style.display = "none";
  } else {
    modal.style.display = "block";
    container.style.display = "block";
  }
  closeSideNav();
}

function closeSideNav() {
  const sidenav = document.getElementById("sidenav");
  sidenav.style.display = "none";
}

function closeModal() {
  // const modal = document.getElementById("modal");
  const container = document.getElementById("modal-contain");
  // modal.style.display = "none";
  container.style.display = "none";
}

function closeModalBgClick(event) {
  const modal = document.getElementById("modal");
  const container = document.getElementById("modal-contain");
  // modal.style.display = "none";
  // container.style.display = "none";


  if ((modal && container) && (!modal.contains(event.target) && event.target !== modal) && (container.contains(event.target) && event.target === container)) {
    // alert(`Clicked outside of Modal ${event}`);
    modal.style.display = "none";
    container.style.display = "none";
  } else {
    // alert(`Clicked inside of Modal ${event}`);
  }


}


function sendPdf() {

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const resumeLength = document.getElementById('pdf-length').value;
  const transcript = document.querySelector('input[name="transcript"]:checked')?.value;
  const formData = { name, email, resumeLength, transcript };
 
  alert('Pdf sent with data: ' + JSON.stringify(formData));

  closeModal();
}
window.addEventListener("DOMContentLoaded", updateSkillList);
window.addEventListener("DOMContentLoaded", updateProfiles);
