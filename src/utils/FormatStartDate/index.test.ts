import formatStartDate from "./index";

describe("取得した時間と日程から開始時間を作ってくれる", () => {
  test("YYYY-MM-DDの時", () => {
    const date = "2024-07-30";
    const startTime = "12:00";
    const result = formatStartDate(date, startTime);
    expect(result).toBe("20240730T12000000");
  });
  test("YYYYMMDDの時", () => {
    const date = "20240730";
    const startTime = "12:00";
    const result = formatStartDate(date, startTime);
    expect(result).toBe("20240730T12000000");
  });
  test("YYYY/MM/DDの時", () => {
    const date = "2024/07/30";
    const startTime = "12:00";
    const result = formatStartDate(date, startTime);
    expect(result).toBe("20240730T12000000");
  });
  test("日付の形式がおかしい時", () => {
    const date = "24/07/30";
    const startTime = "12:00";
    const result = formatStartDate(date, startTime);
    expect(result).toBe("240730T12000000");
  });
  test("時間の形式がおかしい時", () => {
    const date = "24/07/30";
    const startTime = "14時00分"
    const result = formatStartDate(date, startTime);
    expect(result).toBe("")
  })
});
