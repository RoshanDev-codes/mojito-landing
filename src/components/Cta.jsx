import { openingHours, socials } from "../../constants";

const Cta = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden radial-gradient w-full md:mt-20 mt-0 px-4 text-center"
    >
      <img
        src="images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
        className="absolute bottom-0 left-0 pointer-events-none lg:w-fit w-1/3"
      />

      <img
        src="images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
        className="absolute top-0 right-0 pointer-events-none hidden lg:block"
      />

      <div className="min-h-dvh container mx-auto lg:py-14 xl:py-36 py-16 flex flex-col justify-baseline md:gap-10 gap-24">
        <h2 className="lg:text-6xl 2xl:text-8xl text-5xl font-modern-negra md:translate-y-0 translate-y-5">
          Where to Find Us
        </h2>

        <div>
          <h3 className="uppercase x:text-base 2xl:text-lg text-base mb-2">
            Visit Our Bar
          </h3>
          <p className="lg:text-2xl 2xl:text-3xl text-sm">
            456, Raq Blvd. #404, Los Angeles, CA 90210
          </p>
        </div>

        <div>
          <h3 className="uppercase x:text-base 2xl:text-lg text-base mb-2">
            Contact Us
          </h3>
          <p className="lg:text-2xl 2xl:text-3xl text-sm">(555) 987-6543</p>
          <p className="lg:text-2xl 2xl:text-3xl text-sm">
            hello@jsmcocktail.com
          </p>
        </div>

        <div>
          <h3 className="uppercase x:text-base 2xl:text-lg text-base mb-2">
            Open Every Day
          </h3>

          {openingHours.map((time) => (
            <p className="lg:text-2xl 2xl:text-3xl text-sm" key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3 className="uppercase x:text-base 2xl:text-lg text-base mb-2">
            Socials
          </h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Cta;
