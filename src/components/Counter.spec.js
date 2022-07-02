import React from "react";
import { fireEvent, getByTest, render, } from "@testing-library/react";
import Counter from "./Counter";

describe("Basic rendering of counter", () => {
    it("Should render Counter value", () => {
        const counter = render(<Counter />);

        const counterValue = counter.findByText(Text);

       expect(counterValue).toBeDefined();
  
});

      it("Should equal to 0", () => {
      const component = render(<Counter />);
      expect(component.getByTestId("Counter")).toHaveTextContent(0);
});

      it ("Should be able to increament", () => {
        const { getByTestId } = render(<Counter />);
        expect(getByTestId("up-button")).not.toHaveAttribute("disabled");

      });
      it("Should be able to decreament", () => {
        const { getByTestId } = render(<Counter />);
        expect(getByTestId("down-button")).not.toHaveAttribute("disabled");

      });
 });

 describe("Testing counter functionality", () => {
    it("increament the counter when Increament button is pressed", () => {
       const { getByTestId } = render(<Counter />);

        fireEvent.click(getByTestId("up-button"));

        expect( getByTestId ("Counter")).toHaveTextContent("1");

    });

    it("decrements the counter when Decrement button is pressed", () => {
      const { getByTestId } = render (<Counter/>);

      fireEvent.click(getByTestId("down-button"));

      expect( getByTestId ("Counter")).toHaveTextContent("-1");
    });

    });
 
