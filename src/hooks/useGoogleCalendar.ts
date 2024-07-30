import formatEndDate from "@/utils/FormatEndDate";
import formatStartDate from "@/utils/FormatStartDate";

const useGoogleCalendar = () => {
  const createEvent = (eventData: any) => {
    const { date, start_time, required_time, title, client } = eventData;

    if (!date) {
      console.error("Date is required to create an event.");
      return;
    }

    // 開始日時のDateオブジェクトを作成
    const startDate = formatStartDate(date, start_time);
    const endDateTime = formatEndDate(date, start_time, required_time);
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
