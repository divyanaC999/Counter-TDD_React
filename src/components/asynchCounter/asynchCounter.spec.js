import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import AsynchCounter from "./asynchCounter";

describe("Testing asynchronous counter functionality", () => {
    it("increments the counter value 0.5 seconds after Increment Button is clicked", async () => {
        const { getByTestId, getByText } = render(<AsynchCounter/>);

        fireEvent.click(getByTestId("up-button"));

        const counter = await waitFor(() => getByText("1"));

        expect(counter).toHaveTextContent("1");
    });

});