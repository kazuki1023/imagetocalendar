import type { CustomNextPage } from "next";
import { useState } from "react";
import DropImageZone from "src/components/DropImageZone";
import { Layout } from "src/layout";

const IndexPage: CustomNextPage = () => {

  const [image, setImage] = useState<string | null>(null);
  const onDropFile = (file: File) => {
    if (file.type.substring(0, 5) !== "image") {
      alert("画像ファイルでないものはアップロードできません！");
    } else {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const imageSrc: string = fileReader.result as string;
        setImage(imageSrc);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold whitespace-nowrap">Chrome Extension Template</h1>
      <div className="w-96 h-96">
        {
          image ? (
            <div className="overflow-hidden w-full h-full">
              <img src={image} alt="uploaded" className="object-cover hover:object-scale-down w-full h-full " />
            </div>
          ) : (
            <DropImageZone onDropFile={onDropFile}>
              <div className="flex justify-center items-center w-full h-full bg-gray-100">
                <p>Drop image here</p>
              </div >
            </DropImageZone >
          )
        }
      </div>
    </div >
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
