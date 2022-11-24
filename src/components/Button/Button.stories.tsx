import React from "react";
import { Story } from "@storybook/react";
import Button, { BtnProps } from "./Button";

export default {
    title: "Button",
    component: Button,
};

const Template: Story<BtnProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "MtechZilla",
};
