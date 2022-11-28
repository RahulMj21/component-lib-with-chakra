import React from "react";
import { Story } from "@storybook/react";
import ButtonUnderlined, { BtnProps } from "./ButtonUnderlined";

export default {
    title: "ButtonUnderlined",
    component: ButtonUnderlined,
};

const Template: Story<BtnProps> = (args) => <ButtonUnderlined {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "MtechZilla",
    colorScheme: "teal",
};
