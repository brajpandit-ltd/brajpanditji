import { apiHandler } from "@/helper/apiHandler";

export const services = {
  ePujas: (search: string = "", isServer = true) =>
    apiHandler(
      `${isServer ? process.env.API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL}/api/services/e-pooja/?${search}`,
      {
        cache: "default",
      }
    ),
  ePuja: (pujaSlug: string, isServer = true) => {
    if (!pujaSlug) return;

    return apiHandler(
      `${isServer ? process.env.API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL}/api/services/e-pooja/${pujaSlug}`,
      {
        cache: "default",
      }
    );
  },
  personalisedPujas: (search: string = "", isServer = true) =>
    apiHandler(
      `${isServer ? process.env.API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL}/api/services/personalised-pujas/${search}`,
      {
        cache: "default",
      }
    ),
  personalisedPuja: (pujaSlug: string, isServer = true) =>
    apiHandler(
      `${isServer ? process.env.API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL}/api/services/personalised-pujas/${pujaSlug}`,
      {
        cache: "default",
      }
    ),

  pujaBooking: (body: any, isServer = true) =>
    apiHandler(
      `${isServer ? process.env.API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL}/api/services/puja-booking`,
      {
        cache: "default",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    ),

  // pandits: (isServer = true) =>
  //   apiHandler(
  //     `${isServer ? process.env.API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL}/api/pandits`,
  //     {
  //       cache: "default",
  //     }
  //   ),
  // pandit: (isServer = true) =>
  //   apiHandler(
  //     `${isServer ? process.env.API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL}/api/pandits?status=approved`,
  //     {
  //       cache: "default",
  //     }
  //   ),
};

export default services;
