/**
 * 日付と時間を指定された形式に変換する関数
 * @param {string} date - 'YYYY-MM-DD', 'YYYYMMDD', 'YYYY/MM/DD'形式の日付
 * @param {string} startTime - 'HH:MM'形式の時間
 * @returns {string} - 変換後の形式 'YYYYMMDDTHHMM0000'
 */
const formatStartDate = (date: string, startTime: string) => {
try {
  // 時間の形式を確認
  if (!/^\d{2}:\d{2}$/.test(startTime)) {
    throw new Error(
      "正しい形式で時間を取得できませんでした、もう一度uploadしてみてください。複数回やってだめな場合は連絡してください。",
    );
  }

  // 日付をフォーマットする
  let formattedDate = date;
  if (date.includes("-") || date.includes("/")) {
    formattedDate = date.replace(/[-/]/g, "");
  }

  const timeParts = startTime.split(":");
  const formattedTime = timeParts.join("") + "0000";

  return formattedDate + "T" + formattedTime;
} catch (error: any) {
  // エラーメッセージを表示
  console.error(error.message);
  return "";
}
};

export default formatStartDate;
