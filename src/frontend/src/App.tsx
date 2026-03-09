import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { DocumentDetailPage } from "./pages/DocumentDetailPage";
import { HomePage } from "./pages/HomePage";
import { LawDetailPage } from "./pages/LawDetailPage";
import { LawPage } from "./pages/LawPage";
import { LegalDocumentsPage } from "./pages/LegalDocumentsPage";
import { LegalServicesPage } from "./pages/LegalServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";

// Root layout component
function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

// Route definitions
const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const legalDocumentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/legal-documents",
  component: LegalDocumentsPage,
});

const documentDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/legal-documents/$id",
  component: DocumentDetailPage,
});

const legalServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/legal-services",
  component: LegalServicesPage,
});

const serviceDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/legal-services/$id",
  component: ServiceDetailPage,
});

const lawRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/law",
  component: LawPage,
});

const lawDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/law/$id",
  component: LawDetailPage,
});

// Build route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  legalDocumentsRoute,
  documentDetailRoute,
  legalServicesRoute,
  serviceDetailRoute,
  lawRoute,
  lawDetailRoute,
]);

// Create router
const router = createRouter({ routeTree });

// Type declaration for router
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
