window.addEventListener("load", function() {
    
    var selectedService = "";
    var calculatedTotal = 0;

    var serviceRadios = document.querySelectorAll("input[name='service']");
    for (var i = 0; i < serviceRadios.length; i++) {
        serviceRadios[i].addEventListener("change", function(event) {
            if (event.target.checked) {
                var chosenValue = event.target.value;
                selectedService = chosenValue;

                if (chosenValue == "Gel Overlay") {
                    calculatedTotal = 100;
                }
                if (chosenValue == "Polygel Extensions") {
                    calculatedTotal = 150;
                }
                if (chosenValue == "Nail Art Design") {
                    calculatedTotal = 10;
                }
                if (chosenValue == "French Tips") {
                    calculatedTotal = 130;
                }
                if (chosenValue == "Pedicure") {
                    calculatedTotal = 80;
                }
                if (chosenValue == "Soak-Off") {
                    calculatedTotal = 80;
                }

                document.getElementById("selected-service-text").textContent = selectedService;
                document.getElementById("final-total-output").textContent = "P" + calculatedTotal;
            }
        });
    }

    var calendarDays = document.querySelectorAll("#calendar-table tbody td");
    for (var i = 0; i < calendarDays.length; i++) {
        if (calendarDays[i].textContent.trim() != "") {
            calendarDays[i].addEventListener("click", function(event) {
                for (var j = 0; j < calendarDays.length; j++) {
                    calendarDays[j].className = "";
                }
                event.target.className = "active-day";
                document.getElementById("selected-date-text").textContent = event.target.textContent.trim() + " May 2026";
            });
        }
    }

    var timeButtons = document.querySelectorAll(".slot-btn");
    for (var i = 0; i < timeButtons.length; i++) {
        timeButtons[i].addEventListener("click", function(event) {
            for (var j = 0; j < timeButtons.length; j++) {
                timeButtons[j].classList.remove("active-slot");
            }
            event.target.classList.add("active-slot");
            document.getElementById("selected-time-text").textContent = event.target.textContent.trim();
        });
    }

    var masterForm = document.getElementById("single-page-booking-form");
    if (masterForm) {
        masterForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            var fileCheck = document.getElementById("payment-file-input").files;
            if (fileCheck.length == 0) {
                alert("Please attach your transaction proof file first.");
                return;
            }
            
            alert("Booking submitted successfully! Renee will contact you soon.");
        });
    }
});