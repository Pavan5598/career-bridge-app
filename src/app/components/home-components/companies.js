import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const companies = [
  "/Home/companies/image hanvitec.png",
  "/Home/companies/image cogni.png",
  "/Home/companies/image Accen.png",
  "/Home/companies/image hcl.png",
  "/Home/companies/image infosys.png",
  "/Home/companies/image wipro.png",
  "/Home/companies/image ness.png",
  "/Home/companies/image npk.png",
];

export default function Companies() {
  const list = [...companies, ...companies];

  return (
    <section
      className="
        w-full
        py-8 sm:py-10 lg:py-12 xl:py-14
        bg-white
        overflow-hidden
        flex flex-col items-center
      "
    >
      {/* HEADING */}
      <h2
        className={`
          ${manrope.className}

          text-[#2E4378]
          text-center
          font-bold

          text-[20px]
          sm:text-[22px]
          md:text-[24px]
          lg:text-[26px]
          xl:text-[28px]
          2xl:text-[30px]

          leading-[140%]
          tracking-[0.3px]
          sm:tracking-[0.5px]
        `}
      >
        Our Students Are Working In
      </h2>

      {/* MARQUEE WRAPPER */}
      <div
        className="
          mt-6 sm:mt-8 lg:mt-10
          w-full
          overflow-hidden
        "
      >
        {/* MARQUEE TRACK */}
        <div
          className="
            animate-marquee-fast
            flex items-center

            gap-6
            sm:gap-8
            md:gap-10
            lg:gap-12
            xl:gap-14

            w-max
          "
        >
          {list.map((img, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center
                flex-shrink-0

                h-[36px]
                sm:h-[42px]
                md:h-[50px]
                lg:h-[60px]
                xl:h-[70px]
                2xl:h-[80px]
              "
            >
              <Image
                src={img}
                alt="company"

                width={180}
                height={90}

                className="
                  h-full
                  w-auto
                  object-contain
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}