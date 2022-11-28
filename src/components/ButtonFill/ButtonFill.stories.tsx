import React from "react";
import { Story } from "@storybook/react";
import ButtonFill, { BtnProps } from "./ButtonFill";

export default {
    title: "ButtonFill",
    component: ButtonFill,
};

const Template: Story<BtnProps> = (args) => <ButtonFill {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "MtechZilla",
    colorScheme: "yellow",
};
