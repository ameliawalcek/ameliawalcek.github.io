import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { email, githubFooter, linkedin } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formError, setFormError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const[formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };

  const validateForm = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validationResults = {
      message: form.message.length === 0,
      name: form.name.length === 0,
      email: !emailRegex.test(form.email),
    };

    return new Promise((resolve) => {
      resolve(validationResults);
    });
  };

  useEffect(() => {
    if (!isDirty) return;

    const validate = async () => {
      const formErrors = await validateForm();
      setFormError(formErrors);
    };

    validate();
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDirty(true);

    const formErrors = await validateForm();
    setFormError(formErrors);

    if (formErrors.name || formErrors.message || formErrors.email) return;

    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Amelia Walcek",
          from_email: form.email,
          to_email: import.meta.env.PERSONAL_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setMessage("Thank you. I will get back to you as soon as possible.");
          setError(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setIsDirty(false);
          setFormSubmitted(true)
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setError(true);
          setMessage(
            "Ahh, something went wrong. Please try again or email me at ameliawalcek@gmail.com."
          );
          setIsDirty(false);
        }
      );
  };

  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Get in touch
          </p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact.
          </h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span
                className={`${
                  formError.name ? "text-red-500" : "text-white"
                }  font-medium mb-4`}
              >
                Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span
                className={`${
                  formError.email ? "text-red-500" : "text-white"
                }  font-medium mb-4`}
              >
                Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span
                className={`${
                  formError.message ? "text-red-500" : "text-white"
                }  font-medium mb-4`}
              >
                Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="resize-none bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <div className={`${!error ? "text-secondary" : "text-[#d269fc]"}`}>
              {message}
            </div>
            {!formSubmitted && <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>}
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <div className="flex items-center justify-center pt-10">
        <img
          onClick={() =>
            window.open("https://github.com/ameliawalcek", "_blank")
          }
          className="p-5 cursor-pointer"
          src={githubFooter}
          alt="github"
        />
        <img
          onClick={() =>
            window.open("https://www.linkedin.com/in/awalcek/", "_blank")
          }
          className="p-5 cursor-pointer"
          src={linkedin}
          alt="linkedin"
        />
        <a href="mailto: ameliawalcek@gmail.com">
          <img className="p-5 cursor-pointer" src={email} alt="email" />
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
