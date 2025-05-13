function getTodayFormatted() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 1を加算し、2桁に
  const day = String(today.getDate()).padStart(2, '0'); // 2桁に
  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);
}

// 関数呼び出し
getTodayFormatted(); // 出力例: 2025-05-13