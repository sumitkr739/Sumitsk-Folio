import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";
import ContactImage from "../../assets/Images/handshakePic-removebg-preview.png";
import "../../index.css";

export default function Contact() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [result, setResult] = useState("");

  const heading = useRef(null);
  const body = useRef(null);
  const image = useRef(null);
  const contactSection = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c80ebbb0-b488-4af3-b499-ab5b8a8575d5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "Failed to send the message.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactSection.current,
      start: "180px bottom",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, x: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, x: 0, ease: "power4.out", duration: 1.25 },
          0.2
        )
        .to(
          image.current,
          { opacity: 1, x: 0, ease: "power4.out", duration: 1.25 },
          0.4
        ),
      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [contactSection]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="mt-[10%] p-10 pb-10 overflow-hidden rounded-tl-3xl rounded-tr-3xl rounded-3xl bg-[#CDEA68]"
      aria-label="contact"
    >
      <Heading title="Contact" />
      <div
        ref={contactSection}
        className="mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12"
      >
        <div className="col-span-3">
          <h3
            ref={heading}
            className="max-w-lg 2xl:max-w-3xl text-heading-3 2xl:text-6xl font-semibold leading-tight translate-x-10 opacity-0"
          >
            Let&apos;s scale our Network.
          </h3>
          <div className="space-y-3 pt-5" ref={body}>
            <h4 className="text-body-1 2xl:text-3xl font-semibold">
              Contact Details
            </h4>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-xl">
              <a
                href="sumitsinha739@gmail.com"
                className="group relative w-fit cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <span>Sumitsinha739@gmail.com</span>
                <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </div>
            <div className="flex justify-start mt-4">
              <img
                ref={image}
                width="400"
                height="400"
                src={ContactImage}
                alt="ContactImage"
                className="object-contain translate-x-10 opacity-0"
              />
            </div>
          </div>
        </div>

        <div className="col-span-3 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div className="border-4 rounded-md animate-gradient-border p-3">
            <form
              onSubmit={onSubmit}
              name="contact"
              action="/contact"
              autoComplete="off"
              className="mt-10 font-grotesk p-6 rounded-lg shadow-md"
              method="POST"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
                <div className="relative z-0">
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                  >
                    Your name
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    required
                    type="text"
                    name="email"
                    id="email"
                    className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                  >
                    Your email
                  </label>
                </div>
                <div className="relative z-0 sm:col-span-2">
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows="5"
                    className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                  >
                    Your message
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="button group mt-10 border duration-200 hover:border-accent-400 hover:bg-transparent"
              >
                <span className="relative">
                  <span className="absolute bottom-2 h-1 w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
                  <span className="group-hover:text-accent-400">
                    Send Message
                  </span>
                </span>
              </button>
            </form>
            {result && (
              <div className="mt-4 text-center text-lg font-medium text-accent-500">
                {result}
              </div>
            )}
          </div>

          <div className="space-y-3 pt-5">
            <h4 className="text-body-1 font-semibold 2xl:text-2xl">Location</h4>
            <div className="space-y-2 text-body-2 2xl:text-xl">
              <p>
                Indore, India <br />
                {time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
