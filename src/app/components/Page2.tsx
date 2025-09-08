import Image from "next/image";
import bear from "@/app/assets/gif/bear.gif";
import img1 from '@/app/assets/images/img_1.jpg';

const Page2 = () => {
  return (
    <div className='page w-full h-full bg-white flex items-center justify-center gap-2 p-2'>
      <div>
      <Image src={bear} alt='Memory' className='w-20 h-20 rounded shadow-md mb-4' unoptimized/>
      <Image src={img1} alt='Memory' objectFit="cover" className='w-20 rounded shadow-md' />
      </div>
      <div className='pl-2 w-[110px]'>
        <h2 className='text-lg font-semibold text-rose-500 mb-1'>
          Kỷ niệm đầu tiên 🥰
        </h2>
        <p className='text-xs text-gray-700 leading-tight'>
          Em còn nhớ lần đầu mình nắm tay nhau không? Mọi thứ vẫn rõ như hôm
          qua...
        </p>
        <p className='text-xs text-gray-700 leading-tight'>
          Bức ảnh đầu tiên đôi mình chụp chung, anh vẫn nhớ em mặc chiếc áo mà em thích nhất
        </p>
      </div>
    </div>
  );
};

export default Page2;
