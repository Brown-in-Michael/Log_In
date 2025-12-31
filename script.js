function togglePassword() {
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}
togglePassword();

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
isLeapYear();

const inputDate = new Date(year, month - 1, day);
const today = new Date();
if (inputDate > today) {
  // invalid
}
  const checkboxes = document.querySelectorAll('#gender input[type="checkbox"]');

  checkboxes.forEach(box => {
    box.addEventListener('change', () => {
      checkboxes.forEach(other => {
        if (other !== box) other.checked = false;
      });
    });
  });