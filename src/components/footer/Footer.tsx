import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#0f0715fb] ">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Image src="/images/log.png" alt="logo" width={100} height={50} />
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-8">
          {["About", "Project", "Blog", "Services", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <a
                  className="text-white text-sm sm:text-base transition hover:text-white/75"
                  href="#"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        <p className="text-center mt-6 text-white text-xs sm:text-sm md:text-base">
          © 2025 All Rights Reserved by Hridoy Developer
        </p>
      </div>
    </div>
  );
};

export default Footer;
