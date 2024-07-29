const useGoogleCalendar = () => {
  const createEvent = (eventData: any) => {
    const scheduleDate = JSON.parse(eventData);
    const { date, start_time, required_time, title, client } = scheduleDate;

    console.log(date);
    console.log(start_time);

    if (!date) {
      console.error("Date is required to create an event.");
      return;
    }

    // 開始日時のDateオブジェクトを作成
    const startDate = new Date(`${date}T${start_time}`);
    const startDateTime = startDate.toISOString().replace(/-|:|\..+/g, "");

    const effectiveRequiredTime = required_time ? parseInt(required_time) : 60;
    const endDate = new Date(
      new Date(`${date} ${start_time}`).getTime() + effectiveRequiredTime * 60000,
    );
    const endDateTime = endDate.toISOString().replace(/-|:|\..+/g, "");

    const calendarUrl = new URL("https://calendar.google.com/calendar/render");
    calendarUrl.searchParams.set("action", "TEMPLATE");
    calendarUrl.searchParams.set("text", title + "" + client);
    calendarUrl.searchParams.set("dates", `${startDateTime}/${endDateTime}`);
    calendarUrl.searchParams.set("trp", "false");

    window.open(calendarUrl.toString(), "_blank");
  };

  return { createEvent };
};

export default useGoogleCalendar;
