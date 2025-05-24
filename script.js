function sendCommand(pin, state) {
    const message = `Sent: ${pin} - ${state}`;
    appendOutput(message);
  
    // Simulate sending to server
    console.log(message);
  }
  
  function updatePWM(value) {
    document.getElementById('pwmValue').innerText = value;
    const message = `PWM set to ${value}`;
    appendOutput(message);
  
    // Simulate sending PWM value
    console.log(message);
  }
  
  function appendOutput(text) {
    const output = document.getElementById('output');
    output.innerHTML += text + '<br>';
    output.scrollTop = output.scrollHeight;
  }
  