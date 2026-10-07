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
    slug: "article-one",
    title: "Tips Memilih Jasa Foto dan Video yang Tepat untuk Acara",
    category: "Foto & Video",
    excerpt:
      "Kenali hal-hal penting yang perlu dipertimbangkan sebelum memilih tim dokumentasi untuk acara spesialmu.",
    image: "/images/Ruang Kerja Editor Video Sinematik.png",
    imageAlt: "Ruang kerja editor video sinematik",
    introduction:
      "Memilih jasa foto dan video bukan hanya soal membandingkan harga. Tim dokumentasi yang tepat akan membantu menangkap momen penting sekaligus memahami suasana dan cerita yang ingin kamu kenang.",
    sections: [
      {
        heading: "Mulai dari kebutuhan acara",
        paragraphs: [
          "Tentukan jenis acara, durasi dokumentasi, jumlah lokasi, serta momen yang tidak boleh terlewat. Kebutuhan pernikahan, acara keluarga, dan peluncuran brand tentu memiliki alur dan prioritas yang berbeda.",
          "Diskusikan juga hasil akhir yang kamu butuhkan, seperti foto pilihan, video highlight, atau dokumentasi lengkap. Brief yang jelas membantu tim memberikan penawaran dan rencana kerja yang sesuai.",
        ],
      },
      {
        heading: "Periksa portofolio dan cara kerja",
        paragraphs: [
          "Lihat beberapa proyek yang sejenis dengan acaramu. Perhatikan konsistensi warna, cara fotografer menangkap momen, kualitas audio pada video, serta bagaimana hasil akhirnya bercerita.",
          "Tanyakan siapa yang akan bertugas, bagaimana proses koordinasi saat acara, kapan hasil dikirim, dan apa saja yang termasuk dalam paket. Pastikan semua kesepakatan tercatat sebelum hari pelaksanaan.",
        ],
      },
    ],
  },
  {
    slug: "article-two",
    title:
      "Jasa Foto dan Video untuk Dokumentasi Acara: Apa Saja yang Perlu Dipersiapkan?",
    category: "Persiapan Acara",
    excerpt:
      "Checklist sederhana untuk membantu proses dokumentasi berjalan lancar dari briefing hingga acara selesai.",
    image: "/images/Persiapan Perlengkapan Kamera di Meja.png",
    imageAlt: "Persiapan perlengkapan kamera di meja",
    introduction:
      "Persiapan yang baik membuat tim dokumentasi bisa bekerja lebih tenang dan fokus pada momen acara. Beberapa informasi sederhana dari penyelenggara dapat membantu menghindari momen penting yang terlewat.",
    sections: [
      {
        heading: "Siapkan rundown dan daftar momen penting",
        paragraphs: [
          "Bagikan rundown terbaru, alamat dan akses lokasi, kontak PIC, serta perkiraan jumlah tamu. Tandai momen yang menjadi prioritas, misalnya prosesi, sambutan, potong kue, atau foto bersama keluarga.",
          "Jika ada orang atau detail tertentu yang perlu didokumentasikan, sampaikan namanya atau referensi visual lebih awal. Ini membantu tim mengenali mereka di tengah acara yang ramai.",
        ],
      },
      {
        heading: "Atur koordinasi teknis sebelum hari acara",
        paragraphs: [
          "Informasikan kondisi venue, area yang boleh dimasuki, aturan penggunaan flash, kebutuhan listrik, dan titik terbaik untuk mengambil gambar. Untuk acara di luar ruangan, diskusikan juga rencana jika cuaca berubah.",
          "Sisihkan waktu singkat untuk briefing dengan PIC dan tim dokumentasi sebelum acara dimulai. Pastikan jalur komunikasi, batas waktu kerja, serta bentuk dan jadwal penyerahan hasil sudah disepakati.",
        ],
      },
    ],
  },
  {
    slug: "article-three",
    title: "Mengapa Video Dokumentasi Penting untuk Mengabadikan Sebuah Momen?",
    category: "Videografi",
    excerpt:
      "Video menyimpan gerak, suara, dan suasana yang membuat sebuah momen terasa hidup kembali saat ditonton.",
    image: "/images/Videografer Merekam Pernikahan Outdoor.png",
    imageAlt: "Videografer merekam pernikahan outdoor",
    introduction:
      "Foto dapat membekukan satu detik yang berarti, sementara video merangkai banyak detik menjadi pengalaman yang utuh. Keduanya punya kekuatan masing-masing dalam menyimpan kenangan sebuah acara.",
    sections: [
      {
        heading: "Menyimpan suasana, bukan hanya gambarnya",
        paragraphs: [
          "Dalam video, ekspresi yang berubah, suara orang-orang terdekat, musik, dan suasana ruang hadir bersama. Detail seperti tawa, tepuk tangan, atau potongan ucapan sering membawa kembali perasaan saat momen itu terjadi.",
          "Dokumentasi video juga dapat memperlihatkan hubungan antarmomen—dari persiapan, jalannya acara, hingga reaksi spontan para tamu—sehingga kenangan terasa lebih menyeluruh.",
        ],
      },
      {
        heading: "Membuat cerita yang bisa dibagikan",
        paragraphs: [
          "Dengan pemilihan adegan dan penyuntingan yang terarah, rekaman acara dapat dirangkai menjadi video highlight yang mudah ditonton ulang dan dibagikan kepada keluarga, teman, atau audiens brand.",
          "Agar hasilnya terasa personal, ceritakan kepada tim bagian mana yang paling penting bagimu. Musik, durasi, dan gaya penyuntingan kemudian dapat disesuaikan dengan karakter acara.",
        ],
      },
    ],
  },
  {
    slug: "article-four",
    title: "Perbedaan Foto Dokumentasi dan Foto Konseptual",
    category: "Fotografi",
    excerpt:
      "Pahami perbedaan pendekatan foto yang menangkap kejadian apa adanya dan foto yang dirancang dengan konsep.",
    image: "/images/Operator Kamera Merekam Acara di Auditorium.png",
    imageAlt: "Operator kamera merekam acara di auditorium",
    introduction:
      "Foto dokumentasi dan foto konseptual sama-sama dapat bercerita, tetapi proses dan tujuan pemotretannya berbeda. Memahami perbedaannya akan membantumu memilih pendekatan yang sesuai dengan kebutuhan.",
    sections: [
      {
        heading: "Foto dokumentasi menangkap momen yang terjadi",
        paragraphs: [
          "Dalam dokumentasi, fotografer mengamati alur acara dan menangkap kejadian secara natural. Fokusnya adalah merekam suasana, interaksi, dan momen penting tanpa banyak mengatur ulang jalannya acara.",
          "Pendekatan ini cocok untuk acara yang ingin dikenang sebagaimana berlangsung. Kepekaan membaca situasi dan kesiapan mengambil gambar pada waktu yang tepat menjadi hal penting.",
        ],
      },
      {
        heading: "Foto konseptual dirancang dengan arahan visual",
        paragraphs: [
          "Foto konseptual biasanya berangkat dari ide atau pesan tertentu. Konsep tersebut diterjemahkan melalui pemilihan lokasi, pencahayaan, properti, busana, pose, dan arahan warna.",
          "Pendekatan ini sesuai untuk portrait, kampanye, atau kebutuhan visual brand yang memerlukan tampilan konsisten. Keduanya juga bisa dipadukan, misalnya dokumentasi acara yang dilengkapi sesi foto terarah.",
        ],
      },
    ],
  },
  {
    slug: "article-five",
    title: "Color Grading dan Color Correction: Apa Bedanya?",
    category: "Post-production",
    excerpt:
      "Kenali proses merapikan warna dan membangun suasana visual agar hasil foto maupun video terlihat selaras.",
    image: "/images/Rapat Kru Film di Balik Layar.png",
    imageAlt: "Rapat kru film di balik layar",
    introduction:
      "Color correction dan color grading sering disebut bersamaan dalam proses penyuntingan. Keduanya berkaitan dengan warna, tetapi memiliki tujuan yang berbeda dan biasanya dilakukan secara berurutan.",
    sections: [
      {
        heading: "Color correction merapikan warna dasar",
        paragraphs: [
          "Color correction membantu membuat exposure, white balance, dan warna terlihat wajar serta konsisten antaradegan. Proses ini penting ketika kondisi cahaya berubah selama pemotretan atau perekaman.",
          "Koreksi yang rapi menjadi dasar agar detail tetap terbaca dan perpindahan antarshot tidak terasa janggal. Tujuannya bukan membuat setiap gambar tampak sama persis, melainkan menjaga tampilan tetap seimbang.",
        ],
      },
      {
        heading: "Color grading membangun karakter visual",
        paragraphs: [
          "Setelah warna dasar dirapikan, color grading memberi sentuhan gaya dan suasana. Tone hangat, kontras lembut, atau warna yang lebih berani dapat dipilih sesuai cerita dan identitas visual.",
          "Grading yang baik tetap mempertimbangkan warna kulit, detail penting, dan konsistensi keseluruhan. Karena preferensi warna bersifat personal, referensi visual dari klien dapat membantu menyamakan arah sejak awal.",
        ],
      },
    ],
  },
  {
    slug: "article-six",
    title: "Dari Footage Mentah Menjadi Video yang Bercerita",
    category: "Penyuntingan Video",
    excerpt:
      "Lihat bagaimana pilihan momen, ritme, suara, dan warna mengubah rekaman menjadi cerita yang utuh.",
    image: "/images/Operator Kamera Merekam Diskusi Panel.png",
    imageAlt: "Operator kamera merekam diskusi panel",
    introduction:
      "Footage mentah adalah kumpulan bahan cerita. Lewat proses penyuntingan, potongan-potongan gambar dipilih dan disusun agar penonton dapat mengikuti suasana serta pesan yang ingin disampaikan.",
    sections: [
      {
        heading: "Memilih momen dan membangun alur",
        paragraphs: [
          "Editor meninjau rekaman, memilih ekspresi dan kejadian yang paling bermakna, lalu menyusunnya menjadi pembuka, perkembangan, dan penutup. Tidak semua footage harus masuk; yang terpenting adalah hubungan antaradegan terasa jelas.",
          "Ritme juga disesuaikan dengan tujuan video. Highlight singkat membutuhkan pilihan gambar yang padat, sementara video cerita dapat memberi ruang lebih bagi suasana dan detail.",
        ],
      },
      {
        heading: "Menyatukan gambar, suara, dan warna",
        paragraphs: [
          "Musik, dialog, suara suasana, dan transisi membantu menghubungkan adegan. Audio yang tertata membuat video lebih nyaman diikuti dan dapat memperkuat emosi tanpa mengalihkan perhatian dari cerita.",
          "Tahap akhir mencakup penyesuaian warna, pemeriksaan kualitas, dan ekspor sesuai kebutuhan platform. Hasilnya bukan sekadar kumpulan klip, melainkan rangkaian momen yang memiliki arah.",
        ],
      },
    ],
  },
];
