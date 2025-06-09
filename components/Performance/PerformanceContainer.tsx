import Image from "next/image";

const PerformanceContainer = ({
  image,
  name,
}: {
  image: string;
  name: string;
}) => {
  return (
    <article className=" group relative">
      <div className="relative h-[300px] rounded-md">
        <Image
          src={image}
          sizes="(max-width:768px) 100vw,50vw"

          alt={name}
          fill
          className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex items-center justify-between mt-3">
        <h3 className="text-sm text-blue-800 font-semibold ">{name}</h3>
      </div>

      <div className="absolute top-1 right-2 bg-red-700">
        <p className="text-white">ผลงานของเรา</p>
      </div>
    </article>
  );
};
export default PerformanceContainer;
