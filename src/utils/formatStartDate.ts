/**
 * 日付と時間を指定された形式に変換する関数
 * @param {string} date - 'YYYY-MM-DD'形式の日付
 * @param {string} startTime - 'HH:MM'形式の時間
 * @returns {string} - 変換後の形式 'YYYYMMDDTHHMM0000'
 */
const formatStartDate = (date: string, startTime: string) => {
  const formattedDate = date.replace(/-/g, "");

  const timeParts = startTime.split(":");
  const formattedTime = timeParts.join("") + "0000";

  return formattedDate + "T" + formattedTime;
};

export default formatStartDate;
