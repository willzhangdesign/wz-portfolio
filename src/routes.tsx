import { createBrowserRouter } from "react-router";
import { ScrollToTopLayout } from "./components/ScrollToTop";
import { HomePage } from "./components/HomePage";
import { NycRedesignCaseStudy } from "./components/NycRedesignCaseStudy";
import { RtpiPoleCaseStudy } from "./components/RtpiPoleCaseStudy";
import { BusShelterCaseStudy } from "./components/BusShelterCaseStudy";
import { VanguardCaseStudy } from "./components/VanguardCaseStudy";
import { DesignSystemCaseStudy } from "./components/DesignSystemCaseStudy";

export const router = createBrowserRouter([
  {
    Component: ScrollToTopLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/case-study/nyc-redesign",
        Component: NycRedesignCaseStudy,
      },
      {
        path: "/case-study/rtpi-pole",
        Component: RtpiPoleCaseStudy,
      },
      {
        path: "/case-study/bus-shelter",
        Component: BusShelterCaseStudy,
      },
      {
        path: "/case-study/vanguard",
        Component: VanguardCaseStudy,
      },
      {
        path: "/case-study/design-system",
        Component: DesignSystemCaseStudy,
      },
    ],
  },
]);
