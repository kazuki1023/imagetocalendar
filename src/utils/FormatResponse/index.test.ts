import formatResponse from "./index";

describe("JSONレスポンスを整形してパースする関数", () => {
  test("json文字列の前後に不要な文字が入っている場合", () => {
    const response = `
\`\`\`json
{"date": "2024-07-15", "start_time": "15:00", "end_time": "16:00", "client": "DeNA", "title": "最終面接"}
\`\`\`
`;
    const result = formatResponse(response);
    expect(result).toEqual({
      date: "2024-07-15",
      start_time: "15:00",
      end_time: "16:00",
      client: "DeNA",
      title: "最終面接",
    });
  });
  test("json文字列の場合", () => {
    const response = `
{"date": "2024-07-15", "start_time": "15:00", "end_time": "16:00", "client": "DeNA", "title": "最終面接"}
`;
    const result = formatResponse(response);
    expect(result).toEqual({
      date: "2024-07-15",
      start_time: "15:00",
      end_time: "16:00",
      client: "DeNA",
      title: "最終面接",
    });
  });
});
