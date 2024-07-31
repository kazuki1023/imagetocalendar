/**
 * 開始日、終了時間を受け取り、終了日時をformatして返す
 * @param date - 開始日 (例: "2024-07-12")
 * @param end_time - 終了時間 (分) (例: "16:00")
 * @returns 終了日時 (形式: 'YYYYMMDDTHHMM0000')
 */
const formatEndDate = (date: string, end_time: string): string => {
  // 日付をフォーマットする
  let formattedDate = date;
  if (date.includes("-") || date.includes("/")) {
    formattedDate = date.replace(/[-/]/g, "");
  }

  // 終了時間を分割
  const [hour, minute] = end_time.split(":");

  // 終了日時を指定の形式にフォーマット
  const formattedEndDate = `${formattedDate}T${hour}${minute}0000`;

  return formattedEndDate;
};

export default formatEndDate;
