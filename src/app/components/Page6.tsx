import React from 'react';
import img1 from '@/app/assets/images/img_1.jpg';
import img2 from '@/app/assets/images/img_2.jpg';
import img3 from '@/app/assets/images/img_3.jpg';
import img4 from '@/app/assets/images/img_4.jpg';
import Image from 'next/image';

const photos = [
  { src: img1, caption: 'Kỷ niệm vui vẻ', rotate: '-rotate-6', top: 'top-6', left: 'left-4' },
  { src: img2, caption: 'Lúc hạnh phúc nhất', rotate: 'rotate-3', top: 'top-34', left: 'left-30' },
  { src: img3, caption: 'Mới gặp em', rotate: '-rotate-2', top: 'top-36', left: 'left-8' },
  { src: img4, caption: 'Nàng thơ của anh', rotate: 'rotate-6', top: 'top-3', left: 'left-36' },
];

export default function Page6() {
  return (
    <div className="relative w-full h-full bg-[#fffaf5] overflow-hidden">
      {/* Họa tiết trang trí góc */}
      <div className="absolute top-2 left-2 text-xl animate-bounce">🌸</div>
      <div className="absolute top-2 right-2 text-xl animate-spin">⭐</div>
      <div className="absolute bottom-2 left-2 text-xl animate-pulse">🎀</div>
      <div className="absolute bottom-2 right-2 text-xl animate-bounce">🌼</div>

      {/* Ảnh bố trí tự do */}
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`
            absolute 
            ${photo.top} ${photo.left}
            ${photo.rotate}
            bg-white border-4 border-pink-200 shadow-md p-1 rounded-md w-14
            transition-transform duration-300 hover:scale-105
          `}
        >
          <Image
            src={photo.src}
            alt={`photo-${index}`}
            className="w-full h-auto rounded-sm"
          />
          <div className="text-[10px] text-gray-600 mt-1 italic text-center">
            {photo.caption}
          </div>
        </div>
      ))}
    </div>
  );
}
