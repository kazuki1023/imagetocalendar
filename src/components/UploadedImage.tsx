type UploadedImageProps = {
  image: string;
};

const UploadedImage = ({ image }: UploadedImageProps) => {
  return (
    <div className="overflow-hidden w-full h-full">
      <img src={image} alt="uploaded" className="object-scale-down w-full h-full " />
    </div>
  )
}

export default UploadedImage;
