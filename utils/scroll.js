export const scrollToElement = (id) => {
  const target = document.getElementById(id);
  const navbarHeight = document.querySelector('#appbar').offsetHeight; // 獲取 navbar 的高度

  // 計算目標滾動位置，考慮 navbar 的高度
  const offsetPosition = target.offsetTop - (navbarHeight+20);

  // 使用平滑滾動到目標位置
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}