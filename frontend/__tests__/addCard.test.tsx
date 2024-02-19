import AdCard from "@/components/AdCard";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Counter", () => {
  it("renders the counter component", () => {
    const ad = {
      title: "Test Ad",
      picture: "testt.jpg",
      price: 100,
      link: "https://test.com",
    };
    render(<AdCard title={ad.title} picture={ad.picture} price={ad.price} link={ad.link} />);

    const title = screen.getByTestId("ad-title");
    const price = screen.getByTestId("ad-price");

    expect(title).toHaveTextContent(ad.title);
    expect(price).toHaveTextContent(ad.price.toString());
  });
});
