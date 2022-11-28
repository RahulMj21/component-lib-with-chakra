import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";
import "./ButtonUnderlined.scss";

export interface BtnProps
    extends Omit<React.HTMLAttributes<HTMLButtonElement>, "color">,
        Omit<ButtonProps, "variant"> {
    children: React.ReactNode;
    ref?: React.LegacyRef<HTMLButtonElement>;
}

const ButtonUnderlined = ({ children, ...props }: BtnProps) => {
    return (
        <Button
            variant="link"
            borderBottom="2px solid"
            borderRadius="0"
            iconSpacing={0}
            display="flex"
            alignItems="center"
            gap={2}
            _hover={{ backdropBrightness: "100%" }}
            _active={{ backdropBrightness: "100%" }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default ButtonUnderlined;
