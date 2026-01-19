import productSquarePlates from "@/assets/product-square-plates.jpg";
import productSquarePlatesBranded from "@/assets/product-square-plates-branded.jpg";
import productRoundPlateGreen from "@/assets/product-round-plate-green.jpg";
import productRoundPlates from "@/assets/product-round-plates.jpg";
import productRoundPlateWhite from "@/assets/product-round-plate-white.jpg";
import productRectPlates from "@/assets/product-rect-plates.jpg";
import productKraftBag from "@/assets/product-kraft-bag.jpg";
import productKraftBagDetail from "@/assets/product-kraft-bag-detail.jpg";
import productWhiteBagOne from "@/assets/product-white-bags.jpg";
import productWhiteBagsTwo from "@/assets/product-kraft-bag-one.jpeg";
import productWhiteBagsThree from "@/assets/product-kraft-bag-two.jpeg";
import productWhiteBagsFour from "@/assets/product-kraft-bag-three.jpeg";
import productWhiteBagsFive from "@/assets/product-kraft-bag-four.jpeg";
import productWhiteBagsSix from "@/assets/product-kraft-bag-five.jpeg";
import productWhiteBagsSeven from "@/assets/product-kraft-bag-six.jpeg";
import productWhiteBagsEight from "@/assets/product-kraft-bag-eight.jpeg";
import productWhiteBagsNine from "@/assets/product-kraft-bag-eight.jpeg";
import productWhiteBagsTen from "@/assets/product-kraft-bag-nine.jpeg";
import productWhiteBagsOneone from "@/assets/product-kraft-bag-ten.jpeg";
import productWhiteBagsOnetwo from "@/assets/product-kraft-bag-oneone.jpeg";
import productWhiteBagsOnethree from "@/assets/product-kraft-bag-twotwo.jpeg";
import productWhiteBagsOnefour from "@/assets/product-kraft-bag-threethree.jpeg";
import productWhiteBagsOnefive from "@/assets/product-kraft-bag-onefour.jpeg";
import productWhiteBagsOnesix from "@/assets/product-kraft-bag-onefive.jpeg";
import productWhiteBagsOneseven from "@/assets/product-kraft-bag-onesix.jpeg";
import productWhiteBagsOneeight from "@/assets/product-kraft-bag-oneseven.jpeg";
import productWhiteBagsOnenine from "@/assets/product-kraft-bag-oneeight.jpeg";
import productWhiteBagsTwoone from "@/assets/product-kraft-bag-threeone.jpeg";
import productWhiteBagsTwotwo from "@/assets/product-kraft-bag-threetwo.jpeg";
import productWhiteBagsTwothree from "@/assets/product-kraft-bag-threethree.jpeg";
import productWhiteBagsTwofour from "@/assets/product-kraft-bag-threefour.jpeg";
import productWhiteBagsTwofive from "@/assets/product-kraft-bag-twoone.jpeg";
import productWhiteBagsTwosix from "@/assets/product-kraft-bag-twotwo.jpeg";
import productWhiteBagsTwoseven from "@/assets/product-kraft-bag-twothree.jpeg";
import productWhiteBagsTwoeight from "@/assets/product-kraft-bag-twofour.jpeg";
import productWhiteBagsTwonine from "@/assets/product-kraft-bag-twofive.jpeg";
import productWhiteBagsThreeone from "@/assets/product-kraft-bag-twosix.jpeg";
import productWhiteBagsThreetwo from "@/assets/product-kraft-bag-twoseven.jpeg";
import productWhiteBagsThreefour from "@/assets/product-kraft-bag-twoeight.jpeg";
import productWhiteBagsThreefive from "@/assets/product-kraft-bag-twonine.jpeg";
import productFootwareOne from "@/assets/product-footware-one.jpeg";
import productFootwareTwo from "@/assets/product-footware-two.jpeg";
import productFootwareFive from "@/assets/product-footware-seven.jpeg";
import productFootwareSix from "@/assets/product-footware-eight.jpeg";
import productFootwareEight from "@/assets/product-footware-ten.jpeg";
import productFootwareNine from "@/assets/product-footware-oneone.jpeg";

export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  price: number;
  originalPrice?: number;
  category: string;
  sizes: string[];
  selectedSize?: string;
  unit: string;
  features: string[];
  specifications: {
    material: string;
    certification: string;
    origin: string;
    packSize: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Square Disposable Plates - 6 inch",
    description: "Perfect for appetizers and desserts. Pack of 50.",
    longDescription: "Our 6-inch square disposable plates are crafted from 100% biodegradable materials, making them the perfect eco-friendly choice for appetizers, desserts, and small portions. Each plate features a sleek, modern design with clean edges that add elegance to any table setting while being completely compostable.",
    image: productSquarePlates,
    gallery: [productSquarePlates, productSquarePlatesBranded],
    price: 129,
    originalPrice: 159,
    category: "plates",
    sizes: ["6 inch", "8 inch", "10 inch"],
    unit: "pack of 50",
    features: [
      "100% Biodegradable & Compostable",
      "Food-Grade Certified",
      "Microwave Safe",
      "Oil & Water Resistant",
      "QR Code Verified Authenticity"
    ],
    specifications: {
      material: "Sugarcane Bagasse",
      certification: "FDA Approved, BPI Certified",
      origin: "Made in Kerala, India",
      packSize: "50 plates per pack"
    }
  },
  {
    id: 2,
    name: "Square Disposable Plates - 8 inch",
    description: "Ideal for main courses. Pack of 50.",
    longDescription: "The 8-inch square plates are our bestseller for main courses and buffet servings. Made from premium sugarcane bagasse, these plates are sturdy enough to hold heavier foods while maintaining their eco-friendly credentials. Perfect for weddings, corporate events, and restaurants.",
    image: productSquarePlatesBranded,
    gallery: [productSquarePlatesBranded, productSquarePlates],
    price: 149,
    originalPrice: 179,
    category: "plates",
    sizes: ["6 inch", "8 inch", "10 inch"],
    unit: "pack of 50",
    features: [
      "100% Biodegradable & Compostable",
      "Extra Sturdy Construction",
      "Microwave Safe",
      "Cut Resistant",
      "QR Code Verified Authenticity"
    ],
    specifications: {
      material: "Sugarcane Bagasse",
      certification: "FDA Approved, BPI Certified",
      origin: "Made in Kerala, India",
      packSize: "50 plates per pack"
    }
  },
  {
    id: 3,
    name: "Round Plates with Green Print",
    description: "Eco-branded plates for events. Pack of 50.",
    longDescription: "Make a statement with our beautifully designed round plates featuring an elegant green eco-print. These plates not only serve your food but also communicate your commitment to sustainability. The tasteful design makes them perfect for eco-conscious events and green-themed celebrations.",
    image: productRoundPlateGreen,
    gallery: [productRoundPlateGreen, productRoundPlates, productRoundPlateWhite],
    price: 159,
    category: "plates",
    sizes: ["6 inch", "7 inch", "8 inch"],
    unit: "pack of 50",
    features: [
      "Eco-Friendly Design Print",
      "100% Biodegradable",
      "Premium Finish",
      "Leak Proof",
      "QR Code Verified Authenticity"
    ],
    specifications: {
      material: "Sugarcane Bagasse with Soy-based Ink",
      certification: "FDA Approved, BPI Certified",
      origin: "Made in Kerala, India",
      packSize: "50 plates per pack"
    }
  },
  {
    id: 4,
    name: "Round Scalloped Plates",
    description: "Elegant plates with scalloped edges. Pack of 50.",
    longDescription: "Add a touch of elegance to your events with our round scalloped plates. The decorative scalloped edges give these plates a premium look that rivals traditional dinnerware, while being completely biodegradable. Ideal for weddings, anniversaries, and upscale catering.",
    image: productRoundPlates,
    gallery: [productRoundPlates, productRoundPlateGreen, productRoundPlateWhite],
    price: 149,
    category: "plates",
    sizes: ["6 inch", "7 inch", "9 inch"],
    unit: "pack of 50",
    features: [
      "Elegant Scalloped Edges",
      "Premium Quality",
      "100% Biodegradable",
      "Sturdy Construction",
      "QR Code Verified Authenticity"
    ],
    specifications: {
      material: "Sugarcane Bagasse",
      certification: "FDA Approved, BPI Certified",
      origin: "Made in Kerala, India",
      packSize: "50 plates per pack"
    }
  },
  {
    id: 5,
    name: "Round White Plates",
    description: "Classic white plates for all occasions. Pack of 50.",
    longDescription: "Our classic round white plates offer timeless elegance for any occasion. The pristine white finish provides a perfect canvas for food presentation, making your dishes look even more appetizing. These versatile plates work for everything from casual gatherings to formal events.",
    image: productRoundPlateWhite,
    gallery: [productRoundPlateWhite, productRoundPlates],
    price: 139,
    category: "plates",
    sizes: ["6 inch", "8 inch", "10 inch"],
    unit: "pack of 50",
    features: [
      "Classic White Finish",
      "Versatile Design",
      "100% Biodegradable",
      "Food Safe",
      "QR Code Verified Authenticity"
    ],
    specifications: {
      material: "Sugarcane Bagasse",
      certification: "FDA Approved, BPI Certified",
      origin: "Made in Kerala, India",
      packSize: "50 plates per pack"
    }
  },
  {
    id: 6,
    name: "Rectangular Food Trays",
    description: "Versatile trays for catering. Pack of 25.",
    longDescription: "Our rectangular food trays are designed for versatility and functionality. Perfect for serving snacks, appetizers, or as compartmentalized meal containers. The sturdy construction handles both hot and cold foods, making them ideal for catering services, food trucks, and event planning.",
    image: productRectPlates,
    gallery: [productRectPlates],
    price: 199,
    category: "trays",
    sizes: ["Small", "Medium", "Large"],
    unit: "pack of 25",
    features: [
      "Multi-Purpose Design",
      "Hot & Cold Food Safe",
      "Stackable",
      "100% Biodegradable",
      "QR Code Verified Authenticity"
    ],
    specifications: {
      material: "Kraft Paper with Bagasse Lining",
      certification: "FDA Approved, BPI Certified",
      origin: "Made in Kerala, India",
      packSize: "25 trays per pack"
    }
  },
  {
    id: 7,
    name: "Kraft Shopping Bag - Small",
    description: "Compact bags for small items. Pack of 25.",
    longDescription: "Our small kraft shopping bags are perfect for retail shops, boutiques, and gift packaging. The classic brown kraft paper with twisted handles offers both durability and style. These bags can hold up to 3kg and are fully recyclable and biodegradable.",
    image: productKraftBagDetail,
    gallery: [productKraftBagDetail, productKraftBag],
    price: 149,
    category: "bags",
    sizes: ["Small", "Medium", "Large", "Extra Large"],
    unit: "pack of 25",
    features: [
      "Twisted Paper Handles",
      "3kg Weight Capacity",
      "Reinforced Bottom",
      "100% Recyclable",
      "Custom Printing Available"
    ],
    specifications: {
      material: "Virgin Kraft Paper",
      certification: "FSC Certified",
      origin: "Made in Kerala, India",
      packSize: "25 bags per pack"
    }
  },
  {
    id: 8,
    name: "Kraft Shopping Bag - Medium",
    description: "Versatile bags for everyday use. Pack of 25.",
    longDescription: "The medium kraft shopping bag is our most popular size, perfect for grocery stores, retail outlets, and restaurant takeaways. With a 5kg weight capacity and reinforced construction, these bags offer reliable performance while showcasing your commitment to sustainability.",
    image: productKraftBag,
    gallery: [productKraftBag, productKraftBagDetail],
    price: 199,
    category: "bags",
    sizes: ["Small", "Medium", "Large", "Extra Large"],
    unit: "pack of 25",
    features: [
      "Twisted Paper Handles",
      "5kg Weight Capacity",
      "Wide Base for Stability",
      "100% Recyclable",
      "Custom Printing Available"
    ],
    specifications: {
      material: "Virgin Kraft Paper",
      certification: "FSC Certified",
      origin: "Made in Kerala, India",
      packSize: "25 bags per pack"
    }
  },
  {
    id: 9,
    name: "White Paper Bags - Premium Set",
    description: "Premium white bags with handles. Various sizes.",
    longDescription: "Our premium white paper bags offer a clean, sophisticated look perfect for upscale retail, boutiques, and gift packaging. The bright white finish can be customized with your branding, making these bags an excellent marketing tool while being environmentally responsible.",
    image: productWhiteBagOne,
    gallery: [productWhiteBagOne],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
      "Premium White Finish",
      "Assorted Sizes Included",
      "Twisted Paper Handles",
      "100% Recyclable",
      "Perfect for Branding"
    ],
    specifications: {
      material: "Bleached Kraft Paper",
      certification: "FSC Certified",
      origin: "Made in Kerala, India",
      packSize: "Assorted sizes pack"
    }
  },
  {
    id: 10,
    name: "EcoStep Floral Comfort Flip-Flops",
    description: "Stylish eco-friendly flip-flops featuring a floral strap design for everyday comfort.",
    longDescription: "EcoStep Floral Comfort Flip-Flops combine sustainability with style. Designed with a soft cushioned sole and a durable floral-patterned strap, these flip-flops provide all-day comfort for casual outings and daily wear. Lightweight and breathable, they are perfect for those who value comfort while making environmentally responsible choices.",
    image: productFootwareOne,
    gallery: [productFootwareOne],
    price: 249,
    originalPrice: 299,
    category: "Footware",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
      "Eco-Friendly Materials",
    "Soft Cushioned Sole",
    "Durable Printed Strap",
    "Lightweight & Breathable",
    "Everyday Comfort Fit"
    ],
    specifications: {
      material: "Sustainable EVA & Natural Rubber",
    certification: "Eco-Conscious Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "1 Pair"
    }
  },
  {
    id: 11,
    name: "TerraStep Classic Eco Flip-Flops",
    description: "Minimal and durable eco flip-flops crafted for daily comfort and reliability.",
    longDescription: "TerraStep Classic Eco Flip-Flops are built for simplicity, strength, and sustainability. Featuring a sturdy sole and a comfortable strap, these flip-flops are ideal for everyday use, travel, and relaxed outdoor activities. Their classic design ensures versatility while eco-conscious materials support a greener lifestyle.",
    image: productFootwareTwo,
    gallery: [productFootwareTwo],
    price: 249,
    originalPrice: 299,
    category: "Footware",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
      "Eco-Friendly Materials",
    "Soft Cushioned Sole",
    "Durable Printed Strap",
    "Lightweight & Breathable",
    "Everyday Comfort Fit"
    ],
    specifications: {
      material: "Sustainable EVA & Natural Rubber",
    certification: "Eco-Conscious Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "1 Pair"
    }
  },
  {
    id: 14,
    name: "PureWalk EarthTone Sandals",
    description: "Earth-toned sandals offering natural comfort and a timeless eco-inspired look.",
    longDescription: "PureWalk EarthTone Sandals are inspired by nature and designed for comfort. The textured sole provides excellent grip, while the natural color palette adds a grounded, premium feel. Perfect for casual wear, these sandals deliver durability and comfort while aligning with environmentally responsible values.",
    image: productFootwareFive,
    gallery: [productFootwareFive],
    price: 249,
    originalPrice: 299,
    category: "Footware",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
      "Eco-Friendly Materials",
    "Soft Cushioned Sole",
    "Durable Printed Strap",
    "Lightweight & Breathable",
    "Everyday Comfort Fit"
    ],
    specifications: {
      material: "Sustainable EVA & Natural Rubber",
    certification: "Eco-Conscious Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "1 Pair"
    }
  },
  {
    id: 15,
    name: "LeafStride Heritage Flip-Flops",
    description: "Classic heritage-style flip-flops designed for comfort and everyday wear.",
    longDescription: "LeafStride Heritage Flip-Flops blend traditional design with modern comfort. Crafted with a supportive sole and strong straps, they offer reliable wear for daily activities. The rich, heritage-inspired tone adds a refined look, making these flip-flops a dependable choice for comfort-focused, eco-conscious customers.",
    image: productFootwareSix,
    gallery: [productFootwareSix],
    price: 249,
    originalPrice: 299,
    category: "Footware",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
      "Eco-Friendly Materials",
    "Soft Cushioned Sole",
    "Durable Printed Strap",
    "Lightweight & Breathable",
    "Everyday Comfort Fit"
    ],
    specifications: {
      material: "Sustainable EVA & Natural Rubber",
    certification: "Eco-Conscious Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "1 Pair"
    }
  },
  {
    id: 17,
    name: "TerraGrip Comfort Sole Flip-Flops",
    description: "Comfort-focused flip-flops with a thick sole for enhanced support and durability.",
    longDescription: "TerraGrip Comfort Sole Flip-Flops are designed for those who prioritize support and stability. Featuring a thicker cushioned sole for improved shock absorption, these flip-flops reduce foot fatigue during extended wear. Ideal for daily use, they combine comfort, durability, and sustainable design in one reliable pair.",
    image: productFootwareEight,
    gallery: [productFootwareEight],
    price: 249,
    originalPrice: 299,
    category: "Footware",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
      "Eco-Friendly Materials",
    "Soft Cushioned Sole",
    "Durable Printed Strap",
    "Lightweight & Breathable",
    "Everyday Comfort Fit"
    ],
    specifications: {
      material: "Sustainable EVA & Natural Rubber",
    certification: "Eco-Conscious Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "1 Pair"
    }
  },
  {
    id: 18,
    name: "EcoWave Lightweight Flip-Flops",
    description: "Lightweight and flexible flip-flops designed for effortless everyday comfort.",
    longDescription: "EcoWave Lightweight Flip-Flops are crafted for ease, movement, and comfort. With a flexible sole and lightweight construction, they are perfect for travel, casual walks, and everyday use. The modern design paired with eco-friendly materials makes them a smart, sustainable choice for active lifestyles.",
    image: productFootwareNine,
    gallery: [productFootwareNine],
    price: 249,
    originalPrice: 299,
    category: "Footware",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
      "Eco-Friendly Materials",
    "Soft Cushioned Sole",
    "Durable Printed Strap",
    "Lightweight & Breathable",
    "Everyday Comfort Fit"
    ],
    specifications: {
      material: "Sustainable EVA & Natural Rubber",
    certification: "Eco-Conscious Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "1 Pair"
    }
  },
  {
    id: 19,
    name: "EcoTote PureCarry Paper Bag",
    description: "Minimal white paper bag for clean and professional packaging.",
    longDescription: "EcoTote PureCarry Paper Bags are designed for brands that value simplicity and sustainability. Crafted from high-quality recyclable paper, these bags offer a clean look with strong handles, making them ideal for retail stores, gifting, and takeaway packaging.",
    image: productWhiteBagsTwo,
    gallery: [productWhiteBagsTwo],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 20,
    name: "EcoTote NatureCraft Kraft Bag",
    description: "Natural kraft paper bag with a strong and earthy finish.",
    longDescription: "EcoTote NatureCraft Kraft Bags are made from durable kraft paper, offering excellent strength and a natural aesthetic. Perfect for eco-conscious brands, cafés, and boutiques, these bags support sustainable packaging without compromising reliability.",
    image: productWhiteBagsThree,
    gallery: [productWhiteBagsThree],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 21,
    name: "EcoTote LeafLine Printed Paper Bag",
    description: "Nature-inspired printed paper bag for stylish packaging.",
    longDescription: "EcoTote LeafLine Printed Paper Bags feature elegant botanical designs that enhance product presentation. Made with recyclable materials, they are ideal for gift packaging, retail branding, and environmentally responsible businesses.",
    image: productWhiteBagsFour,
    gallery: [productWhiteBagsFour],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 22,
    name: "EcoTote Signature White Paper Bag",
    description: "Premium white paper bag designed for elegant brand presentation.",
    longDescription: "EcoTote Signature White Paper Bags combine refined aesthetics with eco-friendly materials. Their smooth finish and sturdy handles make them perfect for premium retail, corporate gifting, and special occasions.",
    image: productWhiteBagsFive,
    gallery: [productWhiteBagsFive],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 23,
    name: "EcoTote FlexCarry Assorted Paper Bag",
    description: "Versatile paper bag set available in multiple sizes.",
    longDescription: "EcoTote FlexCarry Paper Bags offer flexibility for various packaging needs. Available in assorted sizes, these recyclable bags are suitable for retail items, food packaging, and gift wrapping, delivering convenience with sustainability.",
    image: productWhiteBagsSix,
    gallery: [productWhiteBagsSix],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 24,
    name: "EcoTote EarthTone Kraft Bag",
    description: "Earth-toned kraft paper bag with a natural look.",
    longDescription: "EcoTote EarthTone Kraft Bags provide a rustic and eco-friendly appearance, ideal for organic brands and sustainable businesses. Designed for strength and reuse, they promote environmentally responsible packaging.",
    image: productWhiteBagsSeven,
    gallery: [productWhiteBagsSeven],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 25,
    name: "EcoTote Artisan Print Paper Bag",
    description: "Artistic printed paper bag crafted for premium packaging.",
    longDescription: "EcoTote Artisan Print Paper Bags combine creative design with durability. Made from recyclable paper, these bags enhance brand appeal while supporting eco-conscious values.",
    image: productWhiteBagsEight,
    gallery: [productWhiteBagsEight],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 26,
    name: "EcoTote UrbanCarry Paper Bag",
    description: "Modern paper bag designed for everyday retail use.",
    longDescription: "EcoTote UrbanCarry Paper Bags are built for daily commercial use. Featuring strong construction and a clean design, they are ideal for shops, takeaway services, and lifestyle brands.",
    image: productWhiteBagsNine,
    gallery: [productWhiteBagsNine],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 27,
    name: "EcoTote GreenMark Eco Paper Bag",
    description: "Eco-certified paper bag for sustainable packaging solutions.",
    longDescription: "EcoTote GreenMark Eco Paper Bags are manufactured using environmentally responsible processes. Designed for durability and recyclability, they help businesses reduce plastic usage while maintaining packaging quality.",
    image: productWhiteBagsTen,
    gallery: [productWhiteBagsTen],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 28,
    name: "EcoTote Classic Kraft Carry Bag",
    description: "Classic kraft paper bag with reliable strength.",
    longDescription: "EcoTote Classic Kraft Carry Bags are a dependable choice for retail and food packaging. Their sturdy paper construction ensures durability while reinforcing eco-friendly brand values.",
    image: productWhiteBagsOneone,
    gallery: [productWhiteBagsOneone],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 29,
    name: "EcoTote SoftTouch White Paper Bag",
    description: "Smooth-finish white paper bag for premium products.",
    longDescription: "EcoTote SoftTouch White Paper Bags feature a refined texture and clean design. Ideal for boutiques and gift packaging, they provide a premium look while remaining fully recyclable.",
    image: productWhiteBagsOnetwo,
    gallery: [productWhiteBagsOnetwo],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 30,
    name: "EcoTote NaturePrint Gift Bag",
    description: "Printed paper gift bag inspired by natural elements.",
    longDescription: "EcoTote NaturePrint Gift Bags enhance gifting experiences with elegant designs and eco-conscious materials. They offer reliable carrying strength and visual appeal for special occasions.",
    image: productWhiteBagsOnethree,
    gallery: [productWhiteBagsOnethree],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 31,
    name: "EcoTote Everyday Retail Paper Bag",
    description: "Durable paper bag designed for everyday retail needs.",
    longDescription: "EcoTote Everyday Retail Paper Bags are built for frequent use. Made from strong recyclable paper, they provide consistent performance for stores, supermarkets, and takeaway services.",
    image: productWhiteBagsOnefour,
    gallery: [productWhiteBagsOnefour],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 32,
    name: "EcoTote Premium Handle Paper Bag",
    description: "Paper bag with reinforced handles for added strength.",
    longDescription: "EcoTote Premium Handle Paper Bags are designed to carry heavier items securely. The reinforced handles and durable paper construction make them ideal for retail and gifting applications.",
    image: productWhiteBagsOnefive,
    gallery: [productWhiteBagsOnefive],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 33,
    name: "EcoTote Minimalist Carry Paper Bag",
    description: "Minimalist paper bag with a clean and modern look.",
    longDescription: "EcoTote Minimalist Carry Bags offer a sleek packaging solution for modern brands. Crafted from recyclable materials, they emphasize simplicity, elegance, and sustainability.",
    image: productWhiteBagsOnesix,
    gallery: [productWhiteBagsOnesix],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 34,
    name: "EcoTote EcoEssentials Paper Bag",
    description: "Essential eco-friendly paper bag for daily packaging.",
    longDescription: "EcoTote EcoEssentials Paper Bags are designed for practicality and sustainability. Suitable for a wide range of uses, they help businesses transition away from plastic packaging.",
    image: productWhiteBagsOneseven,
    gallery: [productWhiteBagsOneseven],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 35,
    name: "EcoTote Natural Kraft Gift Bag",
    description: "Natural kraft paper gift bag with a premium feel.",
    longDescription: "EcoTote Natural Kraft Gift Bags provide an organic look with strong construction. Ideal for gifting and specialty retail, they support eco-friendly branding efforts.",
    image: productWhiteBagsOneeight,
    gallery: [productWhiteBagsOneeight],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 36,
    name: "EcoTote Printed Boutique Paper Bag",
    description: "Stylish paper bag designed for boutique packaging.",
    longDescription: "EcoTote Printed Boutique Paper Bags elevate retail presentation with attractive designs and eco-friendly materials. Perfect for fashion, lifestyle, and specialty stores.",
    image: productWhiteBagsOnenine,
    gallery: [productWhiteBagsOnenine],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 37,
    name: "EcoTote Sustainable Carry Bag",
    description: "Sustainably produced paper bag for responsible brands.",
    longDescription: "EcoTote Sustainable Carry Bags are made using recyclable materials and responsible manufacturing practices. They provide durability while reinforcing environmental commitment.",
    image: productWhiteBagsTwoone,
    gallery: [productWhiteBagsTwoone],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 38,
    name: "EcoTote PureWhite Retail Bag",
    description: "Pure white paper bag for clean and modern packaging.",
    longDescription: "EcoTote PureWhite Retail Bags offer a crisp, professional appearance ideal for branding and customization. Their recyclable construction supports eco-conscious packaging solutions.",
    image: productWhiteBagsTwotwo,
    gallery: [productWhiteBagsTwotwo],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 39,
    name: "EcoTote ReuseReady Paper Bag",
    description: "Strong paper bag designed for reuse and durability.",
    longDescription: "EcoTote ReuseReady Paper Bags are built to last beyond single use. Their durable paper and reinforced handles encourage reuse while reducing waste.",
    image: productWhiteBagsTwothree,
    gallery: [productWhiteBagsTwothree],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 40,
    name: "EcoTote Organic Kraft Paper Bag",
    description: "Organic-look kraft paper bag for eco-focused brands.",
    longDescription: "EcoTote Organic Kraft Paper Bags deliver a natural aesthetic combined with reliable strength. Ideal for organic products, cafés, and sustainable retailers.",
    image: productWhiteBagsTwofour,
    gallery: [productWhiteBagsTwofour],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 41,
    name: "EcoTote Elegant Gift Paper Bag",
    description: "Elegant paper bag crafted for premium gifting.",
    longDescription: "EcoTote Elegant Gift Paper Bags enhance gifting experiences with refined design and eco-friendly materials. Perfect for special occasions and luxury packaging.",
    image: productWhiteBagsTwofive,
    gallery: [productWhiteBagsTwofive],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 42,
    name: "EcoTote DailyUse Carry Bag",
    description: "Reliable paper bag designed for everyday use.",
    longDescription: "EcoTote DailyUse Carry Bags provide dependable performance for retail and takeaway needs. Their recyclable paper construction supports sustainable daily operations.",
    image: productWhiteBagsTwosix,
    gallery: [productWhiteBagsTwosix],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 43,
    name: "EcoTote BrandReady Paper Bag",
    description: "Paper bag designed for easy branding and customization.",
    longDescription: "EcoTote BrandReady Paper Bags offer a smooth surface ideal for logos, prints, and custom designs. Perfect for businesses seeking eco-friendly packaging that enhances brand visibility.",
    image: productWhiteBagsTwoseven,
    gallery: [productWhiteBagsTwoseven],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 44,
    name: "EcoTote Organic Kraft Paper Bag",
    description: "Paper bag designed for easy branding and customization.",
    longDescription: "EcoTote BrandReady Paper Bags offer a smooth surface ideal for logos, prints, and custom designs. Perfect for businesses seeking eco-friendly packaging that enhances brand visibility.",
    image: productWhiteBagsTwoeight,
    gallery: [productWhiteBagsTwoeight],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 45,
    name: "EcoTote ReuseReady Paper Bag",
    description: "Organic-look kraft paper bag for eco-focused brands.",
    longDescription: "EcoTote Organic Kraft Paper Bags deliver a natural aesthetic combined with reliable strength. Ideal for organic products, cafés, and sustainable retailers.",
    image: productWhiteBagsTwonine,
    gallery: [productWhiteBagsTwonine],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 46,
    name: "EcoTote Elegant Gift Paper Bag",
    description: "Elegant paper bag crafted for premium gifting.",
    longDescription: "EcoTote Elegant Gift Paper Bags enhance gifting experiences with refined design and eco-friendly materials. Perfect for special occasions and luxury packaging.",
    image: productWhiteBagsThreeone,
    gallery: [productWhiteBagsThreeone],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 47,
    name: "EcoTote PureWhite Retail Bag",
    description: "Pure white paper bag for clean and modern packaging.",
    longDescription: "EcoTote PureWhite Retail Bags offer a crisp, professional appearance ideal for branding and customization. Their recyclable construction supports eco-conscious packaging solutions.",
    image: productWhiteBagsThreetwo,
    gallery: [productWhiteBagsThreetwo],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 48,
    name: "EcoTote Printed Boutique Paper Bag",
    description: "Stylish paper bag designed for boutique packaging.",
    longDescription: "EcoTote Printed Boutique Paper Bags elevate retail presentation with attractive designs and eco-friendly materials. Perfect for fashion, lifestyle, and specialty stores.",
    image: productWhiteBagsThreefour,
    gallery: [productWhiteBagsThreefour],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
  {
    id: 49,
    name: "EcoTote ReuseReady Paper Bag",
    description: "Lightweight and flexible flip-flops designed for effortless everyday comfort.",
    longDescription: "EcoWave Lightweight Flip-Flops are crafted for ease, movement, and comfort. With a flexible sole and lightweight construction, they are perfect for travel, casual walks, and everyday use. The modern design paired with eco-friendly materials makes them a smart, sustainable choice for active lifestyles.",
    image: productWhiteBagsThreefive,
    gallery: [productWhiteBagsThreefive],
    price: 249,
    originalPrice: 299,
    category: "bags",
    sizes: ["Small", "Medium", "Large"],
    unit: "assorted pack",
    features: [
       "100% Recyclable Paper",
    "Strong Twisted Handles",
    "Durable & Tear-Resistant",
    "Eco-Friendly Packaging",
    "Suitable for Retail & Gifting"
    ],
    specifications: {
      material: "Recyclable Kraft Paper",
    certification: "Eco-Friendly Manufacturing",
    origin: "Made in Kerala, India",
    packSize: "Assorted sizes pack"
    }
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (currentId: number, category: string, limit: number = 4): Product[] => {
  return products
    .filter(product => product.id !== currentId && product.category === category)
    .slice(0, limit);
};