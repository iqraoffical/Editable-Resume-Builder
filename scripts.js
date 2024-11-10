// Get form and display area refrences
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var display = document.getElementById("resume-display");
    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); //prevent page reload
        // Collecting data from form fields
        var name = document.getElementById("Name:").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var website = document.getElementById("website")
            .value;
        var education = [
            document.getElementById("education1").value,
            document.getElementById("education2").value,
            document.getElementById("education3").value,
            document.getElementById("education4").value,
        ];
        var experience = [
            document.getElementById("experience1").value,
            document.getElementById("experience2").value,
            document.getElementById("experience3").value,
            document.getElementById("experience4").value,
        ];
        var skills = [
            document.getElementById("skill1").value,
            document.getElementById("skill2").value,
            document.getElementById("skill3").value,
            document.getElementById("skill4").value,
        ];
        // Create editable resume
        display.innerHTML = "\n      <h2><b>Editable Resume<b></h2>\n      <h3>Personal Information</h3>\n      <p><strong>Name:<b><span id=\"display-name\"  contenteditable=\"true\"></strong> ".concat(name, "<span/></p>\n      <p><strong>Email:<b><span id=\"display-email\" contenteditable=\"true\"></strong> ").concat(email, "<span/></p>\n      <p><strong>Phone:<b><span id=\"display-phone\" contenteditable=\"true\"></strong> ").concat(phone, "<span/></p>\n      <p><strong>Website:<b><span id=\"display-website\" contenteditable=\"true\"></strong> ").concat(website, "<span/></p>\n      <h3>Education</h3>\n      <ul>\n        ").concat(education
            .filter(function (item) { return item; })
            .map(function (item) { return "<li>".concat(item, "</li>"); })
            .join(""), "\n      </ul>\n\n      <h3>Work Experience</h3>\n      <ul>\n        ").concat(experience
            .filter(function (item) { return item; })
            .map(function (item) { return "<li>".concat(item, "</li>"); })
            .join(""), "\n      </ul>\n\n      <h3>Skills</h3>\n      <ul>\n        ").concat(skills
            .filter(function (item) { return item; })
            .map(function (item) { return "<li>".concat(item, "</li>"); })
            .join(""), "\n      </ul>\n    ");
        // update  display content when input field are edited
        var updateField = function (fieldId, displayId) {
            var displayField = document.getElementById(displayId);
            displayField.addEventListener("input", function () {
                document.getElementById(fieldId).value = display.innerText;
            });
        };
        // Use listeners to update input fields
        updateField("name", "display-name");
        updateField("email", "display-email");
        updateField("phone", "display-phone");
        updateField("website", "display-website");
        // resume display and content editable area
        display.setAttribute("contenteditable", "true");
        // Added focus on the display area for immediate editing
        display.focus();
    });
});
// Get form and display area refrences
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("resume-form") as HTMLFormElement;
//   const display = document.getElementById("resume-display") as HTMLDivElement;
//   // Handle form submission
//   form.addEventListener("submit", (event: Event) => {
//     event.preventDefault(); //prevent page reload
//     // Collecting data from form fields
//     const name = (document.getElementById("Name:") as HTMLInputElement).value;
//     const email = (document.getElementById("email") as HTMLInputElement).value;
//     const phone = (document.getElementById("phone") as HTMLInputElement).value;
//     const website = (document.getElementById("website") as HTMLInputElement)
//       .value;
//     const education = [
//       (document.getElementById("education1") as HTMLInputElement).value,
//       (document.getElementById("education2") as HTMLInputElement).value,
//       (document.getElementById("education3") as HTMLInputElement).value,
//       (document.getElementById("education4") as HTMLInputElement).value,
//     ];
//     const experience = [
//       (document.getElementById("experience1") as HTMLInputElement).value,
//       (document.getElementById("experience2") as HTMLInputElement).value,
//       (document.getElementById("experience3") as HTMLInputElement).value,
//       (document.getElementById("experience4") as HTMLInputElement).value,
//     ];
//     const skills = [
//       (document.getElementById("skill1") as HTMLInputElement).value,
//       (document.getElementById("skill2") as HTMLInputElement).value,
//       (document.getElementById("skill3") as HTMLInputElement).value,
//       (document.getElementById("skill4") as HTMLInputElement).value,
//     ];
//     // Displaying data
//     display.innerHTML = `
//       <h2>Editable Resume</h2>
//       <h3>Personal Information</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone:</strong> ${phone}</p>
//       <p><strong>Website:</strong> ${website}</p>
//       <h3>Education</h3>
//       <ul>
//         ${education
//           .filter((item) => item)
//           .map((item) => `<li>${item}</li>`)
//           .join("")}
//       </ul>
//       <h3>Work Experience</h3>
//       <ul>
//         ${experience
//           .filter((item) => item)
//           .map((item) => `<li>${item}</li>`)
//           .join("")}
//       </ul>
//       <h3>Skills</h3>
//       <ul>
//         ${skills
//           .filter((item) => item)
//           .map((item) => `<li>${item}</li>`)
//           .join("")}
//       </ul>
//     `;
//     // resume display and content editable area
//     display.setAttribute("contenteditable", "true");
//     // Added focus on the display area for immediate editing
//     display.focus();
//   });
// });
