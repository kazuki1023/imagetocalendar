import { useState } from "react";

const useImageToGPT = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<any>(null);

  const sendImageToGPT = async (base64Image: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://api.openai.com/v1/images:analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer YOUR_API_KEY`,
        },
        body: JSON.stringify({
          image: base64Image,
        }),
      });

      if (!res.ok) {
        throw new Error("APIリクエストに失敗しました");
      }

      const data = await res.json();
      setResponse(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendImageToGPT, response, loading, error };
};

export default useImageToGPT;
