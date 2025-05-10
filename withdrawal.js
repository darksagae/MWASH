document.addEventListener('DOMContentLoaded', () => {
    const addressInput = document.getElementById('address');
    const amountInput = document.getElementById('amount');
    const withdrawBtn = document.getElementById('withdraw-btn');
    const addressError = document.getElementById('address-error');
    const minAmount = document.getElementById('min-amount');

    // Simulate QR scan
    function simulateScan() {
        addressInput.value = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'; // Example address
        checkFormValidity();
    }

    // Long press to paste simulation (trigger on click for simplicity)
    function pasteText() {
        navigator.clipboard.readText().then(text => {
            addressInput.value = text;
            checkFormValidity();
        }).catch(err => console.error('Failed to read clipboard', err));
    }

    // Set max amount (simulated as 0 for now)
    function setMaxAmount() {
        amountInput.value = 0;
        checkFormValidity();
    }

    // Check form validity and enable/disable withdraw button
    function checkFormValidity() {
        const isAddressValid = addressInput.value.trim().length > 0;
        const isAmountValid = amountInput.value >= 0.00011;
        withdrawBtn.disabled = !(isAddressValid && isAmountValid);
        addressError.style.display = isAddressValid ? 'none' : 'block';
        minAmount.style.display = amountInput.value ? 'none' : 'inline';
    }

    // Event listeners
    addressInput.addEventListener('input', checkFormValidity);
    amountInput.addEventListener('input', checkFormValidity);
    addressInput.addEventListener('focus', () => addressError.style.display = 'none');
    amountInput.addEventListener('focus', () => minAmount.style.display = 'none');

    // Form submission with pop-up
    document.getElementById('withdrawal-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Dear pioneer\n Our recent system upgrade is now complete and we're working swiftly to restore full service.\n Thank you fõr understanding and patience during this brief transition.');
    });
});