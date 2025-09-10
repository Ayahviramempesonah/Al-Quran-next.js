✦ Tentu, ini adalah kode yang telah diperbaiki untuk komponen list-surah.tsx. Kode ini menambahkan state loading dan
menggunakan Tailwind CSS untuk desain yang responsif dan modern.

Silakan salin dan tempel kode ini ke dalam file
/home/ayahtamvan/Master-Web/al-quran-project/my-app/src/app/components/list-surah.tsx:

    1 "use client";
    2 import Link from "next/link";
    3 import { useState } from "react";
    4
    5 type Surah = {
    6   nomor: number;
    7   nama: string;
    8   namaLatin: string;
    9   jumlahAyat: number;

10 tempatTurun: string;
11 arti: string;
12 deskripsi: string;
13 audioFull: {
14 [key: string]: string;
15 };
16 };
17
18 type ListSurahProps = {
19 data: { data: Surah[] };
20 };
21
22 export default function ListSurah({ data }: ListSurahProps) {
23 const [loadingSurah, setLoadingSurah] = useState<number | null>(null);
24
25 const handleClick = (nomor: number) => {
26 setLoadingSurah(nomor);
27 };
28
29 return (
30 <div className="p-4">
31 <h1 className="text-2xl font-bold text-center mb-6">Daftar Surah</h1>
32 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
33 {data.data.map((surah) => (
34 <div
35 key={surah.nomor}
36 className="relative border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300
bg-white"
37 >
38 <Link href={`/surah/${surah.nomor}`} onClick={() => handleClick(surah.nomor)}>
39 <div>
40 <div className="flex justify-between items-center mb-2">
41 <span className="text-gray-500">{surah.nomor}</span>
42 <h2 className="text-xl font-semibold text-right">{surah.nama}</h2>
43 </div>
44 <p className="text-lg">{surah.namaLatin}</p>
45 <p className="text-sm text-gray-600">
46 {surah.jumlahAyat} Ayat
47 </p>
48 <p className="text-sm text-gray-600 capitalize">
49 Diturunkan di {surah.tempatTurun}
50 </p>
51 <p className="text-sm text-gray-600">Arti: {surah.arti}</p>
52 <audio
53 controls
54 src={surah.audioFull["03"]}
55 className="w-full mt-4"
56 />
57 </div>
58 </Link>
59 {loadingSurah === surah.nomor && (
60 <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center 
      rounded-lg">
61 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
62 </div>
63 )}
64 </div>
65 ))}
66 </div>
67 </div>
68 );
69 }

Penting: Karena komponen ini sekarang menggunakan useState, ia menjadi "Client Component". Anda perlu memindahkan logika
pengambilan data (fetch) ke komponen induknya (misalnya src/app/page.tsx) dan mengirimkan data sebagai props.

Berikut adalah contoh bagaimana Anda harus memperbarui file src/app/page.tsx Anda:

    1 import ListSurah from "@/app/components/list-surah";
    2
    3 type Surah = {
    4   nomor: number;
    5   nama: string;
    6   namaLatin: string;
    7   jumlahAyat: number;
    8   tempatTurun: string;
    9   arti: string;

10 deskripsi: string;
11 audioFull: {
12 [key: string]: string;
13 };
14 };
15
16 async function getSurahData() {
17 const response = await fetch("https://equran.id/api/v2/surat", {
18 next: { revalidate: 3600 },
19 });
20 if (!response.ok) {
21 throw new Error("gagal mengambil data");
22 }
23 const data: { data: Surah[] } = await response.json();
24 return data;
25 }
26
27 export default async function Home() {
28 const surahData = await getSurahData();
29
30 return (
31 <main>
32 <ListSurah data={surahData} />
33 </main>
34 );
35 }
