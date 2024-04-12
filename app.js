let kabisa = new Set();
const button = document.querySelector(".button .img");
const dayInput = document.querySelector('input[placeholder="DD"]');
const monthInput = document.querySelector('input[placeholder="MM"]');
const yearInput = document.querySelector('input[placeholder="YY"]');
const resultYears = document.querySelector(".result__year p:nth-child(1)");
const dayOutput = document.querySelector(".outputD");
const monthOutput = document.querySelector(".outputM");
const yearOutput = document.querySelector(".outputY");
const resultMonths = document.querySelector(".result__year p:nth-child(3)");
const resultDays = document.querySelector(".result__year p:nth-child(5)");
const currentDate = new Date();

button.addEventListener("click", function() {
  // Foydalanuvchi tomonidan kiritilgan sanalar
  const day = parseInt(dayInput.value);
// if(dayInput.value != 31)
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  // Kiritilgan sana
  const selectedDate = new Date(year, month - 1, day);

  // Hozirgi va kiritilgan sanalar orasidagi farq
  const yearDifference = currentDate.getFullYear() - selectedDate.getFullYear();
  const monthDifference = Math.abs(currentDate.getMonth() - selectedDate.getMonth());
  const dayDifference = Math.abs(currentDate.getDate() - selectedDate.getDate());

  // Natijalarni ko'rsatish
  yearOutput.textContent = yearDifference;
  monthOutput.textContent = monthDifference;
  dayOutput.textContent = dayDifference;

  // Kabisa yillar
  kabisaYili(selectedDate.getFullYear(), currentDate.getFullYear());
});

// Kabisa yili tekshirish
function kabisaYili(startYear, endYear) {
  for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      kabisa.add(year);
    }
  }
  console.log(kabisa);
}
 