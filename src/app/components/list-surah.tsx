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
  const response = await fetch("https://equran.id/api/v2/surat", {
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error("gagal mengambil data");
  }
  const data: { data: Surah[] } = await response.json();

  return (
    <div className="p-0 m-2  ">
      <h1 className="items-center text-center font-bold">
        {" "}
        <strong>Daftar Surah</strong>
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 overflow-auto bg-linear-to-r from-cyan-500 to-blue-500 ">
        {data.data.map((surah) => (
          <div
            key={surah.nomor}
            className="border grid  m-2 p-2 rounded-lg bg-linear-65 from-violet-500 to-fuchsia-500 "
          >
            <Link href={`/surah/${surah.nomor}`}>
              <p> No:{surah.nomor}</p>

              <h2>Nama Surah:{surah.nama}</h2>
              <p className="">Nama Latin:{surah.namaLatin}</p>
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
