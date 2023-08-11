import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/contexts/auth";
import { StandProvider } from "@/contexts/stand";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <StandProvider>
        <Head>
          <title>Cookie Stand Admin</title>
        </Head>
        <main className="flex flex-col items-center">
          <Header />
          <section className="flex-1 w-full">
            <Component {...pageProps} />
          </section>
          <Footer />
        </main>
      </StandProvider>
    </AuthProvider>
  );
}
