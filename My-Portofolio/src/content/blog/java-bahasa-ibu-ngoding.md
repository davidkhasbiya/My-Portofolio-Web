---
title: "Java Sebagai 'Bahasa Ibu': Menanam Fondasi Logika Hingga OOP di Filkom UB"
description: "Refleksi perjalanan semester 1 di jurusan Ilmu Komputer Universitas Brawijaya, merunut langkah awal dari ritual 'public static void main' hingga memahami paradigma Object-Oriented Programming."
pubDate: "2026-06-17"
---

Bagi setiap mahasiswa Ilmu Komputer Universitas Brawijaya, pasti ada satu bahasa pemrograman yang akan selalu membekas karena menjadi gerbang pertama yang memperkenalkan mereka pada dunia koding akademis. Bagi saya, bahasa itu adalah **Java**.

Saya suka menyebut Java sebagai "bahasa ibu". Di sinilah tempat saya pertama kali belajar mengeja logika, membuat kesalahan *syntax error* yang tak terhitung jumlahnya, hingga akhirnya memahami bagaimana sebuah sistem perangkat lunak yang kompleks disusun secara terstruktur.

Mengingat kembali ke belakang, berikut adalah peta jalan (*roadmap*) perkembangan logika yang saya lalui selama mengarungi samudera Java di semester 1.

## 1. Ritual `public static void main` dan Fondasi Kondisi

Pada minggu-minggu awal, hal yang paling berkesan (dan sempat bikin garuk-garuk kepala) adalah betapa panjangnya ritual yang harus ditulis hanya untuk memunculkan teks *"Hello World"*. Kita harus menulis struktur kelas, diikuti dengan mantra wajib:
```java
public static void main(String[] args) {
    System.out.println("Hello, World!");
}
```
Namun di balik ke-verbose-an tersebut, saya belajar tentang kedisplinan struktur. Setelah melewati fase itu, saya mulai masuk ke Logika Kondisi (if-else, switch-case). Di fase inilah otak saya mulai dilatih untuk berpikir seperti komputer—memetakan setiap kemungkinan alur program berdasarkan parameter yang diberikan.

## 2. Otomatisasi Lewat Looping
Setelah berhasil mengontrol alur, tantangan berikutnya adalah efisiensi: bagaimana mengeksekusi instruksi yang sama berulang kali tanpa menulis ulang kode secara manual? Di sinilah Looping (for, while, do-while) mengambil peran.

Belajar looping bukan cuma soal memutar angka, tapi tentang memahami optimasi. Menghindari infinite loop (perulangan tanpa henti yang bisa membuat RAM laptop menjerit) adalah pelajaran awal saya tentang pentingnya menulis kode yang aman dan efisien.

## 3. Modularitas dengan Method dan Manajemen Data via Array
Menulis semua kode di dalam fungsi main lama-kelamaan akan membuat kode menjadi berantakan, panjang, dan sulit dibaca (spaghetti code). Mata kuliah ini kemudian memperkenalkan konsep Method (fungsi).

Melalui method, saya belajar prinsip Don't Repeat Yourself (DRY). Kode dipecah menjadi blok-blok kecil yang modular, di mana satu method hanya bertanggung jawab atas satu tugas spesifik. Prinsip minimalis ini sangat memuaskan bagi saya.

Bersamaan dengan itu, konsep Array hadir untuk mengajarkan bagaimana mengelola sekumpulan data homogen dalam satu variabel tunggal, lengkap dengan manipulasi indeksnya. Kombinasi antara method dan array ini membuat program yang saya bangun menjadi jauh lebih rapi dan bertenaga.

## 4. Puncak Perjalanan: Object-Oriented Programming (OOP)
Semua fondasi di atas akhirnya bermuara pada satu paradigma besar yang menjadi core utama dari Java, yaitu OOP (Pemrograman Berorientasi Objek). Ini adalah titik balik terbesar di semester 1.

Melalui OOP, cara pandang saya terhadap kode berubah total. Saya tidak lagi melihat program sebagai urutan baris instruksi dari atas ke bawah, melainkan sebagai sebuah ekosistem yang berisi objek-objek interaktif yang meniru dunia nyata. Saya mempelajari pilar-pilar penting seperti:

**Class & Object**: Cetak biru (blueprint) dan hasil realisasi dari cetak biru tersebut.

**Encapsulation (Pembungkusan)**: Melindungi data sensitif di dalam objek menggunakan akses modifier (private, public) dan menyediakannya lewat getter dan setter.

**Inheritance (Pewarisan)**: Menurunkan sifat dan perilaku dari sebuah parent class ke child class demi menghindari duplikasi kode.

Polymorphism: Kemampuan sebuah objek untuk mengambil banyak bentuk yang berbeda saat dijalankan.

Kesimpulan: Warisan Java untuk Masa Depan
Meskipun saat ini di semester 2 saya sudah mulai banyak menyentuh ekosistem web modern seperti Astro, React, dan TypeScript, fondasi ketat yang ditanamkan oleh Java di semester 1 sama sekali tidak hilang.

Disiplin mengetik variabel, pemahaman arsitektur objek yang rapi, serta ketajaman logika saat memecahkan masalah adalah aset berharga yang saya bawa dari laboratorium komputer UB. Java mungkin terasa berat dan kaku di awal, tetapi ia adalah guru terbaik yang berhasil melatih mentalitas engineering saya secara presisi.