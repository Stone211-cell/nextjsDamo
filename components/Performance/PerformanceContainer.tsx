import Image from "next/image";

const PerformanceContainer = ({
  image,
  name,
  description
}: {
  image: string;
  name: string;
  description?: string;
}) => {
  return (
    <article className=" group relative border-1/4 bg-gray-700/4 p-2 rounded-3xl">
      <div className="relative h-[300px] rounded-md">
        <Image
          src={image}
          sizes="(max-width:768px) 100vw,50vw"

          alt={name}
          fill
          className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col h-[100px]   mt-3">
        <h3 className="text-lg text-blue-800 font-semibold ">{name}</h3>
        <p className="text-sm text-gray-500  ">{description}</p>
      </div>

      <div className="absolute top-1 right-1 bg-red-700 rounded-2xl p-2">
        <p className="text-white">ผลงานของเรา</p>
      </div>
    </article>
  );
};
export default PerformanceContainer;
