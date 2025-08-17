import Image from "next/image";
import ListSurah from "./components/list-surah";
import Footer from "./components/footer";

export default function Home() {
  return (
    <section>
      <h1>Bacalah Al-Quran</h1>
      <ListSurah />
      <Footer />
    </section>
  );
}
