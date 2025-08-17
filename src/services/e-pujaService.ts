import data from "@/constants/ePujas.json";
import { getUrl } from "@/utils/unitsFun";

export const getEPujas = (search: string, isServer: boolean) => {
  const { searchParams } = getUrl(search, isServer);
  const { ePujas: upcommingPujas } = data;

  const type = searchParams.get("type");
  const category = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("searchQuery") || "";

  const filteredPoojaServices = upcommingPujas.filter((pooja) => {
    if (category === "all")
      return pooja.title.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      pooja.category?.includes(category) &&
      pooja.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const sortedPujas = filteredPoojaServices.map((pooja) => ({
    title: pooja.title,
    slug: pooja.slug,
    subtitle: pooja.subtitle,
    bannerImage: pooja.bannerImage,
    location: pooja.location,
  }));

  return {
    success: true,
    message: "Success",
    data: type === "all" ? filteredPoojaServices : sortedPujas,
  };
};

export const getEPuja = (slug: string, isServer: boolean) => {
  console.log(isServer, slug);
  const { ePujas: upcommingPujas } = data;

  const epooja = upcommingPujas.find((pooja) => pooja.slug === slug);

  if (!epooja) {
    return {
      success: false,
      message: "Pooja not found",
      data: null,
    };
  }

  return {
    success: true,
    message: "Success",
    data: epooja,
  };
};

export const generateStaticParamsEPuja = () => {
  const { ePujas: upcommingPujas } = data;

  return upcommingPujas.map((pooja) => ({
    pujaSlug: pooja.slug,
  }));
};
