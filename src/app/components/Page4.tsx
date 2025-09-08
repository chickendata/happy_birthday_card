import Image from "next/image";
import img2 from "@/app/assets/images/img_2.jpg";

const Page4 = () => {
  return (
    <div className='page w-full h-full bg-yellow-50 p-2 relative flex flex-col items-center justify-start text-center'>
      <div className='w-20 rounded-full items-center justify-center mt-2'>
        <Image src={img2} className='animate-wiggle' alt='Promise' />
      </div>
      <h2 className='text-sm font-semibold text-yellow-600 mt-2'>Lời hứa 🤞</h2>
      <p className='text-xs text-gray-700 px-2 mt-1'>
        Dù thế nào đi nữa, anh cũng sẽ ở đây — cùng em đi qua mọi điều.
      </p>
    </div>
  );
};

export default Page4;
