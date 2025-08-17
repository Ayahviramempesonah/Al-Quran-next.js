// import { NextRequest, NextResponse } from "next/server";
//
// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: string } },
// ) {
//   const { id } = params;
//
//   if (!id) {
//     return NextResponse.json({ error: "ID Surah diperlukan" }, { status: 400 });
//   }
//
//   try {
//     const res = await fetch(`https://equran.id/api/v2/tafsir/${id}`, {
//       // headers: {
//       //   "Content-Type": "application/json",
//       // },
//     });
//
//     if (!res.ok) {
//       // Teruskan status error dari API  eksternal jika ada
//       return NextResponse.json(
//         { error: `Gagal mengambil data tafsir: ${res.statusText}` },
//         { status: res.status },
//       );
//     }
//
//     const data = await res.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("Proxy API Error:", error);
//     return NextResponse.json(
//       { error: "Terjadi kesalahan pada server proxy" },
//       { status: 500 },
//     );
//   }
// }
//

import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "ID Surah diperlukan" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://equran.id/api/v2/tafsir/${id}`, {
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });

    if (!res.ok) {
      // Teruskan status error dari API eksternal jika ada
      return NextResponse.json(
        { error: `Gagal mengambil data tafsir: ${res.statusText}` },
        { status: res.status },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Proxy API Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server proxy" },
      { status: 500 },
    );
  }
}
