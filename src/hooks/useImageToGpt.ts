import { useState } from "react";

const useImageToGPT = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<any>(null);

  const sendImageToGPT = async (base64Image: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:3000/api/imageToGPT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + process.env.NEXT_PUBLIC_AUTH_TOKEN,
        },
        body: JSON.stringify({ base64Image }),
      });
      if (!res.ok) {
        throw new Error("APIリクエストに失敗しました");
      }
      const data = await res.json();
      setResponse(data.choices[0].message.content);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendImageToGPT, response, loading, error };
};

export default useImageToGPT;
