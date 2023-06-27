const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import "../node_modules/highlight.js/styles/atelier-estuary-dark.css";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const adminPage = router.pathname.startsWith("/admin");

  const renderNav = !adminPage ? <Navbar /> : <Sidebar />;
  const renderFooter = !adminPage ? <Footer /> : null;
  return (
    <ChakraProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <div className={adminPage ? "flex" : ""}>
          {renderNav}
          <Component {...pageProps} />
          {renderFooter}
        </div>
      </ThemeProvider>
    </ChakraProvider>
  );
}
