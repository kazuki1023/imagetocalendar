const formatResponse = (response: string) => {
  const jsonResponse = response.replace(/```json|```/g, "").trim();
  try {
    return JSON.parse(jsonResponse);
  } catch (error) {
    throw new Error("Failed to parse JSON");
  }
}

export default formatResponse;
