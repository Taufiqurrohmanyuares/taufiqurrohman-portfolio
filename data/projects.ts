export type Project = { title: string; category: string; tags: string[]; desc: string; overview: string; problem: string; impact: string; image: string; fit: "cover" | "contain"; demo: string; repo: string };

export const projects: Project[] = [
  {
    "title": "PanenLog",
    "category": "Web",
    "tags": [
      "NEXT.JS",
      "SUPABASE",
      "GOOGLE OAUTH",
      "WEB APP"
    ],
    "desc": "Aplikasi web untuk mencatat berat tiap karung hasil panen, dengan jumlah, rata-rata, dan laporan yang dihitung otomatis.",
    "overview": "Pengembangan aplikasi web PanenLog menggunakan Next.js dan Supabase. Pengguna mencatat berat karung per lahan dan per panen, lalu mengunduh laporan dalam format PDF, Excel, dan CSV atau membagikannya lewat WhatsApp. Login tersedia lewat email maupun akun Google, dan catatan dapat dicadangkan serta dipulihkan. Tampilan dirancang responsif untuk ponsel, tablet, dan komputer.",
    "problem": "Pencatatan hasil panen secara manual di buku mudah salah hitung, sulit dicari kembali, dan sering hilang. Petani juga butuh ringkasan total berat yang cepat dibagikan kepada pembeli atau keluarga.",
    "impact": "Pencatatan karung menjadi cepat dan rapi, karena total dan rata-rata dihitung sendiri serta berat yang janggal diberi peringatan sebelum disimpan. Data tersimpan di akun dan bisa dibuka dari perangkat mana pun, dengan laporan siap unduh atau kirim.",
    "image": "/images/projects/panenlog.jpg",
    "fit": "cover",
    "demo": "https://panenlog.vercel.app",
    "repo": "https://github.com/Taufiqurrohmanyuares/PanenLog"
  },
  {
    "title": "Warung Keuangan",
    "category": "Web",
    "tags": [
      "NEXT.JS",
      "TAILWIND CSS",
      "WEB APP",
      "AI"
    ],
    "desc": "Aplikasi pencatatan dan manajemen keuangan interaktif untuk mempermudah pemantauan arus kas.",
    "overview": "Platform web yang dirancang untuk membantu pengguna atau pemilik usaha kecil (warung) dalam mencatat pemasukan dan pengeluaran secara digital, praktis, dan real-time.",
    "problem": "Pencatatan keuangan secara manual seringkali rentan terhadap kesalahan perhitungan dan risiko hilangnya data, sehingga menyulitkan evaluasi arus kas.",
    "impact": "Memberikan kemudahan pelacakan finansial yang lebih tertata, meminimalisir kesalahan perhitungan, dan membantu pengguna mengambil keputusan finansial yang lebih baik.",
    "image": "/images/projects/warung.jpg",
    "fit": "cover",
    "demo": "https://warung-keuangan.vercel.app/",
    "repo": "https://github.com/Taufiqurrohmanyuares/warung-keuangan.git"
  },
  {
    "title": "Porsi",
    "category": "Web",
    "tags": [
      "NEXT.JS",
      "SUPABASE",
      "TAILWIND CSS",
      "AI",
      "WEB APP"
    ],
    "desc": "Aplikasi split-bill cerdas berbasis web untuk membagi tagihan patungan dengan adil, cepat, dan presisi.",
    "overview": "Platform web interaktif yang dirancang untuk mempermudah perhitungan pembagian tagihan bersama teman atau kolega. Dilengkapi fitur ekstraksi struk otomatis bertenaga AI Vision dan kalkulator proporsional untuk mendistribusikan harga item, pajak, biaya layanan, serta diskon secara akurat tanpa perlu menginstal aplikasi tambahan.",
    "problem": "Menghitung patungan secara manual seringkali memicu kebingungan dan memakan waktu, terutama saat harus membagi beban pajak, service charge, dan diskon secara proporsional yang berisiko tidak adil atau merugikan salah satu pihak (nombok).",
    "impact": "Menghadirkan pengalaman berbagi tagihan yang transparan dan 100% adil, menghilangkan rasa canggung saat menagih pembayaran, serta menghemat waktu perhitungan berkat otomatisasi AI dan rekonsiliasi sisa pembulatan rupiah.",
    "image": "/images/projects/porsi.webp",
    "fit": "cover",
    "demo": "https://porsi-eta.vercel.app/",
    "repo": "https://github.com/Taufiqurrohmanyuares/porsi.git"
  },
  {
    "title": "NgajiOnline.id",
    "category": "Web",
    "tags": [
      "WEB APP",
      "EDUCATION",
      "PYTHON",
      "DJANGO",
      "JAVASCRIPT"
    ],
    "desc": "Platform pembelajaran membaca Al-Qur’an secara daring (online) yang fleksibel dan mudah diakses.",
    "overview": "Pengembangan sistem informasi pendidikan Ngajionline.id yang dirancang untuk memfasilitasi kegiatan belajar mengaji secara jarak jauh, mempertemukan pengajar (ustaz/ustazah) dan santri dalam satu platform digital.",
    "problem": "Keterbatasan waktu, jarak, dan akses untuk menemukan pengajar mengaji yang kompeten seringkali menjadi hambatan utama bagi masyarakat urban untuk belajar Al-Qur’an secara rutin.",
    "impact": "Menyediakan alternatif pembelajaran agama yang lebih mudah diakses, memiliki jadwal yang fleksibel, dan dapat menjangkau lebih banyak santri tanpa terhalang batasan lokasi geografis.",
    "image": "/images/projects/ngajionline.webp",
    "fit": "contain",
    "demo": "#",
    "repo": "https://github.com/Taufiqurrohmanyuares/Ngajionline.id.git"
  },
  {
    "title": "Klasterisasi Wilayah Produksi Padi Karawang",
    "category": "Data/AI",
    "tags": [
      "PYTHON",
      "K-MEANS",
      "AHC",
      "FOLIUM",
      "GEOJSON"
    ],
    "desc": "Studi komparasi algoritma K-Means dan Agglomerative Hierarchical Clustering (AHC) untuk dasar pemberian subsidi pertanian.",
    "overview": "Penelitian skripsi yang membandingkan kinerja algoritma K-Means dan AHC dalam klasterisasi wilayah produksi padi di Kabupaten Karawang berdasarkan variabel luas panen dan jumlah produksi periode 2023-2025. Hasil klasterisasi kemudian divisualisasikan ke dalam bentuk Choropleth Map menggunakan Folium dan GeoJSON.",
    "problem": "Kondisi produksi padi yang tidak merata antar kecamatan menyebabkan kebijakan distribusi subsidi dan sarana pertanian berpotensi tidak tepat sasaran apabila diseragamkan tanpa menganalisis karakteristik masing-masing wilayah terlebih dahulu.",
    "impact": "Berhasil membuktikan bahwa metode AHC (Average Linkage) lebih optimal dari K-Means. Pemetaan wilayah menjadi klaster tinggi dan rendah ini dapat dijadikan dasar rekomendasi objektif bagi pemerintah daerah dalam mendistribusikan subsidi pupuk dan benih.",
    "image": "/images/projects/skripsi-padi.webp",
    "fit": "cover",
    "demo": "https://colab.research.google.com/drive/1K4wboqbFGTmDBvvd840GdyQpT6psVW47?usp=sharing",
    "repo": "https://github.com/Taufiqurrohmanyuares/skripsi-klasterisasi-wilayah-produksi-padi-di-karawang"
  },
];
