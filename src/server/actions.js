"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  console.log(formData);
  try {
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "naoui10semo@gmail.com",
      subject: `New email comes from your portfolio from ${formData.get(
        "fullname"
      )}`,
      html: formData.get("message"),
    });
    return {
      success: data,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
};
