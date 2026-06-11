import { Manrope } from "next/font/google";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function LastSection() {
  return (
    <section
      className={`
        ${manrope.className}
        w-full
        bg-white
        py-10 lg:py-[62px]
        flex
        justify-center
        items-center
      `}
    >
      {/* ================================================= */}
     <div
  className="
    relative
    flex
    flex-col
    lg:hidden
    overflow-hidden
    rounded-[28px]
    bg-[#1E3A8A]
    w-[92%]
    sm:w-[88%]
    max-w-[700px]
    min-h-[200px] sm:min-h-[220px]
  "
>
  {/* Red Wave */}
  <svg
    className="absolute bottom-0 left-0 w-full h-[200px] z-0"
    viewBox="0 0 1200 240"
    preserveAspectRatio="none"
  >
    <path
      d="
        M0 40
        C180 0 320 120 600 120
        C860 120 980 20 1200 0
        V240
        H0
        Z
      "
      fill="#E4202C"
    />
  </svg>

  {/* Content */}
  <div
    className="
      relative z-50
      flex flex-col
      items-center
      text-center
      px-6 sm:px-10
      pt-4 sm:pt-5
    "
  >
    <h2 className="text-white text-[24px] sm:text-[30px] leading-[34px] sm:leading-[40px] font-medium max-w-[560px]">
      Ready to Start Your IT Career With Confidence?
    </h2>

    <p className="mt-2 text-[#F4F4F4] text-[15px] sm:text-[17px] leading-[26px] max-w-[520px]">
      Connect with career coach and find the right path for your future
    </p>

    {/* Buttons */}
    <div
      className="
        flex flex-col sm:flex-row
        items-center justify-center
        gap-3
        mt-5
        relative z-30
        w-full
      "
    >
      <button
        className="
          w-full sm:w-auto
          bg-[#E4202C]
          text-white
          text-[13px]
          font-semibold
          rounded-full
          px-5 py-2.5
          cursor-pointer
        "
      >
        Book Free Counselling
      </button>

      <button
        className="
          w-full sm:w-auto
          flex items-center justify-center gap-2
          border border-white/40
          text-white
          text-[13px]
          font-medium
          rounded-full
          px-5 py-2.5
          cursor-pointer
        "
      >
        <FaWhatsapp className="text-[16px]" />
        Talk on WhatsApp
      </button>
    </div>
  </div>

  {/* Image */}
  <div className="relative z-10 flex justify-center mt-3 shrink-0">
    <Image
      src="/Home/lastSection/Image.png"
      alt="Career coach"
      width={200}
      height={200}
      className="w-[180px] sm:w-[200px] h-auto object-contain"
    />
  </div>
</div>
      {/* ================================================= */}
      {/* DESKTOP DESIGN */}
      {/* ================================================= */}
      <div
        className="
          relative
          hidden lg:flex
          items-center
          justify-between
          overflow-hidden
          rounded-[32px]
          bg-[#1E3A8A]
          w-full
          max-w-[1200px]
          h-[356px]
          px-[80px]
        "
      >
        {/* Left Side Decorative Lines */}
        <div className="absolute top-0 left-0 z-[5] pointer-events-none">
          {/* Top Outer Circle */}
          <div
            className="
              absolute
              -top-[51px]
              left-[190px]
              w-[102px]
              h-[102px]
              rounded-full
              border
              border-[#FFFFFF]
              opacity-80
            "
          />

          {/* Top Inner Circle */}
          <div
            className="
              absolute
              -top-[43px]
              left-[198px]
              w-[86px]
              h-[86px]
              rounded-full
              border
              border-[#FFFFFF]
              opacity-60
            "
          />

          {/* Bottom Circle */}
          <div className="absolute top-[170px] left-[198px] w-[44px] h-[44px] rounded-full border border-[#FFFFFF]" />
          <div className="absolute top-[175px] left-[175px] w-[44px] h-[44px] rounded-full border border-[#FFFFFF]" />

          {/* Inner Bottom Circle */}
          <div className="absolute top-[176px] left-[201px] w-[37px] h-[37px] rounded-full border border-[#FFFFFF]" />

          {/* Rectangle 1 */}
          <div
            className="
              absolute
              top-[28px]
              -left-[15px]
              w-[94px]
              h-[480px]
              border
              border-white/20
              rounded-tr-[100px]
              z-[4]
            "
          />

          {/* Rectangle 2 */}
          <div
            className="
              absolute
              top-[48px]
              -left-[20px]
              w-[84px]
              h-[450px]
              border
              border-white/20
              rounded-tr-[100px]
              z-[4]
            "
          >
            <div className="absolute top-[115px] right-[-12px] z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
              >
                <path
                  d="M10.5409 0C10.5409 0 11.2082 4.82572 13.3879 6.83559C15.6575 8.92844 21.0818 9.36499 21.0818 9.36499C21.0818 9.36499 15.6575 9.80155 13.3879 11.8944C11.2082 13.9043 10.5409 18.73 10.5409 18.73C10.5409 18.73 9.87354 13.9043 7.69389 11.8944C5.42425 9.80155 0 9.36499 0 9.36499C0 9.36499 5.42425 8.92844 7.69389 6.83559C9.87354 4.82572 10.5409 0 10.5409 0Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
          </div>

          {/* Rectangle 3 */}
          <div
            className="
              absolute
              top-[58px]
              -left-[25px]
              w-[74px]
              h-[430px]
              border
              border-white/20
              rounded-tr-[80px]
              z-[4]
            "
          >
            <div className="absolute top-[75px] right-[-12px] z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
              >
                <path
                  d="M10.5409 0C10.5409 0 11.2082 4.82572 13.3879 6.83559C15.6575 8.92844 21.0818 9.36499 21.0818 9.36499C21.0818 9.36499 15.6575 9.80155 13.3879 11.8944C11.2082 13.9043 10.5409 18.73 10.5409 18.73C10.5409 18.73 9.87354 13.9043 7.69389 11.8944C5.42425 9.80155 0 9.36499 0 9.36499C0 9.36499 5.42425 8.92844 7.69389 6.83559C9.87354 4.82572 10.5409 0 10.5409 0Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
          </div>

          {/* Rectangle 4 */}
          <div
            className="
              absolute
              top-[15px]
              -left-[10px]
              w-[104px]
              h-[512px]
              border
              border-white/20
              rounded-tr-[90px]
              z-[4]
            "
          >
            <div className="absolute top-[85px] right-[-12px] z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
              >
                <path
                  d="M10.5409 0C10.5409 0 11.2082 4.82572 13.3879 6.83559C15.6575 8.92844 21.0818 9.36499 21.0818 9.36499C21.0818 9.36499 15.6575 9.80155 13.3879 11.8944C11.2082 13.9043 10.5409 18.73 10.5409 18.73C10.5409 18.73 9.87354 13.9043 7.69389 11.8944C5.42425 9.80155 0 9.36499 0 9.36499C0 9.36499 5.42425 8.92844 7.69389 6.83559C9.87354 4.82572 10.5409 0 10.5409 0Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Red Wave */}
        <svg
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-[174px]
            z-20
            pointer-events-none
          "
          viewBox="0 0 1200 174"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M0 0
              C0 0 132.515 4.20894 237.75 21.5505
              C358.914 41.5166 434.667 83.2379 559.276 83.5413
              C685.333 83.8482 793.245 40.9314 916.096 21.5505
              C1037 2.47694 1200 0 1200 0
              V174
              H0
              V0Z
            "
            fill="#E4202C"
          />
        </svg>

        {/* Dots */}
        <div className="absolute top-6 right-8 grid grid-cols-7 gap-[15px] opacity-30 z-10">
          {Array.from({ length: 49 }).map((_, i) => (
            <div
              key={i}
              className="w-[3px] h-[3px] rounded-full bg-[#C6C6C6]"
            />
          ))}
        </div>

        {/* Center Content */}
        <div
          className="
            relative z-30
            flex flex-col
            items-center
            justify-center
            gap-3
            -mt-30
            left-40
            w-[546px]
            text-center
            mx-auto
          "
        >
          <h2
            className="
              text-[#FFFFFF]
              text-[32px]
              font-normal
              leading-[35px]
            "
          >
            Ready to Start Your IT Career With Confidence?
          </h2>

          <p
            className="
              text-[#F4F4F4]
              text-[16px]
              font-normal
              leading-[28px]
              max-w-[500px]
            "
          >
            Connect with career coach and find the right path for your future
          </p>

          <div className="flex items-center justify-center gap-2 mt-1 ">
            <button className="cursor-pointer bg-[#E4202C] hover:bg-[#c81d28] transition-colors duration-300 text-white text-[14px] font-semibold rounded-full px-10 py-4">
              Book Free Counselling
            </button>

            <button className="cursor-pointer flex items-center gap-2 border border-white/40 bg-transparent hover:bg-white/10 transition-all duration-300 text-white text-[14px] font-medium rounded-full px-10 py-4">
              <FaWhatsapp className="text-[18px]" />
              Talk on WhatsApp
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="
            relative z-30
            flex items-end justify-end
            self-stretch
            w-[360px]
            flex-shrink-0
          "
        >
          <Image
            src="/Home/lastSection/Image.png"
            alt="Career coach"
            width={360}
            height={360}
            className="
              h-full
              w-auto
              object-contain
              object-bottom
            "
          />
        </div>
      </div>
    </section>
  );
}
