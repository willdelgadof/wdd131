document.addEventListener("DOMContentLoaded", function () {
    let participantCount = 1;
    const addButton = document.getElementById("add");
    const participantSection = document.querySelector(".participants");
    const submitButton = document.getElementById("submitButton");
    const summarySection = document.getElementById("summary");
    const form = document.querySelector("form");

    addButton.addEventListener("click", function () { 
        participantCount++;
        const newParticipant = document.createElement("section");
        newParticipant.classList.add("participant");
        newParticipant.innerHTML = `
            <p>Participant ${participantCount}</p>
            <div class="item">
                <label for="fname${participantCount}"> First Name<span>*</span></label>
                <input id="fname${participantCount}" type="text" name="fname${participantCount}" required />
            </div>
            <div class="item activities">
                <label for="activity${participantCount}">Activity #<span>*</span></label>
                <input id="activity${participantCount}" type="text" name="activity${participantCount}" />
            </div>
            <div class="item">
                <label for="fee${participantCount}">Fee ($)<span>*</span></label>
                <input id="fee${participantCount}" type="number" name="fee${participantCount}" class="fee-input" />
            </div>
            <div class="item">
                <label for="date${participantCount}">Desired Date <span>*</span></label>
                <input id="date${participantCount}" type="date" name="date${participantCount}" />
            </div>
            <div class="item">
                <p>Grade</p>
                <select name="grade${participantCount}">
                    <option value="" disabled selected>Select Grade</option>
                    ${[...Array(12).keys()].map(i => `<option value="${i + 1}">${i + 1}th</option>`).join('')}
                </select>
            </div>
        `;
        participantSection.insertBefore(newParticipant, addButton);
    });

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        let totalFee = 0;
        let valid = true;
        let adultName = document.getElementById("adultName").value;  // Get adult name

        document.querySelectorAll(".fee-input").forEach(input => {
            const fee = parseFloat(input.value);
            if (isNaN(fee) || fee < 0) {
                alert("Please enter a valid fee amount (non-negative).");
                valid = false;
            } else {
                totalFee += fee;
            }
        });

        if (valid) {
            form.style.display = "none";  // Hide the form
            summarySection.innerHTML = `
                <h2>Registration Summary</h2>
                <p>Thank you, <strong>${adultName}</strong>, for registering <strong>${participantCount}</strong> participants.</p>
                <p>You owe <strong>$${totalFee.toFixed(2)}</strong> in fees.</p>
            `;
        }
    });
});
