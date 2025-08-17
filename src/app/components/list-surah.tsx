import Link from "next/link";

type Surah = {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: {
    [key: string]: string;
  };
};

export default async function ListSurah() {
  // const BASE_URL = "https://equran.id/api/v2/surat";
  const response = await fetch("https://equran.id/api/v2/surat", {
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error("gagal mengambil data");
  }
  const data: { data: Surah[] } = await response.json();

  return (
    <div className="p-4">
      <h1>Daftar Surah</h1>
      <div className=" gap-2 ">
        {data.data.map((surah) => (
          <div key={surah.nomor} className="border grid  m-2 p-2 rounded-lg  ">
            <Link href={`/surah/${surah.nomor}`}>
              <p> No:{surah.nomor}</p>

              <h2>Nama Surah:{surah.nama}</h2>
              <p>Nama Latin:{surah.namaLatin}</p>
              <p> Jumlah Ayat:{surah.jumlahAyat}</p>
              <p>Tempat Turun Surah:{surah.tempatTurun}</p>
              <p>Arti:{surah.arti}</p>
              {/* <p>Deskripsi:{surah.deskripsi}</p> */}
              <audio controls src={surah.audioFull["03"]} className="w-full" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
