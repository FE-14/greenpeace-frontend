# Greenpeace

This is the Greenpeace website.

![Screenshot 1]()

![Screenshot 2]()

## Links

- https://

### Production

- https://

### Local

- http://localhost:3000
- http://localhost:5173

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

| Name              | Role                   | GitHub URL                                           |
| ----------------- | ---------------------- | ---------------------------------------------------- |
| Ersan Karimi      | Lead, Frontend, Design | [@ersankarimi](https://github.com/ersankarimi)       |
| Intan Permatasari | Frontend, Design       | [@intanpermata11](https://github.com/intanpermata11) |
| Meilyana Anisa    | Frontend Design        | [@meilyanaanisa](https://github.com/meilyanaanisa)   |

## Tech Stack

### Commerce

- HTML
- CSS
  - Bootstrap v5.2
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

Start in production mode:

```sh
npm start
```

Format code:

```sh
npm run format
```

## Deployment

Details on deployment using Vercel or Netlify here.

## Data Model

### Posts Response Data

```json
{
  "title": "NDC Terbaru Indonesia Tidak Menjawab Ancaman Krisis Iklim",
  "author_name": "Greenpeace Indonesia",
  "post_date": "2022-09-28 10:12:20",
  "post_description": "Meskipun ada peningkatan dalam target pengurangan emisi, dari 29% menjadi 31.89% dengan usaha sendiri di tahun 2030, dan dari 41% menjadi 43.2% jika dengan bantuan internasional, namun enhanced NDC ini masih jauh dari harapan publik untuk melindungi masa depan Indonesia dari dampak buruk krisis iklim.",
  "post_content": "",
  "tags": ["hutan", "krisis iklim"],
  "image_url": "https://www.greenpeace.org/static/planet4-indonesia-stateless/2021/11/beb8946b-gp1swjin_web_size-768x512.jpg"
}
```
