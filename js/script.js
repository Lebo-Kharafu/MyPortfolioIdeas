
function updateSkillList() {
    // Fetch the JSON data (assuming the file is named 'skills.json')
    fetch('/json/skills.json')
        .then(response => response.json()) // Parse the JSON data
        .then(data => {
            const skillList = document.getElementById('skillList'); // Get the skill list container
            skillList.innerHTML = ''; // Clear the current content of the skill list

            // Loop through each skill in the JSON data
            for (let skillKey in data) {
                if (data.hasOwnProperty(skillKey)) {  // Ensure it's a direct property
                    const skill = data[skillKey];  // Get the skill object

                    // Create a new section element
                    const skillSection = document.createElement('section');
                    skillSection.classList.add('skill-pair');


                    // Create the img element for the skill icon
                    const skillImage = document.createElement('img');
                    skillImage.src = skill.src;
                    skillImage.alt = skill.name + " Icon";
                    skillImage.classList.add('skill-icon');
                    //skillImage.width = '30em';
                    //skillImage.height = 'auto';

                    // Create the progress element for the skill level
                    const skillProgress = document.createElement('progress');
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
        .catch(error => console.error('Error loading skills.json:', error));
}
window.addEventListener('DOMContentLoaded', updateSkillList);
