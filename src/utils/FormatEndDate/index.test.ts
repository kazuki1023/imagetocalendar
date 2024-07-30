import formatEndDate from "./index";

describe("開始日、終了時間を受け取り、終了時間をformatする関数", () => {
  test("開始日、開始時間、所要時間を受け取り、終了日時を計算する", () => {
    const date = "2024-07-12";
    const end_time = "16:00";
    const result = formatEndDate(date, end_time);
    expect(result).toBe("20240712T16000000");
  });
  test("開始日の形式がYYYYMMDDの時", () => {
    const date = "20240712";
    const end_time = "16:00";
    const result = formatEndDate(date, end_time);
    expect(result).toBe("20240712T16000000");
  });
  test("開始日の形式がYYYY/MM/DDの時", () => {
    const date = "2024/07/12";
    const end_time = "16:00";
    const result = formatEndDate(date, end_time);
    expect(result).toBe("20240712T16000000");
  });
});
