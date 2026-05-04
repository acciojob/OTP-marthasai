const codes = document.querySelectorAll(".code");

// focus first input
codes[0].focus();

codes.forEach((code, index) => {

  code.addEventListener("keydown", (e) => {

    // ✅ numbers
    if (e.key >= "0" && e.key <= "9") {
      code.value = "";

      setTimeout(() => {
        if (index < codes.length - 1) {
          codes[index + 1].focus();
        }
      }, 10);
    }

    // ✅ backspace
    else if (e.key === "Backspace") {
      if (code.value === "" && index > 0) {
        codes[index - 1].focus();
      }
    }
  });

});