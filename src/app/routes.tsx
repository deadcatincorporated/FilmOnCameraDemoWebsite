import { createBrowserRouter } from "react-router";
import { MemberLayout, SiteLayout } from "./components";
import {
  About,
  Academy,
  Calendar,
  Charter,
  Checkout,
  Community,
  Home,
  Live,
  MemberOverview,
  Membership,
  NotFound,
  Partners,
  Studio,
  Thread,
} from "./screens";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SiteLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "membership", Component: Membership },
      { path: "charter-150", Component: Charter },
      { path: "checkout", Component: Checkout },
      {
        path: "member",
        Component: MemberLayout,
        children: [
          { index: true, Component: MemberOverview },
          { path: "community", Component: Community },
          { path: "community/first-set", Component: Thread },
          { path: "studio", Component: Studio },
          { path: "live", Component: Live },
          { path: "calendar", Component: Calendar },
          { path: "academy", Component: Academy },
          { path: "partners", Component: Partners },
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
