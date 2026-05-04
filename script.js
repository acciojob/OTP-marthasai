//your JS code here. If required.
const codes = document.querySelectorAll(".code");

// focus first input on load
codes[0].focus();

codes.forEach((code, index) => {

  code.addEventListener("input", (e) => {
    const value = e.target.value;

    // allow only digits
    if (!/^[0-9]$/.test(value)) {
      code.value = "";
      return;
    }

    // move to next input
    if (value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {

    if (e.key === "Backspace") {
      // if current is empty → go back
      if (code.value === "" && index > 0) {
        codes[index - 1].focus();
      } else {
        // clear current field
        code.value = "";
      }
    }
  });
});