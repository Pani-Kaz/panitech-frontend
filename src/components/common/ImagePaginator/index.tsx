import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ImagePaginator({ images }: { images: string[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-2 mb-4">
        {images.map((_, index) => (
          <Button
            key={index}
            variant={index === currentImageIndex ? "default" : "outline"}
            className={`w-3 h-3 rounded-full p-0 ${
              index === currentImageIndex ? "bg-blue-500" : "bg-transparent border border-solid border-blue-100"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <Image
        src={images[currentImageIndex]}
        alt={`Imagem ${currentImageIndex + 1}`}
        className="w-full h-auto rounded-3xl shadow-xl"
        width={1000}
        height={1000}
      />
    </div>
  );
}
