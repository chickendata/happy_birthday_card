import React from "react";
import { Heart, Cake } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Page8() {
  return (
    <main className='w-full h-full bg-gradient-to-b from-[#ffe4e9] to-[#fff0f5] flex justify-center px-2 relative'>
      <article className='text-[#374151] w-full leading-relaxed'>
        <p className='text-center mt-2'>Gửi cho em</p>
        <p className='text-lg w-full'>
          <Typewriter
            words={[
              "Chúc mừng sinh nhật em iuuuu, anh xin cảm ơn bố mẹ em đã sinh ra em để đến bây giờ anh có thể gặp đc em, tuy khoảng cách ngắn cách chúng mình nhưng anh lúc nào cũng hướng về em",
              "Mong rằng năm sau không phải là những tin nhắn, cuộc gọi mà là có thể trực tiếp ở bên cạnh em cùng em đón sinh nhật.",
              "Chúc e bước sang tuổi mới thật nhiều niềm vui luôn vui cười khi ở bên cạnh anh, mong rằng cuộc sống và công việc luôn nhẹ nhàng với em. Yêu em rất rất nhiều, sớm về với anh nhé",
            ]}
            cursor
            cursorStyle='|'
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={3500}
          />
        </p>
      </article>

      <div className='absolute bottom-2 mt-6 flex items-center gap-3'>
        <span className='inline-flex text-sm items-center gap-2 font-medium'>
          <Heart className='w-5 h-5 text-pink-500' /> <span>Yêu em</span>
        </span>

        <span className='inline-flex text-sm items-center gap-2 font-medium ml-2'>
          <Cake className='w-5 h-5 text-amber-500' />{" "}
          <span>Chúc mừng sinh nhật!</span>
        </span>
      </div>
    </main>
  );
}
