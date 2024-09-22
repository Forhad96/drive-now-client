import { FC } from "react";

type CarImageProps = {
  mainImage: string;
  thumbnails: string[];
  onThumbnailClick: (src: string) => void;
};
const CarImage: FC<CarImageProps> = ({
  mainImage,
  thumbnails,
  onThumbnailClick,
}) => {
  return (
    <div className="w-full md:w-1/2 px-4 mb-8">
      <img
        src={mainImage}
        alt="Product"
        className="w-full max-h-96 object-cover rounded-lg shadow-md mb-4"
        id="mainImage"
      />
      <div className="flex gap-4 py-4 justify-center overflow-x-auto">
        {thumbnails?.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index + 1}`}
            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
            onClick={() => onThumbnailClick(src)}
          />
        ))}
      </div>
    </div>
  );
};
export default CarImage