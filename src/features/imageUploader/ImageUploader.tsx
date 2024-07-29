import DropImageZone from "@/components/DropImageZone";
import ErrorMessage from "@/components/ErrorMessage";
import LoaderOverlay from "@/components/LoaderOverlay";
import UploadedImage from "@/components/UploadedImage";
import useImageUploader from "@/hooks/useImageUploader";

const ImageUploader: React.FC = () => {
  const { image, onDropFile, loading, error, showDropZone } = useImageUploader();

  return (
    <div>
      <h1 className="text-2xl font-bold whitespace-nowrap">Chrome Extension Template</h1>
      <div className="w-96 h-96">
        {showDropZone ? (
          <DropImageZone onDropFile={onDropFile}>
            <div className="flex justify-center items-center w-full h-full bg-gray-100">
              <p>Drop image here</p>
            </div>
          </DropImageZone>
        ) : (
          <div className="relative w-full h-full">
            {image && <UploadedImage image={image} />}
            {loading && <LoaderOverlay />}
          </div>
        )}
      </div>
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default ImageUploader;
