import Image from "next/image";
import cat from "@/app/assets/gif/cat.gif";

const Page5 = () => {
  return (
    <div className='page w-full h-full bg-gradient-to-b from-gray-800 to-black text-white p-2 flex items-center'>
      <div className='w-1/2 flex flex-col items-center justify-center'>
        <Image src={cat} className='w-12 h-12 mb-1' alt='Stars' unoptimized />
        <span className='text-[10px] text-pink-300'>Mãi bên em ✨</span>
      </div>
      <div className='w-1/2 pl-2 text-[11px] leading-snug'>
        <p>
          Dù thời gian trôi, dù mọi thứ đổi thay... tình yêu này vẫn sẽ không
          bao giờ tắt.
        </p>
      </div>
    </div>
  );
};

export default Page5;
