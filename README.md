# Greenpeace

Greenpeace adalah sebuah organisasi non-profit yang bergerak di bidang lingkungan hidup dan hak asasi manusia. Kami tim FE-14 mendapatkan Challenge Partner dari Greenpeace untuk membuat sebuah website yang dapat membantu mereka menyelesaikan masalah dan isu permasalahan lainnya.

![Screenshot 1]()

![Screenshot 2]()

## Links

### Production

[https://greenpeace.netlify.app/](https://greenpeace.netlify.app/)

### Local

-

### Design

- Figma Mockup           : [Figma Mockup Link](https://www.figma.com/file/aI1EYZmKVtY4N4LioeZpt0/Halo-Buku-Design)
- Figma Prototype        :
- Wireframes (Whimsical) : [Wireframes Link](https://whimsical.com/greenpeace-wireframe-PF2tuqF2hMAvC8R775c7Xa@7YNFXnKbYkjeN7qQXEaz4)

## Main Features

- Display posts
- Read posts
- Articles page
- Valounteer form section

## Team Members

| Name                   | Role                   | GitHub URL                                           |
| ---------------------- | ---------------------- | ---------------------------------------------------- |
| Ersan Karimi           | Lead, Frontend, Design | [@ersankarimi](https://github.com/ersankarimi)       |
| Intan Permatasari      | Frontend, Design       | [@intanpermata11](https://github.com/intanpermata11) |
| Meilyana Anisa Mawarti | Frontend Design        | [@meilyanaanisa](https://github.com/meilyanaanisa)   |

## Tech Stack

- HTML
- CSS
  - Tailwind CSS
- JavaScript
- Node.js & npm
- Data Fetching
  - REST API: `fetch`
- Misc
  - Prettier

## Development

Install dependencies:

```sh
npm install
```

Run server in development mode:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Format code:

```sh
npm run format
```

## Data Model

## REST API Endpoints

### Production REST API URL:

- `https://<KEY>.mockapi.io/greenpeace/api/v1`

| HTTP | Endpoint     | Description    |
| ---- | ------------ | -------------- |
| GET  | `/posts`     | Get all posts  |
| GET  | `/posts/:id` | Get book by id |

### Posts Response Data

```json
{
  "id": "1665941364003",
  "title": "NDC Terbaru Indonesia Tidak Menjawab Ancaman Krisis Iklim",
  "authorName": "Greenpeace Indonesia",
  "postDate": "2022-09-28 10:12:20",
  "postDescription": "Meskipun ada peningkatan dalam target pengurangan emisi, dari 29% menjadi 31.89% dengan usaha sendiri di tahun 2030, dan dari 41% menjadi 43.2% jika dengan bantuan internasional, namun enhanced NDC ini masih jauh dari harapan publik untuk melindungi masa depan Indonesia dari dampak buruk krisis iklim.",
  "postContent": "<p><strong>Jakarta, 21 Juli 2022. </strong>Sepanjang bulan Februari hingga Juni 2022 sejumlah organisasi dari gerakan Pawai Bebas Plastik [1] melakukan kegiatan <em>brand audit</em> di 11 titik pantai yang tersebar di 10 provinsi. Hasilnya, kemasan dari Unilever, Indofood dan Mayora Indah menjadi tiga besar penyumbang sampah kemasan plastik sekali pakai.</p> <p><em>Brand audit </em>ini bertujuan untuk mengetahui siapa produsen pemilik merek-merek yang kemasannya mencemari sungai, pantai dan lingkungan di Indonesia.&nbsp;</p> <p>Hasil <em>brand audit</em> yang dilakukan oleh gerakan Pawai Bebas Plastik dari bulan Februari hingga Juni 2022 di 27 titik pantai di Indonesia menunjukkan, produsen Indofood, Unilever dan Mayora Indah menempati sebagai 3 besar penyumbang sampah kemasan plastik sekali pakai yang mencemari 27 titik pantai di Indonesia. Pawai Bebas Plastik menemukan jenis kemasan plastik yang terbanyak selama <em>Brand Audit</em> adalah kemasan plastik sekali pakai yaitu sachet sebanyak 79,7 persen dari total temuan sampah plastik, ujar Tenia dari Divers Clean Action (DCA) [2]&nbsp;</p>",
  "tags": ["hutan", "krisis iklim"],
  "imageUrl": "https://www.greenpeace.org/static/planet4-indonesia-stateless/2021/11/beb8946b-gp1swjin_web_size-768x512.jpg"
}
```
