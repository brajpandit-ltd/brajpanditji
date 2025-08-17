import React from "react";

// The key must be pujaSlug, not serviceSlug!
export async function generateStaticParams() {
  return [
    { pujaSlug: "rudrakshya" },
    { pujaSlug: "zodiac" },
    { pujaSlug: "wealth" },
    // ...add all possible slugs you want to statically generate
  ];
}

const Page = ({ params }: { params: any }) => {
  return <div>Puja page for: {params.pujaSlug}</div>;
};

export default Page;
