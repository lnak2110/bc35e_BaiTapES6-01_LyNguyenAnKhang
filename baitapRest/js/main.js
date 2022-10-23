const calcAverageGrade = (...grades) => {
  const totalGrades = grades.reduce((total, grade) => total + grade, 0);
  return totalGrades / grades.length;
};

document.querySelector('#btnKhoi1').addEventListener('click', () => {
  const arrInputs = document.querySelectorAll('#inpToan, #inpLy, #inpHoa');
  const arrGrades = [...arrInputs].map((input) => +input.value);
  const averageGrade = calcAverageGrade(...arrGrades);

  averageGrade && (document.querySelector('#tbKhoi1').innerHTML = averageGrade);
});

document.querySelector('#btnKhoi2').addEventListener('click', () => {
  const arrInputs = document.querySelectorAll(
    '#inpVan, #inpSu, #inpDia, #inpEnglish'
  );
  const arrGrades = [...arrInputs].map((input) => +input.value);
  const averageGrade = calcAverageGrade(...arrGrades);

  averageGrade && (document.querySelector('#tbKhoi2').innerHTML = averageGrade);
});
