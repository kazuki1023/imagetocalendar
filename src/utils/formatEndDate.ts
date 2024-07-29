/**
 * 開始日、開始時間、所要時間を受け取り、終了日時を計算する関数
 * @param date - 開始日 (例: "2024-07-12")
 * @param startTime - 開始時間 (例: "15:00")
 * @param requiredTime - 所要時間 (分) (例: 60)
 * @returns 終了日時 (形式: 'YYYYMMDDTHHMM0000')
 */
const formatEndDate = (date: string, startTime: string, requiredTime: string): string => {
  // 日付と時間を結合してDateオブジェクトを作成
  const dateTimeString = `${date}T${startTime}:00`;
  const startDate = new Date(dateTimeString);
  console.log(startDate);
  console.log(startDate.getTime());

  // 所要時間をミリ秒に変換して追加
  const endDate = new Date(startDate.getTime() + parseInt(requiredTime) * 60000);

  // 終了日時をフォーマット
  const year = endDate.getFullYear();
  const month = String(endDate.getMonth() + 1).padStart(2, "0");
  const day = String(endDate.getDate()).padStart(2, "0");
  const hours = String(endDate.getHours()).padStart(2, "0");
  const minutes = String(endDate.getMinutes()).padStart(2, "0");

  // 'YYYYMMDDTHHMM0000'形式で出力
  return `${year}${month}${day}T${hours}${minutes}0000`;
};

export default formatEndDate;
