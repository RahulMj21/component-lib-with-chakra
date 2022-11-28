import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";
import "./ButtonFill.scss";

export interface BtnProps
    extends Omit<React.HTMLAttributes<HTMLButtonElement>, "color">,
        Omit<ButtonProps, "variant"> {
    children: React.ReactNode;
    ref?: React.LegacyRef<HTMLButtonElement>;
}

const ButtonFill = ({ children, ...props }: BtnProps) => {
    return (
        <Button
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

export default ButtonFill;
