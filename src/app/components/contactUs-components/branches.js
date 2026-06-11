import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

import Image from "next/image";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const branches = [
  {
    name: "Hyderabad Branch",
    layout: "image-left",
    image: "/ContactUs/locations/hyd.png",
    imageAlt: "Charminar, Hyderabad",
    address: "Plot No. 1, Hitech City, Madhapur, Hyderabad, Telangana 500081",
    email: "hyderabad@careerbridge.com",
    officePhone: "+91 98765 43210",
    whatsapp: "+91 99999 88888",
    socials: [
      { icon: FaYoutube, href: "https://www.youtube.com/@careerbridgeinstitute", label: "YouTube" },
      { icon: FaInstagram, href: "https://www.instagram.com/careerbridgeinstitute/", label: "Instagram" },
      { icon: FaTwitter, href: "https://x.com/careerbridgeit", label: "Twitter" },
      { icon: FaFacebook, href: "https://www.facebook.com/careerbridgeinstitute/photos/", label: "Facebook" },
      { icon: FaLinkedin, href: "https://www.linkedin.com/school/career-bridge-it-services-pvt-ltd/posts/?feedView=all", label: "LinkedIn" },
    ],
  },
  {
    name: "Visakhapatnam Branch",
    layout: "image-right",
    image: "/ContactUs/locations/vizag.png",
    imageAlt: "Vizag Submarine Museum",
    address:
      "Door No. 10-1-65/2, Waltair Main Road, Visakhapatnam, Andhra Pradesh 530002",
    email: "vizag@careerbridge.com",
    officePhone: "+91 88888 77777",
    whatsapp: "+91 77777 66666",
    socials: [
      { icon: FaYoutube, href: "https://www.youtube.com/@careerbridgeinstitute", label: "YouTube" },
      { icon: FaInstagram, href: "https://www.instagram.com/careerbridgeinstitute/", label: "Instagram" },
      { icon: FaTwitter, href: "https://x.com/careerbridgeit", label: "Twitter" },
      { icon: FaFacebook, href: "https://www.facebook.com/careerbridgeinstitute/photos/", label: "Facebook" },
      { icon: FaLinkedin, href: "https://www.linkedin.com/school/career-bridge-it-services-pvt-ltd/posts/?feedView=all", label: "LinkedIn" },
    ],
  },
  {
    name: "Eluru Branch",
    layout: "image-left",
    image: "/ContactUs/locations/eluru.png",
    imageAlt: "Eluru",
    address: "1st Floor, Main Road, Near RTC Complex, Eluru, Andhra Pradesh 534001",
    email: "eluru@careerbridge.com",
    officePhone: "+91 66666 55555",
    whatsapp: "+91 55555 44444",
    socials: [
      { icon: FaYoutube, href: "https://www.youtube.com/@careerbridgeinstitute", label: "YouTube" },
      { icon: FaInstagram, href: "https://www.instagram.com/careerbridgeinstitute/", label: "Instagram" },
      { icon: FaTwitter, href: "https://x.com/careerbridgeit", label: "Twitter" },
      { icon: FaFacebook, href: "https://www.facebook.com/careerbridgeinstitute/photos/", label: "Facebook" },
      { icon: FaLinkedin, href: "https://www.linkedin.com/school/career-bridge-it-services-pvt-ltd/posts/?feedView=all", label: "LinkedIn" },
    ],
  },
];



const PhoneIcon = () => (
  <svg className="w-4 h-4 text-[#1a3c8f] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg className="w-4 h-4 text-[#1a3c8f] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-4 h-4 text-[#1a3c8f] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4 text-[#1a3c8f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const BranchImage = ({ src, alt }) => (
  /* Outer wrapper — gradient squares live here, image sits on top */
 <div className="relative flex-shrink-0 w-full md:w-64 xl:w-80 p-[10px]">

    {/* Top-left gradient bracket (behind the image) */}
   <div className="absolute top-0 left-0 w-20 h-20 rounded-tl-2xl bg-[linear-gradient(180deg,_#2E4378_0%,_#E4202C_100%)] z-0" />

    {/* Bottom-right gradient bracket (behind the image) */}
    <div className="absolute bottom-0 right-0 w-20 h-20 rounded-br-2xl bg-[linear-gradient(180deg,_#2E4378_0%,_#E4202C_100%)] z-0" />

    {/* Image card — sits above the gradient brackets */}
    <div className="relative overflow-hidden shadow-md rounded-2xl h-[180px] border-[3px] border-white z-[1]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 256px"
      />
    </div>
  </div>
);

const ContactInfo = ({ branch }) => (
  <div className="flex flex-col gap-8 flex-1">
    {/* Address */}
    <div>
      <p className="text-xs font-semibold text-[#000] uppercase tracking-wider mb-1">Address</p>
      <div className="flex items-start gap-2">
        <LocationIcon />
        <p className="text-sm text-[#252525] break-words">{branch.address}</p>
      </div>
    </div>

    {/* Email */}
    <div>
      <p className="text-xs font-semibold text-[#000] uppercase tracking-wider mb-1">Email</p>
      <div className="flex items-center gap-2">
        <EmailIcon />
        <a
          href={`mailto:${branch.email}`}
          className="text-sm text-[#1a3c8f] hover:underline break-all"
        >
          {branch.email}
        </a>
      </div>
    </div>
  </div>
);

const ContactNumbers = ({ branch }) => (
  <div className="flex flex-col gap-8 flex-1">
    {/* Contact Numbers */}
    <div>
      <p className="text-xs font-semibold text-[#000] uppercase tracking-wider mb-1">Contact Numbers</p>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <PhoneIcon />
          <a href={`tel:${branch.officePhone}`} className="text-sm text-[#1a3c8f] break-all ">
            Office: {branch.officePhone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <WhatsappIcon />
          <a
  href={`https://wa.me/${branch.whatsapp.replace(/\D/g, "")}`}
  className="text-sm text-[#1a3c8f] break-all"
>
  WhatsApp: {branch.whatsapp}
</a>
        </div>
      </div>
    </div>

    {/* Social */}
    <div>
      <p className="text-xs font-semibold text-[#2E4378] uppercase tracking-wider mb-2">Follow us</p>
      <div className="flex items-center gap-4 text-[#2E4378] text-2xl">
        {branch.socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E4202C] transition-colors"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  </div>
);

const BranchCard = ({ branch }) => {
  const isImageRight = branch.layout === "image-right";

  return (
<div className="justify-center items-center bg-white rounded-2xl pt-[39px] pr-[49px] pb-[38.241px] pl-[49px] shadow-[0_2px_4px_2px_rgba(0,0,0,0.25)]">      {/* Branch title (only when not null) */}
      {branch.name && (
        <h3 className="text-center text-lg font-bold text-[#1a3c8f] mb-5">
          {branch.name}
        </h3>
      )}

      {/* Mobile layout: always stacked */}
      <div className="flex flex-col gap-5 md:hidden">
        <BranchImage src={branch.image} alt={branch.imageAlt} />
        <div className="flex flex-col gap-4">
          <ContactInfo branch={branch} />
          <ContactNumbers branch={branch} />
        </div>
      </div>

      {/* Desktop layout: side by side, image-left or image-right */}
      <div
  className={`hidden md:flex items-start gap-4 xl:gap-6 w-full ${
    isImageRight ? "flex-row-reverse" : "flex-row"
  }`}
>
  <BranchImage src={branch.image} alt={branch.imageAlt} />

  <div className="flex flex-col md:flex-row flex-1 gap-5 xl:gap-12 min-w-0">
    <div className="flex-1 min-w-0">
      <ContactInfo branch={branch} />
    </div>

    <div className="flex-1 min-w-0">
      <ContactNumbers branch={branch} />
    </div>
  </div>
</div>
    </div>
  );
};

export default function BranchesSection() {
  return (
<section className={`${manrope.className} relative bg-gray-50 py-12 px-4 overflow-hidden`}>

<div className="absolute top-8 left-4 md:left-10 xl:left-20 z-0 w-[117px] h-[117px]">
  <div className="grid grid-cols-6 gap-[10px] w-full h-full">
    {[...Array(36)].map((_, i) => (
      <span
        key={i}
        className="w-[3px] h-[3px] rounded-full bg-[#878CED]"
      />
    ))}
  </div>
</div>          {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#E4202C]">Our Branches</h2>
        <p className="text-[#252525] text-sm mt-2 max-w-xl mx-auto">
          Visit your nearest Career Bridge centre for counselling, demo classes, or to explore our training environment.
        </p>
      </div>

      {/* Cards */}
     <div className="max-w-5xl xl:max-w-7xl mx-auto flex flex-col gap-6">
        {branches.map((branch, idx) => (
          <BranchCard key={idx} branch={branch} />
        ))}
      </div>
    </section>
  );
}
