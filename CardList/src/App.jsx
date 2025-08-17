import {ProductCard} from "./components/ProductCard";
import "./App.css";
function App() {

const products = [
  {
    id: 1,
    name: "Midnight Blue Executive Suit",
    price: "$320",
    category: "Business Formal",
    description: "Sharp navy two-piece suit with a tailored fit, paired with a white dress shirt and silk tie—made for high-profile meetings and formal occasions.",
    image: "https://shop.jimsformalwear.com/cdn/shop/files/michael-kors-blue-performance-stretch-slim-fit-wedding-suit-coat.jpg?v=1710527045"
  },
  {
    id: 2,
    name: "Urban Grey Blazer Set",
    price: "$380",
    category: "Smart Modern",
    description: "Slim-fit ash grey blazer over a pastel blue shirt, styled with charcoal chinos and loafers for a confident city look.",
    image: "https://www.makrom.co.uk/cdn/shop/articles/achieve-smart-casual-elegance-with-a-mens-blazer.jpg?v=1737522297"
  },
  {
    id: 3,
    name: "Monochrome Hoodie Drop",
    price: "$450",
    category: "Street Fashion",
    description: "Relaxed oversized hoodie with ripped denim and chunky sneakers—designed for bold, everyday streetwear vibes.",
    image: "https://tenshi-streetwear.com/cdn/shop/products/Techwear-Hoodie-Kakuzu-tenshi-streetwear_dd2753c8-072b-4dc5-8633-7ff698d371d8.jpg?v=1632944911"
  },
  {
    id: 4,
    name: "Summer Breeze Linen Fit",
    price: "$540",
    category: "Resort Casual",
    description: "Light linen shirt paired with slim trousers and slip-ons—perfect for hot summer days and effortless style.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrV8vyx5kdI_XVt31qShTmYm1_ugho4-8pw&s"
  },
  {
    id: 5,
    name: "Double Denim Combo",
    price: "$670",
    category: "Casual Street",
    description: "Classic denim jacket layered over a plain tee, styled with deep blue jeans and sneakers for a cool everyday fit.",
    image: "https://blog.ae.com/wp-content/uploads/sites/2/2022/09/20230922_ae_denimondenim_02.jpg?w=699"
  },
  {
    id: 6,
    name: "Sport Luxe Tracksuit",
    price: "$750",
    category: "Activewear",
    description: "Premium zip-up track jacket with slim joggers and trainers—where performance meets modern street style.",
    image: "https://cavaathleisure.com/cdn/shop/products/Black-Slim-Fit-Jogger-CAVA-athleisure-1679098877_1800x1800.jpg?v=1755195018"
  },
  {
    id: 7,
    name: "Rogue Leather Rider",
    price: "$880",
    category: "Moto Casual",
    description: "Edgy black leather jacket with distressed jeans and combat boots—built for a fearless, rebellious vibe.",
    image: "https://avada.website/classic-shop/wp-content/uploads/sites/48/2015/09/black_rebel_leather_jacket.jpg"
  },
  {
    id: 8,
    name: "Noir Minimal Outfit",
    price: "$960",
    category: "Modern Minimal",
    description: "All-black look with fitted tee, slim jeans, and Chelsea boots—subtle, refined, and undeniably bold.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO62ro0Jpb596nucoLaDqLRVU2O5YPcA-zMA&s"
  },
];

  

  return (
    < >
    <div className="app" >
    <div className="header">
      <h1 className="Heading">Product List</h1>
      <div className="line"></div>
     </div>
      <div className="product-grid">
        {products.map(item => (
          <div>

          <ProductCard cardData={item} key={item.id} />
          </div>
        ))}
      </div>
    </div>
    
  </>
  );
}

export default App;