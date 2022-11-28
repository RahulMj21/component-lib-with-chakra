import React from "react";
import { Story } from "@storybook/react";
import ButtonOutlined, { BtnProps } from "./ButtonOutlined";

export default {
    title: "ButtonOutlined",
    component: ButtonOutlined,
};

const Template: Story<BtnProps> = (args) => <ButtonOutlined {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "MtechZilla",
    colorScheme: "teal",
};
