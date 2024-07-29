import DropImageZone from "@/components/DropImageZone";
import ErrorMessage from "@/components/ErrorMessage";
import LoaderOverlay from "@/components/LoaderOverlay";
import UploadedImage from "@/components/UploadedImage";
import useImageUploader from "@/hooks/useImageUploader";

const ImageUploader: React.FC = () => {
  const { image, onDropFile, loading, error, showDropZone } = useImageUploader();

  return (
    <div>
      <h1 className="text-2xl font-bold whitespace-nowrap">面接日程画像をここに貼って！</h1>
      <div className="w-96 h-96">
        {showDropZone ? (
          <DropImageZone onDropFile={onDropFile}/>
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
