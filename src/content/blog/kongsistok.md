---
title: "Menembus Batas Frontend: Drama dan Pembelajaran dari Proyek Full-Stack 'KongsiStok'"
pubDate: 2026-06-20
description: "Cerita trial and error membangun aplikasi full-stack pertama, dari diskusi ide bersama AI hingga drama infrastruktur deployment yang menguras energi."
---

Setelah sekian lama berkutat di zona nyaman *frontend development*, ada satu titik di mana saya merasa menantang diri sendiri: *"Saya harus bisa membuat website yang terintegrasi langsung dengan database."* 

Keinginan itulah yang mengawali lahirnya **KongsiStok**, sebuah proyek *full-stack* pertama saya yang menjadi saksi bisu betapa seru—sekaligus melelahkannya—mengulik sisi *backend*.

---

## Validasi Ide Bersama Gemini

Proyek ini tidak dimulai dari ruang kosong. Saya mendiskusikan keresahan dan keinginan belajar saya dengan Gemini. Dari sesi diskusi interaktif tersebut, muncullah ide untuk membuat **KongsiStok**. 

Bukan sekadar web statis biasa, proyek ini dirancang untuk memiliki fungsionalitas *backend* yang utuh:
*   **Sistem Otentikasi**: Proses login dan manajemen pengguna yang aman.
*   **Integrasi Basis Data**: Menyimpan, membaca, dan memperbarui data secara dinamis.
*   **Integrasi Fitur AI**: Menyematkan kecerdasan buatan untuk menambah fungsionalitas pintar di dalamnya.

Secara total, waktu yang saya habiskan untuk membangun proyek ini memakan waktu **satu minggu lebih**. Waktu yang singkat untuk ukuran aplikasi *full-stack*, namun terasa sangat padat karena diisi dengan kolaborasi intens bersama Gemini dan metode *trial and error* yang tiada henti.

---

## Filosofi Mengulik Kode: Bersahabat dengan *Error*

Selama satu minggu lebih itu, layar monitor saya tidak pernah sepi dari pesan *error* berwarna merah. Namun, bagi saya pribadi, *error* dalam proses pembuatan program adalah hal yang sangat wajar dan biasa. Justru dari sanalah proses belajar yang sesungguhnya terjadi.

> "Malah justru patut dipertanyakan kalau sebuah kode sekali jadi tanpa ada error sama sekali. Apakah memang kitanya yang terlalu pintar, atau AI-nya yang kelewat pintar?"

Lewat tumpukan *error* di KongsiStok ini, saya dipaksa memahami alur logika *backend* secara mendalam. Saya jadi tahu bagaimana sesi login dipertahankan, bagaimana data dikirim dengan aman dari *client* ke server, hingga bagaimana menyusun struktur tabel di database agar sinkron dengan kebutuhan aplikasi.

---

## Drama *Deployment*: Dari Hampir Menyerah hingga Menemukan Solusi

Jika fase menulis kode di lokal (*localhost*) sudah terasa menantang, fase *deployment* (menaikkan website ke internet agar bisa diakses orang lain) ternyata adalah bos terakhir yang sebenarnya. Di sinilah energi saya benar-benar terkuras habis.

Awalnya, rencana saya adalah men-deploy KongsiStok ke platform **Railway**. Namun setelah kalkulasi ulang, biaya sewa VPS dan konfigurasinya terasa kurang ramah di kantong untuk proyek eksperimen mahasiswa. Akhirnya, saya memutuskan berputar arah dan mencari alternatif lain ke sana kemari.

Proses migrasi infrastruktur ini memakan waktu yang sangat banyak dan melelahkan. Mengubah arsitektur yang awalnya dipersiapkan untuk server konvensional menjadi **Serverless** di **Vercel**, ditambah dengan mengawinkannya bersama **Supabase** sebagai databasenya, memicu belasan *bug* baru yang belum pernah saya temui.

Ada satu momen di mana saya sudah berada di titik jenuh dan sangat capek. Rasanya ingin menyerah, menutup laptop, bahkan sempat terlintas pikiran untuk **menghapus saja proyek ini** saking pusingnya menyelaraskan konfigurasi *environment variables* dan *serverless functions*.

Namun, untungnya saya memilih untuk bertahan sedikit lebih lama. Setelah menolak menyerah dan terus mencari celah, solusi itu akhirnya datang juga. KongsiStok berhasil mengudara dengan mulus di atas arsitektur Vercel + Supabase secara gratis dan efisien!

---

## Refleksi Akhir

KongsiStok bukan lagi sekadar portofolio bagi saya; proyek ini adalah sebuah batu loncatan mental. Proyek ini membuktikan bahwa batas antara *frontend* dan *backend* bisa ditembus asal kita punya rasa penasaran yang cukup besar dan kepala yang cukup dingin saat menghadapi *error*.

Dari tag HTML sederhana di pertengahan 2025, hingga arsitektur *serverless* di pertengahan 2026. *Phew, what a journey!*