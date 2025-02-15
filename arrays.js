const steps = ["one", "two", "three"];

function listTemplate(step) {
  // Use a template literal to wrap the step in <li> tags.
  return `<li>${step}</li>`;
}

// Map each step to an HTML list item, then join the array into a single string.
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');
