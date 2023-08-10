import Head from "next/head";
import { useAuth } from "@/contexts/auth";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hourlySales } from "@/data/data";
import CookieStandAdmin from "@/components/CookieStandAdmin";
import LoginForm from "@/components/LoginForm";
import { useStand } from "@/contexts/stand";

export default function Home() {
  const { standData } = useStand();
  const { user, login } = useAuth();

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center">
        {/* {user ? <CookieStandAdmin data={standData} update={setStandData} /> : <LoginForm onLogin={login} />} */}
        <CookieStandAdmin />
      </main>
      <Footer />
    </>
  );
}
