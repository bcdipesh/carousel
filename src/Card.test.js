import { render } from "@testing-library/react";
import Card from "./Card";

// Smoke test
it("renders Card component", function () {
  render(
    <Card
      caption="Lorem Ipsum Caption"
      src="lorem-ipsum"
      currNum={1}
      totalNum={2}
    />
  );
});

// Snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(
    <Card
      caption="Lorem Ipsum Caption"
      src="lorem-ipsum"
      currNum={1}
      totalNum={2}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
