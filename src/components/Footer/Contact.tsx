import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import sucessGif from "../../public/assets/success.gif";
import { motion } from "framer-motion";
import useInput from "@/hooks/use-input";

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const ContactForm = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [registerIsCompleted, setRegisterIsCompleted] = useState(false);
  const [dataIsSuccess, setDataIsSuccess] = useState(false);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const commentRef = useRef<HTMLTextAreaElement | null>(null);

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "" && value.length > 3);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "" && emailRegex.test(value));

  useEffect(() => {
    if (nameIsValid && emailIsValid) setFormIsValid(true);
    else setFormIsValid(false);
  }, [nameIsValid, emailIsValid]);

  const confirmRegistrationHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const comment = commentRef.current?.value;

    try {
      const data = {
        name,
        email,
        comment,
      };

      const res = await fetch('', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        console.error("Failed to submit data!");
        return;
      }

      else setDataIsSuccess(true);
    } catch (err) {
      console.error("Error submitting data", err);
    }

    resetNameInput();
    resetEmailInput();
  };
  
  const handleRegistration = () => {
    setTimeout(() => {
      setRegisterIsCompleted(!registerIsCompleted);
    }, 50);
  };

  return (
    <form
      action="https://sheetdb.io/api/v1/"
      method="post"
      id="sheetdb-form"
      onSubmit={confirmRegistrationHandler}
      className="inner-wrapper-container space-y-8 text-white bg-black/20 rounded-xl max-w-7xl mb-10"
    >
      {!dataIsSuccess && (
        <>
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-12 md:space-x-16 lg:space-x-36 space-y-4 sm:space-y-0 w-full justify-between">
            <label htmlFor="Name" className="w-full">
              <input
                type="text"
                name="data[name]"
                id="name"
                className={`input-group flex ${nameHasError ? "invalid" : ""}`}
                size={40}
                placeholder="Name and Surname"
                ref={nameRef}
                value={enteredName}
                onBlur={nameInputBlurHandler}
                onChange={nameInputChangeHandler}
              />
              {nameHasError && (
                <p className="py-2 invalid-text">
                  Invalid Name (It needs to be at least 4 characters long)
                </p>
              )}
            </label>
            <label htmlFor="Email" className="w-full">
              <input
                type="email"
                name="data[email]"
                id="email"
                className={`input-group ${emailHasError ? "invalid" : ""}`}
                size={40}
                placeholder="Email"
                ref={emailRef}
                value={enteredEmail}
                onBlur={emailInputBlurHandler}
                onChange={emailInputChangeHandler}
              />
              {emailHasError && (
                <p className="py-2 invalid-text">
                  Invalid Email (Please check the format) -
                  [something@domain.subdomain]
                </p>
              )}
            </label>
          </div>

          <label htmlFor="Comment" className="space-y-2 w-full">
            <textarea
              id="comment"
              name="data[comment]"
              rows={5}
              cols={100}
              placeholder="Interested in collaborating on a project or sharing opportunities? Let’s connect!"
              className="rounded-xl input-group text-[#ffd700]"
              ref={commentRef}
            />
          </label>
          {registerIsCompleted && <span className="loader"></span>}
          {registerIsCompleted || (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              disabled={!formIsValid}
              onClick={handleRegistration}
              className={`text-[#ffd700] text-[0.75rem] sm:text-[1rem] lg:text-[1.15rem] xl:text-[1.25rem] rounded-full px-8 py-3 tracking-wider hover:bg-gradient-to-br hover:from-blue-800/20 hover:to-[#ffd700]/30 hover:text-[#ffd700] border-2 border-[#ffd700] ${
                formIsValid
                  ? "cursor-pointer"
                  : "cursor-not-allowed border-2 hover:border-red-700"
              }`}
            >
              Contact me
            </motion.button>
          )}
        </>
      )}
    </form>
  );
};

export default ContactForm;
