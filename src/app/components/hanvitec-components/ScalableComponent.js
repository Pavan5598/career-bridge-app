import Image from "next/image";

export default function HierarchyChart() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-4">
      <div className="relative h-[190px] w-[280px] shrink-0 sm:h-[190px] sm:w-[280px] md:h-[190px] md:w-[280px] lg:w-[350px] lg:h-[220px] ">
        <Image
          src="/core-system.png"
          alt="Core System"
          fill
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}