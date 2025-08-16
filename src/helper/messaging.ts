import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export async function sendSMS({
  to,
  message,
}: {
  to: string;
  message: string;
}) {
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to,
    });
    console.log(`SMS sent to ${to}: ${message}`);
  } catch (error) {
    console.error("Failed to send SMS:", error);
  }
}

export async function sendWhatsApp({
  to,
  message,
}: {
  to: string;
  message: string;
}) {
  try {
    await client.messages.create({
      body: message,
      from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER!}`,
      to: `whatsapp:${to}`,
    });
    console.log(`WhatsApp sent to ${to}: ${message}`);
  } catch (error) {
    console.error("Failed to send WhatsApp message:", error);
  }
}
