document.getElementById('musicForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    instrument: document.getElementById('instrument').value
  };

  fetch('https://script.google.com/macros/s/AKfycby-aHM32MB9MnZPpNO4ziSL3Il1xutDUH6MlUqvvCXuWZOEG9lxW6K9K966S9bQrW94Qg/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  document.getElementById('success').textContent = "✅ Submitted successfully!";
  document.getElementById('musicForm').reset();
});
