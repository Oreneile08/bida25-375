document.addEventListener('DOMContentLoaded', () => {
    
    // --- Step 1 & 4 Interactivity: Service Selection ---
    const serviceOptions = document.querySelectorAll('.service-option input[type="radio"]');
    const summaryService = document.querySelector('.summary-list li:nth-child(1) strong');

    serviceOptions.forEach(option => {
        option.addEventListener('change', (e) => {
            if (e.target.checked) {
                // Update Step 4 summary layout contextively
                summaryService.textContent = e.target.value;
            }
        });
    });

    // --- Step 2 Interactivity: Time Slot Toggles ---
    const slotButtons = document.querySelectorAll('.slot-btn');
    const summaryTime = document.querySelector('.summary-list li:nth-child(2) strong');

    slotButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active style state from other choices
            slotButtons.forEach(b => b.classList.remove('active-slot'));
            // Set current choice
            btn.classList.add('active-slot');
            
            // Dynamic sync values to Step 4 layout
            summaryTime.textContent = `12 Dec 2024, ${btn.textContent}`;
        });
    });

    // --- Step 3 Interactivity: Characters limit handler ---
    const textarea = document.querySelector('.form-group textarea');
    const charCountText = document.querySelector('.char-count');

    textarea.addEventListener('input', () => {
        const remaining = 200 - textarea.value.length;
        charCountText.textContent = `Maximum ${remaining} characters remaining`;
    });

    // --- Step 4 Interactivity: File Image Upload Visual Drop/Click zone ---
    const uploadZone = document.getElementById('upload-zone');
    const fileInput = document.getElementById('file-input');

    uploadZone.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            const fileName = fileInput.files[0].name;
            uploadZone.querySelector('p').innerHTML = `✅ Selected:<br><strong>${fileName}</strong>`;
        }
    });

    // --- Form processing handler simulation ---
    const confirmBtn = document.querySelector('.confirm-btn');
    confirmBtn.addEventListener('click', () => {
        const termsChecked = document.getElementById('terms').checked;
        if(!termsChecked) {
            alert('Please read and agree to the booking policies and conditions first.');
            return;
        }
        alert('Processing payment confirmation proof! Your reservation assignment request has been dispatched.');
    });
});
