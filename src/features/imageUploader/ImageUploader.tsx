import { useRef } from "react";

import DropImageZone from "@/components/DropImageZone";
import ErrorMessage from "@/components/ErrorMessage";
import LoaderOverlay from "@/components/LoaderOverlay";
import UploadedImage from "@/components/UploadedImage";
import { useFileUpload } from "@/hooks/useFileUpload";
import useImageUploader from "@/hooks/useImageUploader";

const ImageUploader: React.FC = () => {
  const { image, onDropFile, loading, error, showDropZone } = useImageUploader();
  const { handleFileUpload, validationError } = useFileUpload(1);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold whitespace-nowrap">面接日程画像をここに貼って！</h1>
      <div
        className="w-96 h-96"
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
          <div className="relative w-full h-full">
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (file && handleFileUpload(file)) {
            onDropFile(file);
          }
        }}
      />
      {error && <ErrorMessage message={error} />}
      {validationError && <ErrorMessage message={validationError} />}
    </div>
  );
};

export default ImageUploader;
