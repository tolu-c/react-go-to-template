import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";
import { Homepage } from "~/features/hompage/components/homepage";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Fragment>
      <title>Home Page</title>
      <Homepage />
    </Fragment>
  );
}
