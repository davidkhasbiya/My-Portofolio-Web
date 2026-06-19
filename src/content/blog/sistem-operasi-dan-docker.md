---
title: "Menyelami Sistem Operasi & Efisiensi Docker: Catatan Berkesan di Semester 2"
description: "Refleksi mata kuliah Sistem Operasi, bagaimana CPU mengelola resource, hingga praktikum virtualisasi modern menggunakan Docker Container."
pubDate: "2026-06-17"
---

Bagi sebagian orang, mata kuliah **Sistem Operasi (OS)** mungkin terdengar teoretis dan penuh dengan konsep abstrak. Namun, setelah melewati semester 2 ini, saya menyadari bahwa mata kuliah ini adalah salah satu fondasi paling krusial yang mengubah cara pandang saya dalam membangun sebuah perangkat lunak.

OS adalah jembatan tak terlihat yang memastikan *hardware*, memori, dan CPU berkolaborasi dengan harmonis tanpa terjadi *crash*.

## Bagaimana OS Mengatur "Dapur" Komputer

Hal pertama yang membuat saya takjub adalah bagaimana OS bertindak sebagai manajer *resource* yang sangat adil. Tanpa manajemen yang baik, sebuah aplikasi rakus bisa saja memonopoli seluruh CPU dan membuat sistem membeku (*freeze*). 

Melalui materi seperti *CPU Scheduling* (penjadwalan proses) dan manajemen memori, saya belajar bagaimana sistem operasi membagi jatah eksekusi dalam hitungan milidetik. Mengetahui hal ini membuat saya sadar bahwa efisiensi kode yang kita tulis sangat berpengaruh pada bagaimana OS mengalokasikan sumber daya tersebut.

## Titik Balik: Mengenal Virtualisasi via Docker

Dari semua materi, bagian yang paling melekat di kepala saya hingga saat ini adalah **Virtualisasi**, terutama saat masuk ke sesi praktikum menggunakan **Docker Container**.

Sebelum mengenal Docker, bayangan saya tentang virtualisasi selalu tertuju pada *Virtual Machine* (VM) tradisional seperti VirtualBox. Namun, VM tradisional memiliki satu masalah besar: **Bloatware memori**. Setiap kali kita membuat VM baru, kita harus menginstal sistem operasi utuh di dalamnya (*Guest OS*), yang memakan ruang penyimpanan gigaan dan RAM yang besar.

Docker mendobrak keterbatasan itu dengan pendekatan yang jauh lebih cerdas dan minimalis.

### Perbedaan VM Tradisional vs Docker Container

* **Virtual Machine:** Berjalan di atas Hypervisor, membutuhkan *Guest OS* sendiri. Hasilnya berat, lambat saat *booting*, dan boros *resource*.
* **Docker Container:** Berjalan langsung di atas kernel OS induk (*Host OS*). Kontainer hanya mengisolasi aplikasi dan dependensi yang diperlukan saja. Hasilnya sangat ringan, berukuran kecil, dan bisa menyala dalam hitungan detik.

> *Analogi sederhananya: Jika VM adalah membangun rumah baru yang utuh lengkap dengan pondasi dan atapnya hanya untuk menampung satu orang, maka Docker adalah menyewa satu kamar apartemen di dalam gedung yang sudah jadi. Jauh lebih hemat tempat dan efisien.*

## Mengapa Ini Penting untuk Masa Depan?

Mempelajari Docker di tingkat awal perkuliahan memberikan keuntungan besar. Konsep *"It works on my machine"* (aplikasi berjalan di laptop saya tapi *error* saat dipindah ke laptop teman) tidak akan terjadi lagi, karena seluruh lingkungan aplikasi sudah dibungkus rapi di dalam kontainer.

Pengalaman praktikum ini memperkuat prinsip saya bahwa dalam dunia *development*, **efisiensi dan minimalisme adalah kunci**. Tidak perlu membuang-buang *resource* jika kita bisa mengisolasinya dengan cara yang lebih cerdas.


