function submitName() {
    const enteredName = document.getElementById('nameInput').value;
    const greetingMessage = `Hello, ${enteredName}!`;
    document.getElementById('greetingMessage').innerText = greetingMessage;
  }

export { submitName };