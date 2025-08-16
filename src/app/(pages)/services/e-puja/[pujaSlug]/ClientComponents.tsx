"use client";

import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/common";

export const ScrollButton = ({
  className,
  label,
}: {
  className: string;
  label: string;
}) => {
  return (
    <Button
      label={label}
      variant="primary"
      size="medium"
      className="mt-4"
      icon={<IoIosArrowRoundForward size={30} />}
      iconPosition="right"
      onClick={() =>
        document
          .querySelector("." + className)
          ?.scrollIntoView({ behavior: "smooth" })
      }
    />
  );
};
