import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/Provider"

export default function Home() {
  return (
    <>
    <AuthProvider>
    <Navbar />
    <main className="relative overflow-hidden">
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
      </main>
      <Footer />
      </AuthProvider>
    </>
  )
}

