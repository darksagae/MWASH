document.querySelector('.eye-icon').addEventListener('click', function() {
    const balance = document.querySelector('.balance p:first-of-type');
    if (balance.style.visibility === 'hidden') {
        balance.style.visibility = 'visible';
    } else {
        balance.style.visibility = 'hidden';
    }
});

// Simulate fetching transaction data (in a real app, this would come from a blockchain API)
const transactions = [
    { network: 'BTC', amount: '0.10944', address: '1GDgPoN8jW...', txid: '222746742222', date: '2024-11-12 06:50:03' },
    { network: 'BTC', amount: '0.0187192', address: '1GDgPoN8jW...', txid: '191796842325', date: '2024-19-12 12:09:00' },
    { network: 'BTC', amount: '0.148936', address: '1GDgPoN8jW...', txid: '101486092608', date: '2024-30-12 20:23:04' }
];

// In a real application, integrate with a blockchain API (e.g., Blockcypher, Blockchain.com)