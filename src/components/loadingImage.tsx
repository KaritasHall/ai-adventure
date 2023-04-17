import { loadingImage, loadingImageFadeout } from "@/styles/game.css";
import Image from "next/image";

type LoadingImageProps = {
  fadeout: boolean;
};

export const LoadingImage = ({ fadeout }: LoadingImageProps) => {
  console.log("fadeout:", fadeout);
  return (
    <div className={fadeout ? loadingImageFadeout : loadingImage}>
      <Image
        src="/crystal-ball.png"
        alt="crystal ball"
        width={200}
        height={200}
        priority={true}
      />
    </div>
  );
};
