import { Fragment } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Fragment>
      <div>Hello "__root"!</div>
      <Outlet />
    </Fragment>
  );
}
