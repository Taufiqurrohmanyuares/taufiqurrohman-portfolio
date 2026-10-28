# Portfolio Taufiqurrohman Yuares (Next.js 16)

Next.js 16.4 (App Router) + React 19 + TypeScript. Tanpa library animasi: semua motion memakai CSS dan IntersectionObserver/scroll handler sendiri.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Butuh Node.js 20.9 atau lebih baru. Font (Manrope & Instrument Serif) diunduh lewat `next/font/google`, jadi build pertama perlu internet.

## Mengubah isi

Semua teks ada di folder `data/`, tidak perlu menyentuh komponen:

| File | Isi |
|---|---|
| `data/site.ts` | Nama, kontak, sosial media, peran yang mengetik, skills, kalimat pernyataan, teks About |
| `data/experience.ts` | Kartu Experiences |
| `data/projects.ts` | Project (judul, tag, deskripsi, problem, impact, tautan repo/demo) |
| `data/certificates.ts` | Sertifikat |
| `data/tracks.ts` | Playlist musik |

Gambar ada di `public/images`, lagu di `public/music`, CV di `public/cv.pdf`. Untuk menambah project atau sertifikat: taruh gambarnya di `public/images/...` lalu tambah satu objek di file datanya. Tombol Source Code atau Live Demo otomatis hilang kalau tautannya `"#"`.

## Struktur

```
app/            layout (font, metadata), page, globals.css
components/     Header, Hero, Player, Statement, About, Experience, Projects, Certificates, Contact
                Reveal (animasi muncul), Ghost (judul raksasa), SectionHead
lib/scroll.ts   hook useScroll (satu handler scroll per frame)
data/           semua konten
public/         gambar, musik, cv.pdf
```

## Catatan

- File lagu di `public/music` memakai file asli (sekitar 29 MB total). Kalau ingin ringan, kompres dengan ffmpeg atau kurangi jumlah lagunya.
- Gambar memakai tag `<img>` biasa (sudah dikonversi ke WebP). Bisa diganti `next/image` bila perlu.
- Semua animasi otomatis nonaktif untuk pengunjung dengan pengaturan "reduce motion".
- Deploy paling mudah lewat Vercel (import repo, tanpa konfigurasi tambahan).
