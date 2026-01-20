import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingCart, Truck, Shield, QrCode, Leaf, Check, Star } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { getProductById, getRelatedProducts, Product } from "../data/products";
import { sendWhatsAppOrder } from "../utils/Whatsapp.js";


const ProductDetail = ({ Product }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { toast } = useToast();

    const product = getProductById(Number(id));
    const relatedProducts = product ? getRelatedProducts(product.id, product.category) : [];

    const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    const handleOrder = () => {
        sendWhatsAppOrder({
            phoneNumber: "918113063359",
            productName: product.name,
            price: totalPrice,
            size: selectedSize,
            quantity
        });
    };

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center space-y-4">
                        <h1 className="text-2xl font-bold text-foreground">Product Not Found</h1>
                        <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
                        <Button asChild>
                            <Link to="/shop">Back to Shop</Link>
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const handleQuantityChange = (delta: number) => {
        setQuantity(prev => Math.max(1, Math.min(99, prev + delta)));
    };

    const handleAddToCart = () => {
        toast({
            title: "Added to Cart!",
            description: `${quantity}x ${product.name} (${selectedSize}) added to your cart.`,
        });
    };

    //     const sendWhatsAppOrder = ({
    //         phoneNumber,
    //         productName,
    //         price,
    //         size,
    //         quantity
    //     }) => {
    //         const message = `
    // Hello EcoTote 👋

    // I would like to place an order.

    // 🛍 Product: ${productName}
    // 📏 Size: ${size}
    // 📦 Quantity: ${quantity}
    // 💰 Price: ₹${price}

    // Please let me know the next steps.
    // `;

    //         const encodedMessage = encodeURIComponent(message.trim());
    //         const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    //         window.open(url, "_blank");
    //     };

    const totalPrice = product.price * quantity;

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1">
                {/* Breadcrumb */}
                <div className="bg-cream/50 border-b border-border/50">
                    <div className="eco-container py-4">
                        <div className="flex items-center gap-2 text-sm">
                            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                                Home
                            </Link>
                            <span className="text-muted-foreground">/</span>
                            <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                                Shop
                            </Link>
                            <span className="text-muted-foreground">/</span>
                            <span className="text-foreground font-medium">{product.name}</span>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="eco-container pt-6">
                    <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground hover:text-foreground">
                        <Link to="/shop">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Shop
                        </Link>
                    </Button>
                </div>

                {/* Product Section */}
                <section className="eco-container py-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Product Images */}
                        <div className="space-y-4">
                            {/* Main Image */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-cream border border-border/50 shadow-eco-sm">
                                <img
                                    src={product.gallery[selectedImage]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                {product.originalPrice && (
                                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                    </Badge>
                                )}
                                {/* {!product.inStock && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <Badge variant="destructive" className="text-lg py-2 px-4">Out of Stock</Badge>
                  </div>
                )} */}
                            </div>

                            {/* Thumbnail Gallery */}
                            {product.gallery.length > 1 && (
                                <div className="flex gap-3">
                                    {product.gallery.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === index
                                                ? "border-primary ring-2 ring-primary/20"
                                                : "border-border/50 hover:border-primary/50"
                                                }`}
                                        >
                                            <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            {/* Category & Name */}
                            <div className="space-y-3">
                                <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
                                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                                </Badge>
                                <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                    {product.name}
                                </h1>

                                {/* Rating */}
                                <div className="flex items-center gap-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-muted-foreground">(4.9 • 128 reviews)</span>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline gap-3">
                                <span className="text-4xl font-bold text-primary">₹{product.price}</span>
                                {product.originalPrice && (
                                    <span className="text-xl text-muted-foreground line-through">₹{product.originalPrice}</span>
                                )}
                                <span className="text-muted-foreground">/ {product.unit}</span>
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground leading-relaxed">
                                {product.longDescription}
                            </p>

                            <Separator />

                            {/* Size Selection */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-foreground">
                                    Select Size
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 rounded-xl border-2 font-medium transition-all ${selectedSize === size
                                                ? "border-primary bg-primary text-primary-foreground"
                                                : "border-border bg-background text-foreground hover:border-primary/50"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-foreground">
                                    Quantity
                                </label>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center border-2 border-border rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => handleQuantityChange(-1)}
                                            className="p-3 hover:bg-muted transition-colors disabled:opacity-50"
                                            disabled={quantity <= 1}
                                        >
                                            <Minus className="h-4 w-4" />
                                        </button>
                                        <span className="w-16 text-center font-semibold text-lg">{quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(1)}
                                            className="p-3 hover:bg-muted transition-colors disabled:opacity-50"
                                            disabled={quantity >= 99}
                                        >
                                            <Plus className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <span className="text-muted-foreground">
                                        = <span className="font-semibold text-foreground">₹{totalPrice.toLocaleString()}</span> total
                                    </span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <Button
                                    size="xl"
                                    variant="hero"
                                    className="flex-1 gap-2"
                                    onClick={handleOrder}
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    Order Now
                                </Button>
                                {/* <Button
                  size="xl"
                  variant="hero-outline"
                  className="flex-1 gap-2"
                  onClick={handleAddToCart}
                >
                  <Plus className="h-5 w-5" />
                  Add to Cart
                </Button> */}
                            </div>


                            {/* Trust Badges */}
                            <div className="grid grid-cols-2 gap-3 pt-4">
                                <div className="flex items-center gap-3 p-3 bg-leaf/10 rounded-xl border border-leaf/20">
                                    <Truck className="h-5 w-5 text-primary" />
                                    <span className="text-sm font-medium">Free Shipping 5000+</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-leaf/10 rounded-xl border border-leaf/20">
                                    <Shield className="h-5 w-5 text-primary" />
                                    <span className="text-sm font-medium">Quality Guaranteed</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-leaf/10 rounded-xl border border-leaf/20">
                                    <QrCode className="h-5 w-5 text-primary" />
                                    <span className="text-sm font-medium">QR Verified</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-leaf/10 rounded-xl border border-leaf/20">
                                    <Leaf className="h-5 w-5 text-primary" />
                                    <span className="text-sm font-medium">100% Eco-Friendly</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features & Specifications */}
                <section className="bg-cream/50 border-y border-border/50">
                    <div className="eco-container py-12">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Features */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">Features</h2>
                                <ul className="space-y-3">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="mt-1 p-1 bg-primary rounded-full">
                                                <Check className="h-3 w-3 text-primary-foreground" />
                                            </div>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Specifications */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">Specifications</h2>
                                <div className="space-y-3">
                                    <div className="flex justify-between py-3 border-b border-border/50">
                                        <span className="text-muted-foreground">Material</span>
                                        <span className="font-medium text-foreground">{product.specifications.material}</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-border/50">
                                        <span className="text-muted-foreground">Certification</span>
                                        <span className="font-medium text-foreground">{product.specifications.certification}</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-border/50">
                                        <span className="text-muted-foreground">Origin</span>
                                        <span className="font-medium text-foreground">{product.specifications.origin}</span>
                                    </div>
                                    <div className="flex justify-between py-3">
                                        <span className="text-muted-foreground">Pack Size</span>
                                        <span className="font-medium text-foreground">{product.specifications.packSize}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="eco-container py-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {relatedProducts.map((relatedProduct) => (
                                <Link
                                    key={relatedProduct.id}
                                    to={`/product/${relatedProduct.id}`}
                                    className="group"
                                >
                                    <div className="eco-card overflow-hidden transition-all hover:shadow-eco-md hover:-translate-y-1">
                                        <div className="aspect-square overflow-hidden">
                                            <img
                                                src={relatedProduct.image}
                                                alt={relatedProduct.name}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-4 space-y-2">
                                            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                                                {relatedProduct.name}
                                            </h3>
                                            <p className="text-primary font-bold">₹{relatedProduct.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetail;



// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import {
//   ArrowLeft,
//   Minus,
//   Plus,
//   ShoppingCart,
//   Truck,
//   Shield,
//   QrCode,
//   Leaf,
//   Check,
//   Star,
// } from "lucide-react";

// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { useToast } from "@/hooks/use-toast";

// import { getProductById, getRelatedProducts } from "../data/products";
// import { sendWhatsAppOrder } from "../utils/WhatsApp";

// const ProductDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const { toast } = useToast();

//   const product = getProductById(Number(id));
//   const relatedProducts = product
//     ? getRelatedProducts(product.id, product.category)
//     : [];

//   const [selectedSize, setSelectedSize] = useState(
//     product?.sizes[0] || ""
//   );
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(0);

//   if (!product) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <main className="flex-1 flex items-center justify-center">
//           <div className="text-center space-y-4">
//             <h1 className="text-2xl font-bold">Product Not Found</h1>
//             <Button asChild>
//               <Link to="/shop">Back to Shop</Link>
//             </Button>
//           </div>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   // ✅ DEFINE BEFORE USE
//   const totalPrice = product.price * quantity;

//   // ✅ SAFE ORDER HANDLER
//   const handleOrder = () => {
//     sendWhatsAppOrder({
//       phoneNumber: "918113063359",
//       productName: product.name,
//       price: totalPrice,
//       size: selectedSize,
//       quantity,
//     });
//   };

//   const handleQuantityChange = (delta: number) => {
//     setQuantity((prev) => Math.max(1, Math.min(99, prev + delta)));
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-background">
//       <Header />

//       <main className="flex-1">
//         {/* Back Button */}
//         <div className="eco-container pt-6">
//           <Button variant="ghost" size="sm" asChild>
//             <Link to="/shop" className="flex gap-2">
//               <ArrowLeft className="h-4 w-4" />
//               Back to Shop
//             </Link>
//           </Button>
//         </div>

//         {/* Product Section */}
//         <section className="eco-container py-8">
//           <div className="grid lg:grid-cols-2 gap-10">
//             {/* Images */}
//             <div>
//               <img
//                 src={product.gallery[selectedImage]}
//                 alt={product.name}
//                 className="rounded-2xl w-full object-cover"
//               />
//             </div>

//             {/* Info */}
//             <div className="space-y-6">
//               <Badge>{product.category}</Badge>

//               <h1 className="text-3xl font-bold">{product.name}</h1>

//               <div className="flex items-center gap-2">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
//                 ))}
//                 <span className="text-sm">(4.9)</span>
//               </div>

//               <div className="text-3xl font-bold text-primary">
//                 ₹{product.price}
//               </div>

//               <p className="text-muted-foreground">
//                 {product.longDescription}
//               </p>

//               <Separator />

//               {/* Size */}
//               <div>
//                 <p className="font-semibold mb-2">Select Size</p>
//                 <div className="flex gap-3">
//                   {product.sizes.map((size) => (
//                     <button
//                       key={size}
//                       onClick={() => setSelectedSize(size)}
//                       className={`px-4 py-2 rounded-xl border ${
//                         selectedSize === size
//                           ? "bg-primary text-white"
//                           : "border-border"
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Quantity */}
//               <div className="flex items-center gap-4">
//                 <button onClick={() => handleQuantityChange(-1)}>
//                   <Minus />
//                 </button>
//                 <span className="text-lg font-bold">{quantity}</span>
//                 <button onClick={() => handleQuantityChange(1)}>
//                   <Plus />
//                 </button>
//                 <span className="text-muted-foreground">
//                   Total: ₹{totalPrice}
//                 </span>
//               </div>

//               {/* Order Button */}
//               <Button
//                 size="xl"
//                 variant="hero"
//                 className="w-full gap-2"
//                 onClick={handleOrder}
//               >
//                 <ShoppingCart className="h-5 w-5" />
//                 Order Now (WhatsApp)
//               </Button>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default ProductDetail;
