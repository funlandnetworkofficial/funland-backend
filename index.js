import express from 'express';
import cors from 'cors';
import { httpServerHandler } from 'cloudflare:node'; // The bridge for Express

const app = express();

app.use(cors());
app.use(express.json());

// Your Product Data
const products = [
  { id: "rank-immortal", cs_id: "582910", name: "IMMORTAL RANK", price: 24.99 },
  { id: "crate-god", cs_id: "582911", name: "GOD CRATE", price: 4.99 }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/', (req, res) => {
  res.send('FunLand Cloudflare API is Live!');
});

// Cloudflare doesn't use app.listen. It uses this export:

export default httpServerHandler(app);
