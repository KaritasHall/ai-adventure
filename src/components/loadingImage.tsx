import Image from "next/image";

export const LoadingImage = () => {
  return (
    <div className="loading-image">
      <Image
        src="/crystal-ball.png"
        alt="crystal ball"
        width={200}
        height={200}
      />
    </div>
  );
};
