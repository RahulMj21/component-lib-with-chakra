import React from "react";
import "./Button.scss";
import { Button as ChakraBtn, ButtonProps } from "@chakra-ui/react";

export interface BtnProps
    extends React.HTMLAttributes<HTMLButtonElement & ButtonProps> {
    children: string;
}

const Button = ({ children, ...props }: BtnProps) => {
    return <ChakraBtn {...props}>{children}</ChakraBtn>;
};

export default Button;
