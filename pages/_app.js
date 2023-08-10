import "@/styles/globals.css";
import { AuthProvider } from "@/contexts/auth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StandProvider } from "@/contexts/stand";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <StandProvider>
        <Component {...pageProps} />
      </StandProvider>
    </AuthProvider>
  );
}
