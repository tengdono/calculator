 const display = document.getElementById('display');

    function append(char) {
      display.value += char;
    }

    function clearDisplay() {
      display.value = '';
    }

    function calculate() {
      try {
        // Evaluate only numbers and arithmetic operators
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    }