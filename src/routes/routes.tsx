import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import { lazy, Suspense } from "react";

const GameDetailPage = lazy(() => import("../pages/GameDetailPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games/:slug",
        element: (
          <Suspense fallback={<div>Lading...</div>}>
            <GameDetailPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
