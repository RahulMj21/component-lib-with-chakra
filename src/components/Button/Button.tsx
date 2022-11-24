import { Button as ChakraBtn, ButtonProps } from "@chakra-ui/react";
import React from "react";
import "./Button.scss";

export interface BtnProps
    extends Omit<React.HTMLAttributes<HTMLButtonElement>, "color">,
        ButtonProps {
    children: string;
    ref?: React.LegacyRef<HTMLButtonElement>;
}

const Button = ({ children, ...props }: BtnProps) => {
    return <ChakraBtn {...props}>{children}</ChakraBtn>;
};

export default Button;

<Button>hello</Button>;
