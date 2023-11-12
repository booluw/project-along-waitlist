import { createClient } from "@supabase/supabase-js";
import gsap from "gsap";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const handleForm = function (formInstance) {
  const animateError = function (text = "Email is not valid") {
    formInstance.querySelector("button").disabled = false;
    formInstance.querySelector("button").innerHTML = "Join Waitlist";
    formInstance.parentNode.querySelector("p").textContent = text;
    gsap.to(formInstance.parentNode.querySelector(".form__error"), {
      opacity: 1,
      duration: 0.3,
      ease: "sine.in",
    });
  };

  const animateSuccess = function () {
    const form = document.querySelectorAll(".form");
    const success = document.querySelectorAll(".form__success");
    gsap.to(form, {
      display: "none",
      duration: 0.3,
      ease: "sine.out",
    });

    gsap.to(success, {
      opacity: 1,
      duration: 1,
      translateY: "-5rem",
      ease: "sine.in",
    });
  };

  const submitForm = async function (event) {
    event.preventDefault();

    const email = formInstance.firstElementChild.value;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    gsap.to(formInstance.parentNode.querySelector("p"), {
      opacity: 0,
      duration: 0.3,
      ease: "sine.in",
    });

    if (regex.test(email)) {
      formInstance.querySelector("button").disabled = true;
      formInstance.querySelector("button").innerHTML = "Submitting";
      const { data, error } = await supabase
        .from("waitlist")
        .insert({ email: email })
        .select();
      if (error) {
        if (error.code === "23505") {
          animateError("Oops, looks like you've already joined the waitlist.");
        } else if (error.code === "") {
          animateError(
            "We couldn't add your email, looks like a network problem."
          );
        } else {
          animateError(error);
        }
        return;
      }
      animateSuccess();
      return;
    } else {
      gsap.fromTo(
        formInstance,
        {
          x: "-=20",
          yoyo: true,
          duration: 0.1,
          repeat: 2,
          ease: "sine.in",
        },
        {
          x: "+=20",
          yoyo: true,
          repeat: 2,
          duration: 0.1,
          ease: "sine.out",
        }
      );
      animateError();
    }
  };

  formInstance.addEventListener("submit", (e) => submitForm(e));
};
