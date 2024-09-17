import { useEffect,useState } from "react";

import useGoogleCalendar from "@/hooks/useGoogleCalendar";
import useImageToGPT from "@/hooks/useImageToGpt";
import formatResponse from "@/utils/FormatResponse";

const useImageUploader = () => {
  const [image, setImage] = useState<string | null>(null);
  const [showDropZone, setShowDropZone] = useState(true);
  const { sendImageToGPT, response, loading, error } = useImageToGPT();
  const { createEvent } = useGoogleCalendar();

  const onDropFile = (file: File) => {
    if (file.type.substring(0, 5) !== "image") {
      alert("画像ファイルでないものはアップロードできません！");
    } else {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const imageSrc: string = fileReader.result as string;
        setImage(imageSrc);
        setShowDropZone(false);
        sendImageToGPT(imageSrc);
      };
      fileReader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (response) {
      createEvent(formatResponse(response));
    }
    if (!loading && !image) {
      setShowDropZone(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return { image, onDropFile, loading, error, showDropZone };
};

export default useImageUploader;
