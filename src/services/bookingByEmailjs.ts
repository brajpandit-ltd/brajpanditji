import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export const sendEmailByEmailjs = async (bookingDetails: any) => {
  const templateParams = {
    order_id: bookingDetails.orderNumber,
    day: bookingDetails.day,
    price: bookingDetails.price,
    name: bookingDetails.name,
    email: bookingDetails.email,
    puja: bookingDetails.puja.label,
    package: bookingDetails.packageId,
    address: bookingDetails.address,
    gotra: bookingDetails.gotra,
  };

  try {
    await emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error: any) => {
          toast.error("Failed to send email: " + error.text);
          console.log("FAILED...", error.text);
        }
      );
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
