# David — Personal Portfolio Web 

Web portofolio personal yang dirancang dengan pendekatan minimalis, kedap bising visual, cepat, dan sepenuhnya bebas dari *bloatware*. Dibangun menggunakan **Astro**, **Tailwind CSS**, dan **TypeScript**.

> Live Preview: https://david-portofolio-iota.vercel.app/  

## Fitur Unggulan

- **High Performance:** Dioptimalkan menggunakan Astro untuk menghasilkan static HTML murni dengan hidrasi JavaScript seminimal mungkin.
- **Adaptive Favicon:** Menggunakan kode SVG murni adaptif yang warnanya otomatis berubah mengikuti tema *light/dark mode* pada browser pengunjung.
- **Automated Blog Rendering:** Manajemen artikel menggunakan Astro Content Collections yang ter-render otomatis berdasarkan tanggal rilis terbaru.
- **Interactive Mini-CLI (Easter Egg):** Simulator terminal rahasia ala Linux yang bisa diakses secara global dengan menekan tombol backtick (`` ` ``). Coba ketik `neofetch`, `skills`, atau `sudo rm -rf /` di dalamnya!

## Alat Tempur (Tech Stack)

- **Framework:** [Astro v4](https://astro.build/) (Static Site Generator)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons & Fonts:** Font monospaced bawaan sistem & Lucide Icons

## Struktur Proyek

```text
/
├── public/              # Aset statis (favicon-clean.svg, avatar, gambar)
├── src/
│   ├── content/         # Sumber data Markdown untuk artikel blog
│   │   └── blog/
│   ├── layouts/         # Layout utama web (Termasuk skrip CLI Terminal)
│   │   └── Layout.astro
│   └── pages/           # Sistem routing otomatis Astro
│       ├── index.astro  # Halaman Home (Projek Pilihan & Catatan)
│       ├── about.astro  # Halaman Tentang Saya & Tabel Spesifikasi
│       ├── projects.astro # Halaman Arsip Projek & Fitur Live Sorting
│       └── blog/        # Halaman Blog & Dinamis Post
└── package.json
```

## Cara Menjalankan di Lokal
Jika kamu ingin melakukan cloning dan menjalankan proyek ini di mesin lokalmu, ikuti langkah berikut:

1. Clone repositori ini:
```bash
git clone [https://github.com/davidkhasbiya/portfolio.git](https://github.com/davidkhasbiya/portfolio.git)
cd portfolio
```

2. Pasang dependensi:
```bash
npm install
```

3. Jalankan server development lokal:
```bash
npm run dev
```
Buka http://localhost:4321 di browsermu.

4. Kompilasi untuk produksi (Build):
```bash
npm run build
```
Hasil kompilasi final yang bersih dan siap di-deploy akan berada di direktori ./dist/.

Dibuat dengan ☕ dan semangat ngulik oleh Ahmad David Khasbiya.
