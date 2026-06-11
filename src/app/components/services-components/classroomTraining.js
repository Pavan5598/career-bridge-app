import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function ClassroomTraining() {
  return (
    <section
      className={`${manrope.className} flex justify-center bg-white py-10 lg:py-[45px] px-4`}
    >
      <div
        className="
          relative overflow-hidden rounded-[12px]
          bg-white shadow-[0_0_8px_2px_rgba(0,0,0,0.18)]

          flex flex-col
          md:flex-col
          lg:flex-row

          items-center lg:items-center
          justify-between

          w-full
          max-w-[1200px]

          px-6
          md:px-10
          lg:px-[60px]
          xl:px-[70px]

          py-10
          lg:py-0

          min-h-[530px]
        "
      >
        {/* Top Left Decorative Shape */}
        <div className="absolute top-0 left-0 w-[186px] h-[230px] overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 150 176"
            fill="none"
            className="-translate-x-[36px] -translate-y-[26px]"
          >
            <path
              d="M-37.0002 -24.6037L143.928 -25.0001C144.17 85.5996 63.3686 175.423 -36.5615 175.642L-37.0002 -24.6037Z"
              fill="#5269A3"
            />
            <path
              d="M-32.0002 -53.6036L148.928 -54C149.17 56.5996 68.3686 146.423 -31.5615 146.642L-32.0002 -53.6036Z"
              fill="#2E4378"
            />
          </svg>
        </div>

        {/* LEFT CONTENT */}
        <div
          className="
            relative z-10
            w-full
            lg:w-[48%]
          "
        >
          {/* SVG ICON */}
          <div
            className="
              mb-2

              w-[70px] h-[70px]
              md:w-[80px] md:h-[80px]
              xl:w-[88px] xl:h-[88px]

              -translate-x-[8px]
              md:-translate-x-[15px]
              xl:-translate-x-[30px]

              -translate-y-[8px]
              md:-translate-y-[12px]
              xl:-translate-y-[20px]
            "
          >
            {/* Paste your SVG icon here */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="88"
              height="88"
              viewBox="0 0 88 88"
              fill="none"
            >
              <g filter="url(#filter0_d_6317_5984)">
                <circle cx="43.5413" cy="43.5413" r="39.5413" fill="#E4202C" />
                <path
                  d="M43.8143 23.5758C49.5952 26.469 55.7023 28.7193 62.1487 30.2712C63.1665 30.5151 63.297 30.6703 63.297 31.5682C63.297 34.5279 63.3492 37.4876 63.2579 40.4474C63.0752 46.644 60.5305 52.0424 55.5457 56.5874C53.0533 58.8598 50.1954 60.7221 46.894 62.0634C46.098 62.3849 45.2497 62.6399 44.4015 62.8505C43.3837 63.1165 42.405 62.8394 41.4524 62.529C38.7251 61.6311 36.3109 60.2787 34.0925 58.6824C30.6214 56.1883 27.9202 53.1842 26.1194 49.6148C24.8667 47.1317 24.0184 44.5489 23.901 41.8552C23.7575 38.319 23.7966 34.7829 23.7705 31.2467C23.7705 30.7257 24.0054 30.4929 24.6579 30.3266C27.5548 29.6283 30.4126 28.808 33.2052 27.8436C36.4153 26.724 39.5211 25.4159 42.5224 23.9305C42.7704 23.8086 43.0183 23.6866 43.2532 23.5647C43.462 23.5758 43.6316 23.5758 43.8143 23.5758ZM61.444 36.8115C61.4179 36.8115 61.4048 36.8115 61.3787 36.8115C61.3787 35.2706 61.3657 33.7298 61.3918 32.2C61.3918 31.9118 61.3135 31.7788 60.9742 31.6901C54.9846 30.2158 49.3081 28.1539 43.9057 25.5268C43.6577 25.4048 43.462 25.3827 43.201 25.5157C37.7986 28.165 32.109 30.2269 26.1194 31.7012C25.7932 31.7788 25.7149 31.9007 25.7149 32.1779C25.7279 34.6277 25.7149 37.0775 25.7279 39.5273C25.741 42.3651 26.2368 45.1364 27.3982 47.819C28.7945 51.0337 30.9477 53.8382 33.8185 56.2215C36.2065 58.2058 38.8947 59.8353 42.0005 60.9549C42.9661 61.2985 43.9057 61.4205 44.8844 61.0325C45.3019 60.8662 45.7456 60.7332 46.1632 60.5558C51.2655 58.3721 55.2456 55.1795 58.0381 50.945C59.865 48.1848 60.9351 45.214 61.2222 42.0547C61.3526 40.3033 61.3657 38.5518 61.444 36.8115Z"
                  fill="white"
                />
                <path
                  d="M28.0901 34.9819C28.0901 34.5498 28.0901 34.128 28.0901 33.6959C28.1023 33.1507 28.2855 32.9244 28.8964 32.7495C30.4478 32.2865 32.0115 31.8339 33.5508 31.3504C34.4914 31.052 35.0412 31.659 34.9312 32.1528C34.8457 32.5334 34.5281 32.698 34.1372 32.8215C32.8667 33.2021 31.5962 33.6033 30.3134 33.9634C30.008 34.0457 29.8981 34.1691 29.9103 34.4366C29.9347 35.0847 29.9225 35.7431 29.9103 36.4015C29.9103 36.741 29.7637 37.0291 29.3728 37.1834C29.0307 37.3171 28.6642 37.2965 28.4321 37.0599C28.2489 36.8645 28.1145 36.5867 28.0901 36.3295C28.0412 35.8872 28.0901 35.4345 28.0901 34.9819Z"
                  fill="white"
                />
                <path
                  d="M54.6314 50.1122C55.4257 50.1122 55.8425 50.8031 55.3867 51.3954C54.9309 51.9767 54.436 52.536 53.9281 53.0844C52.6519 54.4444 51.1543 55.618 49.5526 56.6928C49.0056 57.0547 48.4457 57.0547 48.068 56.6709C47.7034 56.287 47.7685 55.8044 48.3024 55.4425C49.7609 54.4444 51.1543 53.3805 52.3264 52.1302C52.8082 51.6257 53.251 51.0993 53.6937 50.5728C53.9412 50.3096 54.2016 50.0902 54.6314 50.1122Z"
                  fill="white"
                />
                <path
                  d="M45.7063 56.9646C46.3667 56.9541 46.9641 57.3299 46.9799 57.7682C46.9956 58.217 46.3824 58.6554 45.6906 58.6763C44.9988 58.6971 44.4171 58.3214 44.4014 57.8517C44.4014 57.3716 44.9831 56.975 45.7063 56.9646Z"
                  fill="white"
                />
                <path
                  d="M39.2435 30.399C39.2594 30.8454 38.6705 31.2493 37.9543 31.2705C37.2858 31.2918 36.665 30.8773 36.665 30.4097C36.665 29.9739 37.2539 29.5807 37.9224 29.5594C38.5909 29.5381 39.2276 29.942 39.2435 30.399Z"
                  fill="white"
                />
                <path
                  d="M39.7939 40.2009C39.7939 39.7527 39.755 39.2827 39.7939 38.8127C39.9366 37.195 41.402 35.8396 43.2435 35.5991C45.2277 35.3477 47.1211 36.1894 47.8214 37.7306C48.0678 38.288 48.0808 38.922 48.1715 39.5341C48.2104 39.7637 48.1715 39.9932 48.1715 40.2337C48.4568 40.2665 48.6773 40.2774 48.8978 40.3211C49.7018 40.4632 50.3762 41.0535 50.3892 41.7968C50.4281 43.7752 50.4281 45.7646 50.3892 47.743C50.3762 48.5738 49.611 49.164 48.6125 49.2296C47.8862 49.2733 47.16 49.2515 46.4338 49.2515C44.2421 49.2515 42.0634 49.2515 39.8717 49.2515C38.2506 49.2515 37.5244 48.6284 37.5244 47.2512C37.5244 45.6881 37.5244 44.1359 37.5244 42.5728C37.5244 40.9223 37.8227 40.5944 39.7939 40.2009ZM43.9568 47.8414C45.3444 47.8414 46.7191 47.8305 48.1067 47.8414C48.5476 47.8414 48.7422 47.7321 48.7422 47.3277C48.7292 45.6116 48.7292 43.8954 48.7422 42.1793C48.7422 41.8077 48.5995 41.6875 48.1586 41.6875C45.3703 41.6984 42.5951 41.6984 39.8069 41.6875C39.327 41.6875 39.1973 41.8405 39.1973 42.2121C39.2103 43.9173 39.2103 45.6116 39.1973 47.3167C39.1973 47.6993 39.353 47.8523 39.8069 47.8414C41.1945 47.8305 42.5821 47.8414 43.9568 47.8414ZM46.4727 40.2555C46.4727 39.7746 46.5116 39.3155 46.4597 38.8674C46.356 37.8399 45.3963 37.0638 44.1902 36.9873C42.9712 36.8998 41.83 37.5229 41.5706 38.5066C41.4279 39.0641 41.4668 39.6544 41.415 40.2555C43.1527 40.2555 44.7868 40.2555 46.4727 40.2555Z"
                  fill="white"
                />
                <path
                  d="M43.5618 42.402C44.6992 42.4135 45.7043 43.0834 46.0218 44.0306C46.3392 45.0008 45.8763 46.0634 44.8447 46.56C44.4876 46.7333 44.3553 46.9296 44.395 47.2646C44.395 47.2993 44.395 47.3339 44.395 47.3686C44.3818 48.05 44.0908 48.3965 43.5486 48.3965C42.9931 48.3965 42.6625 48.05 42.6889 47.3801C42.7022 46.9758 42.5699 46.7333 42.1467 46.5138C41.1548 46.0056 40.7448 44.943 41.0754 43.9959C41.4061 43.0488 42.4244 42.402 43.5618 42.402ZM43.5486 43.9035C43.0989 43.9035 42.7154 44.2154 42.7022 44.6196C42.6889 45.047 43.0593 45.3935 43.5354 45.3935C43.985 45.3935 44.3686 45.0816 44.3818 44.6774C44.395 44.2616 44.0247 43.9151 43.5486 43.9035Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_6317_5984"
                  x="0"
                  y="0"
                  width="87.083"
                  height="87.0827"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_6317_5984"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_6317_5984"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          {/* Heading */}
          <div
            className="
    leading-[0.95]

    translate-x-[85px]
    sm:translate-x-[75px]
    md:translate-x-[55px]
    lg:translate-x-[25px]
    xl:translate-x-[60px]

    -translate-y-[8px]
    md:-translate-y-[18px]
    xl:-translate-y-[40px]
  "
          >
            <h2
              className="
      text-[30px]
      md:text-[34px]
      xl:text-[38px]
      font-[700]
      bg-[linear-gradient(90deg,#2E4378_0%,#E4202C_100%)]
      bg-clip-text text-transparent
    "
            >
              Classroom
            </h2>
          </div>

          <div
            className="
              leading-[1.2]

              translate-x-[0px]
              md:translate-x-[10px]

              -translate-y-[2px]
              md:-translate-y-[10px]
              xl:-translate-y-[30px]
            "
          >
            <h3
              className="
                text-[30px]
                md:text-[34px]
                xl:text-[38px]
                font-[700]
                bg-[linear-gradient(90deg,#2E4378_0%,#E4202C_100%)]
                bg-clip-text text-transparent
              "
            >
              Training
            </h3>
          </div>

          {/* Divider */}
          <div
            className="
              mb-6

              h-[4px]
              w-[90px]
              md:w-[105px]
              xl:w-[123px]

              rounded-full
              bg-[linear-gradient(90deg,#2E4378_0%,#E4202C_100%)]

              -mt-[3px]
              md:-mt-[14px]
              xl:-mt-[25px]
            "
          />

          {/* Text */}
          <div
            className="
              w-full
              max-w-[530px]

              text-[14px]
              md:text-[15px]
              xl:text-[16px]

              font-[400]

              leading-[28px]
              xl:leading-[30px]

              text-[#1C1C1C]
            "
          >
            <p className="mb-4">
              Our classroom training delivers hands-on learning through
              expert-led sessions, real-time interaction, and structured
              guidance. Experience immersive education in state-of-the-art
              facilities designed to accelerate your professional growth and
              technical mastery.
            </p>

            <p>
              With small batch sizes and personalized mentorship, you'll work
              directly with industry professionals who bring years of real-world
              experience. Our comprehensive curriculum combines theoretical
              knowledge with practical application, ensuring you're job-ready
              from day one.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        {/* RIGHT IMAGE SECTION */}
        <div
          className="
    relative
    w-full
    lg:w-[48%]

    mt-12
    md:mt-14
    lg:mt-0

    flex items-center justify-center

    min-h-[260px]
    sm:min-h-[300px]
    md:min-h-[360px]
    lg:min-h-[380px]
  "
        >
          {/* IMAGE BLOCK */}
          <div
            className="
      relative

      w-[300px]
      sm:w-[340px]
      md:w-[420px]
      lg:w-[420px]
      xl:w-[440px]

      aspect-[16/10]
    "
          >
            {/* TOP LEFT GRADIENT */}
            <div
              className="
        absolute z-0
        top-[-10px]
        left-[10px]

        w-[95px]
        h-[80px]

        sm:w-[105px]
        sm:h-[90px]

        md:w-[120px]
        md:h-[100px]

        rounded-tl-[32px]

        bg-[linear-gradient(180deg,#2E4378_0%,#E4202C_100%)]
      "
            />

            {/* IMAGE */}
            <div className="relative z-10 w-full h-full overflow-hidden rounded-[26px]">
              <Image
                src="/Services/image 130.png"
                alt="Classroom Training"
                fill
                className="object-contain"
              />
            </div>

            {/* BOTTOM RIGHT GRADIENT */}
            <div
              className="
        absolute z-0
        bottom-[-5px]
        right-[10px]

        w-[95px]
        h-[80px]

        sm:w-[105px]
        sm:h-[90px]

        md:w-[120px]
        md:h-[100px]

        rounded-br-[32px]

        bg-[linear-gradient(180deg,#2E4378_0%,#E4202C_100%)]
      "
            />
          </div>

          {/* DECORATIVE SVG - SEPARATE BLOCK */}
          <div
            className="
      absolute
      z-0
      hidden lg:block

      -bottom-[85px]
      -right-[110px]
    "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 145 141"
              fill="none"
            >
              <path
                d="M186.367 200.246L5.43888 200.642C5.19659 90.0423 85.998 0.218916 185.928 0L186.367 200.246Z"
                fill="#5269A3"
              />
              <path
                d="M181.367 229.246L0.438876 229.642C0.196588 119.042 80.998 29.2189 180.928 29L181.367 229.246Z"
                fill="#2E4378"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
