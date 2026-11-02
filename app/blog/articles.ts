export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  introduction: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const articles: Article[] = [
  {
    slug: "tips-memilih-jasa-foto-video-acara",
    title: "Tips Memilih Jasa Foto dan Video untuk Dokumentasi Acara",
    category: "Jasa Fotografi & Videografi",
    excerpt:
      "Tentukan kebutuhan, momen prioritas, dan hasil akhir sebelum memilih tim dokumentasi foto dan video untuk acaramu.",
    image: "/images/Persiapan Perlengkapan Kamera di Meja.png",
    imageAlt: "Persiapan perlengkapan kamera untuk dokumentasi acara",
    introduction:
      "Memilih jasa foto dan video acara dimulai dengan memahami kebutuhan dokumentasi. Jenis acara, alur kegiatan, dan hasil yang ingin digunakan akan membantu kamu menyusun arahan yang jelas untuk tim.",
    sections: [
      {
        heading: "Sesuaikan dokumentasi dengan jenis acara",
        paragraphs: [
          "Tentukan jenis acara, durasi, lokasi, dan momen penting yang perlu direkam. Kebutuhan pernikahan, acara keluarga, dan kegiatan merek memiliki alur serta prioritas dokumentasi yang berbeda.",
          "Pertimbangkan apakah kamu memerlukan fotografi, videografi, atau keduanya. Sampaikan juga hasil yang diharapkan, seperti foto pilihan, video sorotan, atau dokumentasi acara.",
        ],
      },
      {
        heading: "Periksa portofolio dan sepakati detail kerja",
        paragraphs: [
          "Lihat contoh karya yang relevan dengan kebutuhanmu. Perhatikan pendekatan visual, cara momen ditangkap, dan konsistensi hasilnya.",
          "Sebelum acara, diskusikan susunan acara, koordinasi di lokasi, bentuk hasil, jadwal penyerahan, serta cakupan layanan. Pastikan kesepakatan tercatat dalam penawaran.",
        ],
      },
    ],
  },
  {
    slug: "persiapan-dokumentasi-foto-video-acara",
    title: "Persiapan Dokumentasi Foto dan Video Acara",
    category: "Persiapan Dokumentasi",
    excerpt:
      "Rundown, daftar momen penting, dan koordinasi lokasi membantu tim dokumentasi bekerja sesuai kebutuhan acara.",
    image: "/images/Operator Kamera Merekam Acara di Auditorium.png",
    imageAlt: "Operator kamera merekam acara di auditorium",
    introduction:
      "Arahan yang jelas membantu fotografer dan videografer memahami alur acara serta momen yang menjadi prioritas. Persiapan ini juga memudahkan koordinasi dengan penanggung jawab acara.",
    sections: [
      {
        heading: "Siapkan susunan acara dan daftar momen prioritas",
        paragraphs: [
          "Bagikan susunan acara terbaru, alamat dan akses lokasi, kontak penanggung jawab, serta perkiraan jumlah tamu. Tandai prosesi atau momen yang tidak boleh terlewat.",
          "Jika ada orang atau detail tertentu yang perlu didokumentasikan, sampaikan nama atau referensi visualnya sebelum acara.",
        ],
      },
      {
        heading: "Bahas kondisi lokasi dan koordinasi teknis",
        paragraphs: [
          "Informasikan kondisi lokasi acara, area yang dapat diakses, aturan penggunaan lampu kilat, kebutuhan listrik, dan titik pengambilan gambar. Untuk acara luar ruang, diskusikan rencana jika kondisi cuaca berubah.",
          "Sepakati jalur komunikasi, waktu pengarahan, durasi kerja, serta bentuk dan jadwal penyerahan hasil dengan tim dokumentasi.",
        ],
      },
    ],
  },
  {
    slug: "manfaat-video-dokumentasi-acara",
    title: "Manfaat Video Dokumentasi untuk Mengabadikan Acara",
    category: "Videografi Acara",
    excerpt:
      "Video merangkai gerak, suara, dan suasana acara menjadi dokumentasi yang dapat ditonton kembali dan dibagikan.",
    image: "/images/Videografer Merekam Pernikahan Outdoor.png",
    imageAlt: "Videografer merekam acara pernikahan di luar ruangan",
    introduction:
      "Foto membekukan momen dalam satu gambar, sedangkan video dapat merekam gerak, suara, dan hubungan antarmomen. Keduanya menawarkan cara berbeda untuk menyimpan dokumentasi acara.",
    sections: [
      {
        heading: "Merekam suasana dan detail acara",
        paragraphs: [
          "Ekspresi, ucapan, musik, dan suasana ruang dapat hadir bersama dalam video. Detail seperti sambutan atau reaksi spontan membantu menggambarkan kembali jalannya acara.",
          "Rekaman dapat mencakup persiapan, prosesi, dan interaksi para tamu sesuai susunan acara serta prioritas yang disepakati.",
        ],
      },
      {
        heading: "Menyusun rekaman menjadi cerita",
        paragraphs: [
          "Pemilihan adegan dan penyuntingan membantu menyusun rekaman menjadi video sorotan atau dokumentasi dengan alur yang mudah diikuti.",
          "Sampaikan kepada tim momen yang paling penting bagimu. Gaya penyuntingan dan bentuk hasil dapat dibicarakan sebelum produksi.",
        ],
      },
    ],
  },
  {
    slug: "foto-dokumentasi-vs-foto-konseptual",
    title: "Foto Dokumentasi dan Foto Konseptual: Apa Bedanya?",
    category: "Fotografi",
    excerpt:
      "Kenali perbedaan foto dokumentasi yang menangkap kejadian dan foto konseptual yang dirancang dengan arahan visual.",
    image: "/images/photography-session.jpg",
    imageAlt: "Sesi pemotretan dengan arahan visual",
    introduction:
      "Foto dokumentasi dan foto konseptual memiliki pendekatan yang berbeda. Memahami tujuannya dapat membantu menentukan jenis sesi fotografi yang sesuai dengan kebutuhan.",
    sections: [
      {
        heading: "Foto dokumentasi menangkap momen yang berlangsung",
        paragraphs: [
          "Fotografer mengamati alur acara dan merekam suasana, interaksi, serta momen penting secara alami. Pendekatan ini sesuai untuk mendokumentasikan kejadian sebagaimana berlangsung.",
          "Kepekaan membaca situasi dan koordinasi dengan penyelenggara membantu tim bersiap pada momen prioritas.",
        ],
      },
      {
        heading: "Foto konseptual berangkat dari arahan visual",
        paragraphs: [
          "Foto konseptual disusun berdasarkan ide atau pesan. Lokasi, pencahayaan, properti, busana, pose, dan warna dapat menjadi bagian dari arahan visual.",
          "Pendekatan ini dapat digunakan untuk foto potret atau kebutuhan visual merek. Arahan dan referensi membantu menyamakan tujuan sebelum sesi foto.",
        ],
      },
    ],
  },
  {
    slug: "color-correction-dan-color-grading-video",
    title: "Color Correction dan Color Grading Video: Kenali Perbedaannya",
    category: "Penyuntingan Video",
    excerpt:
      "Color correction merapikan warna dasar, sedangkan color grading membantu membentuk suasana visual video.",
    image: "/images/Ruang Kerja Editor Video Sinematik.png",
    imageAlt: "Ruang kerja untuk proses penyuntingan dan pengolahan warna video",
    introduction:
      "Color correction dan color grading merupakan dua proses berbeda dalam penyuntingan video. Keduanya berhubungan dengan warna, tetapi memiliki tujuan yang berbeda dalam menyusun tampilan akhir.",
    sections: [
      {
        heading: "Color correction merapikan warna dasar",
        paragraphs: [
          "Color correction membantu menyeimbangkan exposure, white balance, dan warna agar gambar terlihat wajar serta konsisten antaradegan.",
          "Koreksi dasar membuat detail lebih mudah dibaca dan menjadi landasan sebelum tampilan visual diarahkan lebih lanjut.",
        ],
      },
      {
        heading: "Color grading membangun suasana visual",
        paragraphs: [
          "Color grading memberi karakter dan suasana melalui pengolahan tone, kontras, dan warna. Arah visual sebaiknya disesuaikan dengan kebutuhan video dan referensi yang disepakati.",
          "Konsistensi warna kulit, detail penting, dan perpindahan antaradegan tetap perlu diperhatikan agar hasil penyuntingan terasa selaras.",
        ],
      },
    ],
  },
  {
    slug: "proses-editing-video-dari-footage-mentah",
    title: "Proses Penyuntingan Video: Dari Rekaman Mentah Menjadi Konten",
    category: "Penyuntingan & Produksi Konten",
    excerpt:
      "Pemilihan momen, penyusunan alur, audio, dan warna membantu mengolah rekaman menjadi video yang siap digunakan.",
    image: "/images/Operator Kamera Merekam Diskusi Panel.png",
    imageAlt: "Operator kamera merekam diskusi panel sebagai bahan video",
    introduction:
      "Rekaman mentah merupakan bahan awal untuk proses penyuntingan video. Editor meninjau materi, memilih bagian yang relevan, lalu menyusunnya sesuai tujuan konten dan arahan.",
    sections: [
      {
        heading: "Memilih rekaman dan menyusun alur",
        paragraphs: [
          "Editor meninjau rekaman dan memilih momen yang sesuai dengan pesan. Potongan gambar kemudian disusun menjadi alur yang memiliki pembuka, perkembangan, dan penutup.",
          "Ritme dan durasi disesuaikan dengan kebutuhan video. Arahan yang memuat audiens, tujuan, dan platform membantu menentukan bentuk penyuntingan.",
        ],
      },
      {
        heading: "Merapikan audio dan tampilan akhir",
        paragraphs: [
          "Musik, dialog, suara suasana, dan transisi ditata agar video nyaman diikuti. Pemilihan elemen audio perlu memperhatikan tujuan dan materi yang tersedia.",
          "Pemeriksaan akhir mencakup alur, suara, warna, dan format ekspor sesuai kebutuhan penggunaan yang telah dibahas.",
        ],
      },
    ],
  },
  {
    slug: "tips-foto-produk-untuk-katalog-online",
    title: "Tips Foto Produk untuk Katalog Daring",
    category: "Fotografi Produk",
    excerpt:
      "Pencahayaan, latar, sudut pengambilan, dan konsistensi membantu foto produk tampil jelas di katalog daring.",
    image: "/images/camera-detail.jpg",
    imageAlt: "Detail kamera untuk kebutuhan fotografi produk",
    introduction:
      "Foto produk membantu calon pembeli melihat bentuk dan detail barang melalui katalog daring. Persiapan visual yang rapi dapat membuat informasi produk lebih mudah dipahami.",
    sections: [
      {
        heading: "Tampilkan bentuk dan detail produk",
        paragraphs: [
          "Gunakan pencahayaan yang membantu memperlihatkan warna, tekstur, dan bentuk produk. Pilih latar yang tidak mengalihkan perhatian dari objek.",
          "Ambil sudut yang menunjukkan bagian penting produk. Foto detail dapat melengkapi tampilan utama jika ada fitur atau tekstur yang perlu diperlihatkan.",
        ],
      },
      {
        heading: "Jaga konsistensi untuk katalog",
        paragraphs: [
          "Gunakan arah cahaya, latar, dan komposisi yang serupa untuk produk dalam satu katalog agar tampilannya terasa teratur.",
          "Sebelum sesi, siapkan daftar produk, informasi detail yang perlu ditampilkan, serta kebutuhan rasio dan platform. Hasil dan format akhir sebaiknya disepakati bersama tim foto.",
        ],
      },
    ],
  },
  {
    slug: "visual-branding-dan-desain-media-sosial",
    title: "Identitas Visual dan Desain Media Sosial yang Konsisten",
    category: "Identitas Visual & Desain Media Sosial",
    excerpt:
      "Arah visual yang konsisten membantu konten media sosial menyampaikan identitas dan pesan merek dengan lebih jelas.",
    image: "/images/portrait-photography.jpg",
    imageAlt: "Foto potret sebagai aset visual untuk komunikasi merek",
    introduction:
      "Identitas visual membantu menjaga karakter komunikasi merek di berbagai materi. Pada media sosial, konsistensi visual dapat dibangun melalui pilihan warna, tipografi, komposisi, dan gaya gambar.",
    sections: [
      {
        heading: "Tentukan elemen visual dan pesan utama",
        paragraphs: [
          "Mulai dari tujuan komunikasi, audiens, dan pesan yang ingin disampaikan. Elemen visual seperti warna, tipografi, dan gaya fotografi dapat dipilih untuk mendukung arah tersebut.",
          "Referensi visual dan panduan merek yang sudah dimiliki dapat menjadi acuan agar desain tetap sejalan dengan identitas yang digunakan.",
        ],
      },
      {
        heading: "Susun desain media sosial sesuai kebutuhan",
        paragraphs: [
          "Konten feed, karusel, dan materi promosi memiliki kebutuhan penyampaian informasi yang berbeda. Susunan teks dan visual perlu disesuaikan dengan tujuan setiap materi.",
          "Sebelum produksi desain, sepakati jenis konten, ukuran atau format platform, materi yang tersedia, dan alur persetujuan. Dengan begitu, hasil desain lebih terarah dan mudah digunakan.",
        ],
      },
    ],
  },
];
