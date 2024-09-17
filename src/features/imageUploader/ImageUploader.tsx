import { useRef } from "react";

import DropImageZone from "@/components/DropImageZone";
import ErrorMessage from "@/components/ErrorMessage";
import LoaderOverlay from "@/components/LoaderOverlay";
import UploadedImage from "@/components/UploadedImage";
import useImageUploader from "@/hooks/useImageUploader";

const ImageUploader: React.FC = () => {
  const { image, onDropFile, loading, error, showDropZone } = useImageUploader();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <h1 className="whitespace-nowrap text-2xl font-bold">面接日程画像をここに貼って！</h1>
      <div
        className="h-96 w-96"
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleClick();
          }
        }}
      >
        {showDropZone ? (
          <DropImageZone onDropFile={onDropFile} />
        ) : (
          <div className="relative h-full w-full">
            {image && <UploadedImage image={image} />}
            {loading && <LoaderOverlay />}
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        accept="image/*"
        type="file"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            onDropFile(file);
          }
        }}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default ImageUploader;
