import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, useRouteError } from "react-router";
import { ScrollToTopLayout } from "./components/ScrollToTop";
import { PasswordGate } from "./components/PasswordGate";
import { HomePage } from "./components/HomePage";

function ChunkErrorBoundary() {
  const error = useRouteError() as Error & { name?: string };
  useEffect(() => {
    if (
      error?.message?.includes("Failed to fetch dynamically imported module") ||
      error?.name === "ChunkLoadError"
    ) {
      window.location.reload();
    }
  }, [error]);
  return null;
}

const NycRedesignCaseStudy = lazy(() => import("./components/NycRedesignCaseStudy").then(m => ({ default: m.NycRedesignCaseStudy })));
const RtpiPoleCaseStudy = lazy(() => import("./components/RtpiPoleCaseStudy").then(m => ({ default: m.RtpiPoleCaseStudy })));
const BusShelterCaseStudy = lazy(() => import("./components/BusShelterCaseStudy").then(m => ({ default: m.BusShelterCaseStudy })));
const VanguardCaseStudy = lazy(() => import("./components/VanguardCaseStudy").then(m => ({ default: m.VanguardCaseStudy })));
const DesignSystemCaseStudy = lazy(() => import("./components/DesignSystemCaseStudy").then(m => ({ default: m.DesignSystemCaseStudy })));

function SuspenseWrapper({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export const router = createBrowserRouter([
  {
    Component: ScrollToTopLayout,
    errorElement: <ChunkErrorBoundary />,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        Component: PasswordGate,
        children: [
          {
            path: "/case-study/nyc-redesign",
            element: <SuspenseWrapper><NycRedesignCaseStudy /></SuspenseWrapper>,
          },
          {
            path: "/case-study/rtpi-pole",
            element: <SuspenseWrapper><RtpiPoleCaseStudy /></SuspenseWrapper>,
          },
          {
            path: "/case-study/bus-shelter",
            element: <SuspenseWrapper><BusShelterCaseStudy /></SuspenseWrapper>,
          },
          {
            path: "/case-study/vanguard",
            element: <SuspenseWrapper><VanguardCaseStudy /></SuspenseWrapper>,
          },
          {
            path: "/case-study/design-system",
            element: <SuspenseWrapper><DesignSystemCaseStudy /></SuspenseWrapper>,
          },
        ],
      },
    ],
  },
]);
