import Tafsir from "@/app/components/tafsir";

interface Ayat {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
}

async function GetTafsir(id: string) {
  const res = await fetch(`https://equran.id/api/v2/tafsir/${id}`);
  if (!res.ok) {
    alert("gagal menampilkan tafsir periksa jaringan anda");
  }
  return res.json();
}

function handleClick() {}

async function GetSurah(id: string) {
  const res = await fetch(`https://equran.id/api/v2/surat/${id}`);
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}

export default async function DetailAyat({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data } = await GetSurah(id);
  return (
    <div className="">
      <h1>Nomor Surat:{id}</h1>
      <p>Nama Surah:{data.namaLatin}</p>
      <div className="space-y-4  rounded-md border ">
        {/* {data.ayat.map((ayat: Ayat) => ( */}
        {/*   <div key={ayat.nomorAyat} className="border-b  p-4 m-2"> */}
        {/*     <h1 className="text-right rtl mb-2  text-teal-700 text-xl  p-2"> */}
        {/*       {ayat.teksArab} */}
        {/*     </h1> */}
        {/*     <p className="text-sm text-gray-600"> */}
        {/*       {ayat.nomorAyat}, {ayat.teksLatin} */}
        {/*     </p> */}
        {/*     <p className="text-sm">Artinya: &quot;{ayat.teksIndonesia}&quot;</p> */}
        {/*     <Tafsir /> */}
        {/*   </div> */}
        {/* ))} */}
        {data.ayat.map((ayat: Ayat) => (
          <Tafsir key={ayat.nomorAyat} ayat={ayat} surahId={id} />
        ))}
      </div>
    </div>
  );
}
