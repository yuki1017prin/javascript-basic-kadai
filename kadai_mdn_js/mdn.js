function getTodayFormatted() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 0始まりなので+1
  const day = today.getDate();
  const formattedDate = `${year}年${month}月${day}日`;
  console.log(formattedDate);
}

// 関数呼び出し
getTodayFormatted(); // 出力例: 2025年5月13日
