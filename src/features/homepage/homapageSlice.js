import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  digitalActivistData: [
    {
      id: 1,
      title: "Ikuti Sosial Media",
      description:
        "Ikuti sosial media Greenpeace Indonesia untuk mendapatkan informasi terbaru terkait kampanye perlindungan lingkungan yang Greenpeace lakukan, dan jangan lupa tap dua kali di post instagram, like status kami di facebook, retweet cuitan kami, dan subcribe channel youtube kami.",
    },
    {
      id: 2,
      title: "Pelajari Isunya",
      description:
        "Karena pengetahuan adalah kunci dan melindungi Bumi dengan itu kita semua bisa untuk melihat apa saja akar masalahnya dan siapa saja yang bertanggung jawab atasnya. Karena itu mari bersama pelajari isunya, supaya kita dapat melindungi Bumi ini dengan lebih tepat dan efektif.",
    },
    {
      id: 3,
      title: "Bagikan Kampanyenya",
      description:
        "Kamu mungkin tahu apa yang terjadi dengan lingkungan Bumi kita, tapi jangan simpan pengetahuan ini sendirian, bagikan kepada teman, pacar, hingga keluargamu, agar mereka juga tahu dan ikut ambil bagian untuk menyelamatkan Bumi. Karena, kita tinggal di Bumi yang sama.",
    },
    {
      id: 4,
      title: "Ciptakan Aksimu",
      description:
        "Mulai dari melayangkan surat kepada perusahaan, menanam pohon, melakukan efisiensi energi atau mengingatkan orang-orang dengan cara yang kreatif melalui sosial mediamu, adalah salah satu dari banyak aksi yang bisa kamu lakukan untuk ikut ambil bagian dalam menyelamatkan Bumi kita.",
    },
  ],
};

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {},
});

const homepageReducer = homepageSlice.reducer;

export default homepageReducer;
