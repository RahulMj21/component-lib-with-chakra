import { render } from "@testing-library/react";
import React from "react";

import Button from "./ButtonFill";

describe("Button", () => {
    test("testing the Button component", () => {
        render(<Button>MTechZilla</Button>);
    });
});
