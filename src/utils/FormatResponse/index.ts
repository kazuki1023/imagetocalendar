/**
 * JSONレスポンスを整形してパースする関数
 * @param {string} response - 整形前のJSONレスポンス文字列
 * @returns {object} - パース後のJSONオブジェクト
 * @throws {Error} - JSONのパースに失敗した場合に投げられるエラー
 */
const formatResponse = (response: string) => {
  const jsonResponse = response.replace(/```json|```/g, "").trim();
  try {
    return JSON.parse(jsonResponse);
  } catch (error) {
    throw new Error("Failed to parse JSON");
  }
};

export default formatResponse;
