import Image from "next/image";

interface ValueItemProps {
  label: string;
  imageSrc: string;
}

export default function ValueItem({ label, imageSrc }: ValueItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-[125px] h-[125px] mb-4">
        <Image
          src={imageSrc}
          alt={label}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <p className="text-xl font-semibold">{label}</p>
    </div>
  );
}
