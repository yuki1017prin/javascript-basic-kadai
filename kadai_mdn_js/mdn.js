function getTodayFormatted() {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  console.log(formattedDate);
}

// 関数呼び出し
getTodayFormatted(); // 出力例: 2025-05-13