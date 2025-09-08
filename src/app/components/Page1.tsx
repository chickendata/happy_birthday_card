import Image from "next/image";
import gif from "@/app/assets/gif/progress.gif";

const Page1 = () => {
  return (
    <div className='page w-full h-full bg-gradient-to-br from-pink-200 to-rose-300 flex flex-col items-center justify-center text-center p-2'>
      <h1 className='text-lg font-bold text-white drop-shadow-sm'>
        Tặng Em 💌
      </h1>
      <p className='text-xs text-white mt-2'>
        Một cuốn thiệp nhỏ xinh từ trái tim anh
      </p>
      <Image src={gif} className='w-full mt-4 animate-bounce' alt='Heart' unoptimized />
    </div>
  );
};

export default Page1;
