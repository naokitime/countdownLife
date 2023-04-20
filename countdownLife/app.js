function calculateTimeRemaining() {
  const birthdate = new Date(document.getElementById('birthdate').value);
  const age = parseInt(document.getElementById('age').value);
  const maxAgeDate = new Date(birthdate);
  maxAgeDate.setFullYear(birthdate.getFullYear() + age);
  let remainingTime = maxAgeDate - new Date();

  const interval = setInterval(() => {
    const result = document.getElementById('result');
    remainingTime -= 1000;

    if (remainingTime < 0) {
      clearInterval(interval);
      result.innerHTML = "あなたはもう生まれていません！";
    } else {
      const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000)
      result.innerHTML = `あなたの人生は残り${remainingDays}日${remainingHours}時間${remainingMinutes}分${remainingSeconds}秒です。`;
    }
  }, 1000);
}