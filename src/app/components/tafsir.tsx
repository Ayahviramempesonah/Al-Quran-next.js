"use client";

import { useState } from "react";

interface Ayat {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
}

interface Tafsir {
  ayat: number;
  teks: string;
}

async function getTafsirForAyat(
  surahId: string,
  ayatNumber: number,
): Promise<string> {
  // const res = await fetch(`https://equran.id/v2/tafsir/${surahId}`);
  const res = await fetch(`/api/tafsir/${surahId}`);
  if (!res.ok) {
    throw new Error("gagal mendapatkan data: periksa koneksi internet");
  }
  const data = await res.json();
  const tafsirAyat = data.data.tafsir.find(
    (t: Tafsir) => t.ayat === ayatNumber,
  );
  return tafsirAyat ? tafsirAyat.teks : "tafsir tidak ditemukan";
}

export default function Tarsir({
  ayat,
  surahId,
}: {
  ayat: Ayat;
  surahId: string;
}) {
  const [tafsir, setTafsir] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showTafsir, setShowTafsir] = useState<boolean>(false);

  const handleTafsirClick = async () => {
    const newShowTafsir = !showTafsir;
    setShowTafsir(newShowTafsir);
    if (newShowTafsir && !tafsir) {
      setIsLoading(true);
      setError(null);
      try {
        const tafsirText = await getTafsirForAyat(surahId, ayat.nomorAyat);
        setTafsir(tafsirText);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="border-b-teal-400  m-2  rounded border-md bg-linear-65 from-cyan-500 to-blue-500 ">
      <div className="bg-linear-65 from-violet-500 to-fuchsia-500 border-md rounded-md">
        <h1 className="text-right rtl mb-2  text-xl p-2 ">{ayat.teksArab}</h1>
        <p className="text-sm text-gray-600">
          {ayat.nomorAyat},{ayat.teksLatin}
        </p>
        <p className="text-sm">Artinya: &quot;{ayat.teksIndonesia}&quot;</p>
        <button
          onClick={handleTafsirClick}
          className="border bg-blue-400 p-1 m-2 rounded hover:bg-blue-500 transition-colors"
        >
          {showTafsir ? "Sembunyikan Tafsir" : "Tampilkan Tafsir"}
        </button>

        {showTafsir && (
          <div className="">
            {isLoading && <p>Memuat Tafsir...</p>}{" "}
            {error && <p className="text-red-500">{error}</p>}
            {tafsir && (
              <p className="text-sm bg-linear-65 from-cyan-500 to-blue-500">
                {tafsir}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
