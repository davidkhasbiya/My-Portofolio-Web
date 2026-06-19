---
title: "Dari ERD ke Website Kontemporer: Seni Merancang Basis Data Tanpa Redundansi"
description: "Mengulas kembali esensi mata kuliah Basis Data di semester 2: Alur terstruktur dari blueprint ERD, proses normalisasi (1NF-3NF), implementasi SQL, hingga menjembataninya ke aplikasi web."
pubDate: "2026-06-17"
---

Jika materi Sistem Operasi mengajarkan saya bagaimana mengelola *resource* di dalam komputer, maka mata kuliah **Basis Data** di semester 2 ini memberikan sudut pandang baru tentang bagaimana sebuah informasi harus dikelola secara efisien, aman, dan terstruktur.

Satu hal penting yang saya sadari: **Membuat database yang asal jalan itu mudah, tetapi merancang arsitektur database yang bersih, efisien, dan bebas dari redundansi adalah sebuah seni tersendiri.**

Berikut adalah tahapan esensial yang saya pelajari dalam menyusun arsitektur data dari sebuah coretan abstrak hingga menjadi sistem yang hidup di dalam aplikasi web.

## 1. Tahap Desain: Menemukan Hubungan Lewat ERD

Sebelum menyentuh baris kode SQL atau membuka DBMS, segalanya dimulai dari selembar kertas atau *canvas* digital (seperti dbdiagram.io atau Figma). Di sinilah **ERD (Entity Relationship Diagram)** berperan sebagai *blueprint*.

Melalui ERD, kita dipaksa untuk memahami *business logic* dari aplikasi yang ingin kita buat. Kita memetakan entitas (objek), atribut (karakteristik), dan yang paling seru adalah menentukan relasi antar tabel—apakah itu *One-to-One*, *One-to-Many*, atau *Many-to-Many*. ERD yang matang akan menyelamatkan kita dari kepusingan *refactoring* kode di kemudian hari.

## 2. Tahap Pembersihan: Diet Data Lewat Normalisasi (1NF, 2NF, 3NF)

Ini adalah bagian favorit saya karena prinsipnya sangat memuaskan: **Menghilangkan "bloatware" data**. Tanpa proses normalisasi, database kita rawan terkena anomali (bisa terjadi eror saat *insert*, *update*, atau *delete*) dan pemborosan ruang penyimpanan karena data yang sama ditulis berulang-ulang.

Saya mempelajari tiga tahapan krusial untuk mendisiplinkan struktur tabel:
* **1NF (First Normal Form):** Memastikan tidak ada grup yang berulang dan setiap atribut hanya menyimpan satu nilai atomik tunggal (tidak ada data bertumpuk dalam satu sel).
* **2NF (Second Normal Form):** Memenuhi syarat 1NF dan memastikan semua atribut non-key bergantung penuh pada *Primary Key* utama, bukan hanya sebagian.
* **3NF (Third Normal Form):** Tahap akhir di mana kita menghilangkan *transitive dependency*—artinya, tidak boleh ada field non-key yang bergantung pada field non-key lainnya. Jika ada, field tersebut harus dipisah ke tabel baru.

Hasilnya? Struktur data menjadi ramping, performa kueri meningkat, dan integritas data terjaga 100%.

## 3. Tahap Eksekusi: Berbicara dengan Bahasa SQL (DDL & DML)

Setelah arsitekturnya rapi di atas kertas, barulah kita mengeksekusinya ke dalam sistem menggunakan SQL (*Structured Query Language*). Di sini saya belajar memisahkan dua fungsionalitas utama bahasa database:

* **DDL (Data Definition Language):** Perintah seperti `CREATE`, `ALTER`, dan `DROP` untuk membangun kerangka rumahnya (tabel, tipe data, *primary key*, dan *foreign key*).
* **DML (Data Manipulation Language):** Perintah seperti `SELECT`, `INSERT`, `UPDATE`, dan `DELETE` untuk mengelola penghuni di dalamnya (isi datanya).

## 4. Tahap Integrasi: Menghidupkan Data di Halaman Web

Sebuah database yang hebat tidak akan terasa dampaknya jika hanya bersemayam di dalam terminal lokal atau DBMS lokal. Tantangan sesungguhnya adalah bagaimana menjembatani data tersebut agar bisa diakses oleh pengguna lewat *browser*.

Melalui praktikum akhir, saya belajar menghubungkan database dengan aplikasi web. Proses ini melibatkan pembuatan *database connection*, membuat API endpoint di sisi *backend*, mengeksekusi kueri secara asinkronus, hingga melakukan *parsing* data ke dalam komponen *frontend* agar tampil sebagai antarmuka yang dinamis dan interaktif.

## Kesimpulan

Mata kuliah Basis Data bukan sekadar tentang menghafal sintaks kueri `SELECT * FROM`. Lebih dari itu, ini adalah tentang cara berpikir logis dan sistematis. Pengalaman merancang database dari tahap ERD hingga terintegrasi penuh ke website memberikan saya fondasi yang kuat untuk membangun proyek-proyek *full-stack* yang lebih kompleks, cepat, dan terukur di masa depan.


