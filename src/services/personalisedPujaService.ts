import data from "@/constants/pujaServices.json";
import { getUrl } from "@/utils/unitsFun";

export const getPersonalisedPujas = (search: string, isServer: boolean) => {
  const { searchParams } = getUrl(search, isServer);

  const category = searchParams.get("category")?.toLowerCase();
  console.log(category);

  const filteredPoojaServices = data.poojaServices.filter((pooja) => {
    if (category === "" || !category) {
      return true;
    }

    return pooja.category.toLowerCase().includes(category);
  });

  return {
    success: true,
    message: "Success",
    data: filteredPoojaServices,
  };
};

export const getPersonalisedPuja = (slug: string, isServer: boolean) => {
  console.log(isServer);
  const { poojaServices } = data;

  const puja = poojaServices.find((pooja) => pooja.slug === slug);

  if (!puja) {
    return {
      success: false,
      message: "Service Not found, Please try again.",
      data: null,
    };
  }

  return {
    success: true,
    message: "success",
    data: puja,
  };
};
