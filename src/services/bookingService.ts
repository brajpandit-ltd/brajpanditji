"use server";

import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { toast } from "react-toastify";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILBOX_KEY!,
});

export async function sendPujaBookingEmail(bookingDetails: any) {
  const sentFrom = new Sender("support@brajpandit.com", "Brajpandit Support");

  const recipients = [new Recipient(bookingDetails.email, bookingDetails.name)];

  const personalization = [
    {
      email: bookingDetails.email,
      data: {
        puja: {
          0: {
            day: bookingDetails.day,
            name: bookingDetails.name,
            price: bookingDetails.price,
            Package: bookingDetails.package,
          },
          day: bookingDetails.day,
        },
        booking: {
          name: bookingDetails.name,
          phone: bookingDetails.phone,
          total: bookingDetails.price,
          address: bookingDetails.address,
          subtotal: bookingDetails.price,
          order_number: bookingDetails.orderNumber || "N/A",
          booking_method: "Online",
          tracking_number: bookingDetails.trackingNumber || "N/A",
          booking_method_fee: bookingDetails.bookingMethodFee || 0,
        },
      },
    },
  ];

  try {
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject("Puja Booking Confirmation - Brajpandit!")
      .setTemplateId(process.env.TEMPLATE_ID!)
      .setPersonalization(personalization);

    await mailerSend.email.send(emailParams);
  } catch (error) {
    console.error("Error sending email:", error);
    toast.error(
      "Failed to send booking confirmation email. Please try again later Or contact support."
    );
    throw new Error("Failed to send email");
  }
}
