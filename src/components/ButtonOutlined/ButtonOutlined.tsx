import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";
import "./ButtonOutlined.scss";

export interface BtnProps
    extends Omit<React.HTMLAttributes<HTMLButtonElement>, "color">,
        Omit<ButtonProps, "variant"> {
    children: React.ReactNode;
    ref?: React.LegacyRef<HTMLButtonElement>;
}

const ButtonOutlined = ({ children, ...props }: BtnProps) => {
    return (
        <Button
            variant="outline"
            borderWidth={2}
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

export default ButtonOutlined;
