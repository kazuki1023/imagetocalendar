import type { CustomNextPage } from "next";
import { useEffect, useState } from "react";
import DropImageZone from "src/components/DropImageZone";
import UploadedImage from "src/components/UploadedImage";
import useGoogleCalendar from "src/hooks/useGoogleCalendar";
import useImageToGPT from "src/hooks/useImageToGpt";
import { Layout } from "src/layout";
import formatResponse from "src/utils/formatResponse";

const IndexPage: CustomNextPage = () => {

  const [image, setImage] = useState<string | null>(null);
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
        sendImageToGPT(imageSrc);
      };
      fileReader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (response) {
      createEvent(formatResponse(response));
    }
  }, [response, createEvent]);

  return (
    <div>
      <h1 className="text-2xl font-bold whitespace-nowrap">Chrome Extension Template</h1>
      <div className="w-96 h-96">
        {
          image ? (
            <UploadedImage image={image} />
          ) : (
            <DropImageZone onDropFile={onDropFile}>
              <div className="flex justify-center items-center w-full h-full bg-gray-100">
                <p>Drop image here</p>
              </div >
            </DropImageZone >
          )
        }
      </div>
      {response && <p>{response}</p>}
    </div >
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
