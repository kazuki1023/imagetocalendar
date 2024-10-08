import formatEndDate from "@/utils/FormatEndDate";
import formatStartDate from "@/utils/FormatStartDate";

const useGoogleCalendar = () => {
  const createEvent = (eventData: any) => {
    const { date, start_time, end_time, title, client } = eventData;

    if (!date) {
      alert("日付が取得できませんでした、画像を確認してください");
      return;
    }

    // 開始日時のDateオブジェクトを作成
    const startDate = formatStartDate(date, start_time);
    const endDateTime = formatEndDate(date, end_time);
    const calendarUrl = new URL("https://calendar.google.com/calendar/render");
    calendarUrl.searchParams.set("action", "TEMPLATE");
    calendarUrl.searchParams.set("text", title + "" + client);
    calendarUrl.searchParams.set("dates", `${startDate}/${endDateTime}`);
    calendarUrl.searchParams.set("trp", "false");

    window.open(calendarUrl.toString(), "_blank");
  };

  return { createEvent };
};

export default useGoogleCalendar;
