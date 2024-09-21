/**
 * JSONレスポンスを整形してパースする関数
 * @param {string} response - 整形前のJSONレスポンス文字列
 * @returns {Record<string, unknown> | string} - パース後のJSONオブジェクト、もしくはそのままの文字列
 * @throws {Error} - JSONのパースに失敗した場合に投げられるエラー
 */
const formatResponse = (response: string): Record<string, unknown> | string => {
  const jsonResponse = response.replace(/```json|```/g, "").trim();

  try {
    // JSON形式かどうかを確認するためのチェック
    if (jsonResponse.startsWith("{") || jsonResponse.startsWith("[")) {
      return JSON.parse(jsonResponse);
    } else {
      // JSON形式でない場合は、そのまま文字列として返す
      return jsonResponse;
    }
  } catch (error) {
    console.error("JSONのパースに失敗しました:", error);
    throw new Error("Failed to parse JSON");
  }
};

export default formatResponse;
