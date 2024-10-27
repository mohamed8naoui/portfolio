"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
// import { sendEmail } from "@/server/actions";
import { PiSpinner } from "react-icons/pi";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const sendEmailEvent = async (event) => {
  //   event.preventDefault();

  //   setIsLoading(true);
  //   const formData = new FormData(event.currentTarget);
  //   const response = await sendEmail(formData);
  //   if (response.success) {
  //     setStatusMessage("");
  //     Swal.fire({
  //       icon: "success",
  //       title: "Message sent!",
  //       text: `Thanks for your message ${formData.get(
  //         "fullname"
  //       )} ! I'll get back to you as soon as possible.`,
  //     });
  //     event.target.reset();
  //   } else {
  //     setStatusMessage(response.message);
  //   }
  //   setIsLoading(false);
  // };
  return (
    <div className="w-full">
      {/* <form className="my-8 space-y-5" onSubmit={sendEmailEvent}> */}
      <form className="my-8 space-y-5">
        <LabelInputContainer>
          <Label htmlFor="firstname">Full name</Label>
          <Input
            id="firstname"
            placeholder="Who am I chatting with today?"
            type="text"
            name="fullname"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="Let's keep in touch via email"
            type="email"
            name="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Your Message</Label>
          <Textarea
            id="message"
            placeholder="What's brewing in your mind?..."
            name="message"
            rows={5}
          />
        </LabelInputContainer>

        {statusMessage && (
          <p className="text-sm text-red-600">{statusMessage}</p>
        )}

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <PiSpinner className="w-5 h-5 animate-spin" />
              <span>loading</span>
            </span>
          ) : (
            <span>Contact &rarr;</span>
          )}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
