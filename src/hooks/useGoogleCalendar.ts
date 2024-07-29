import formatStartDate from "src/utils/formatStartDate";

const useGoogleCalendar = () => {
  const createEvent = (eventData: any) => {
    const { date, start_time, required_time, title, client } = eventData;

    console.log(date);
    console.log(start_time);

    if (!date) {
      console.error("Date is required to create an event.");
      return;
    }

    // 開始日時のDateオブジェクトを作成
    const startDate = formatStartDate(date, start_time);

    const effectiveRequiredTime = required_time ? parseInt(required_time) : 60;
    const endDate = new Date(
      new Date(`${date} ${start_time}`).getTime() + effectiveRequiredTime * 60000,
    );
    const endDateTime = formatStartDate(date, endDate.toTimeString().slice(0, 5));
    console.log(endDateTime);

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
