// All dummy data, copy, and image URLs centralized here

export const brandName = "Nailavé";
export const brandTagline = "by Priya";
export const brandFull = "Nailavé by Priya";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Booking", path: "/booking" },
  { name: "Contact", path: "/contact" },
];

export const asSeenIn = ["VOGUE India", "The Bridal Edit", "Surat Style Diary", "Nail Art Magazine"];

export const images = {
  hero: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070&auto=format&fit=crop",
  portrait: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=387&auto=format&fit=crop",
  portfolio1: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1964&auto=format&fit=crop",
  portfolio2: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=1974&auto=format&fit=crop",
  portfolio3: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1920&auto=format&fit=crop",
  portfolio4: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop",
  portfolio5: "https://images.unsplash.com/photo-1696342003838-4a8f9f36588c?q=80&w=435&auto=format&fit=crop",
  portfolio6: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=387&auto=format&fit=crop",
  portfolio7: "https://images.unsplash.com/photo-1780624195552-7dd4c2bd12d1?q=80&w=580&auto=format&fit=crop",
  portfolio8: "https://images.unsplash.com/photo-1599206676335-193c82b13c9e?q=80&w=407&auto=format&fit=crop",
  portfolio9: "https://plus.unsplash.com/premium_photo-1703343320234-4c1a75b3ff13?q=80&w=387&auto=format&fit=crop",
  portfolio10: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?q=80&w=387&auto=format&fit=crop",
  portfolio11: "https://plus.unsplash.com/premium_photo-1661432806304-6d6cb7bfa4c1?q=80&w=870&auto=format&fit=crop",
  portfolio12: "https://images.unsplash.com/photo-1566423027823-1241024d04c2?q=80&w=387&auto=format&fit=crop",
  service1: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop",
  service2: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop",
  service3: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
  testimonial1: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1794&auto=format&fit=crop",
  testimonial2: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1791&auto=format&fit=crop",
  testimonial3: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",

};

export const featuredServices = [
  {
    id: 1,
    title: "Gel Extensions",
    description: "Sculpted to perfection, offering a flawless, natural-looking length that lasts for weeks without compromising on elegance.",
    icon: "💅",
    link: "/services"
  },
  {
    id: 2,
    title: "Nail Art",
    description: "From minimalist line work to intricate hand-painted florals, every design is a bespoke masterpiece crafted just for you.",
    icon: "🎨",
    link: "/services"
  },
  {
    id: 3,
    title: "Bridal Nails",
    description: "Make your special day unforgettable with our curated bridal packages, featuring subtle shimmer, pearls, and timeless aesthetics.",
    icon: "✨",
    link: "/services"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Bride, December 2023",
    text: "Priya didn't just do my nails; she created a piece of art. My bridal photos look like they belong in a magazine. Absolutely magical experience.",
    image: images.testimonial1
  },
  {
    id: 2,
    text: "I've been to salons in Mumbai and Dubai, but nothing compares to the precision and luxury feel of Nailavé. It's an experience, not just an appointment.",
    name: "Meera Kapoor",
    role: "Regular Client",
    image: images.testimonial2
  },
  {
    id: 3,
    text: "The attention to detail is insane. I showed Priya a vague Pinterest mood board and she brought it to life perfectly. My go-to nail artist forever.",
    name: "Riya Patel",
    role: "Content Creator",
    image: images.testimonial3
  }
];

export const servicesList = [
  { id: 1, name: "Classic Manicure", description: "A luxurious shaping, cuticle care, and hydration ritual for impeccably groomed natural nails.", price: "₹499", icon: "🤍" },
  { id: 2, name: "Gel Polish", description: "High-shine, chip-free color that lasts up to three weeks. Cured under LED for a flawless finish.", price: "₹799", icon: "✨" },
  { id: 3, name: "Acrylic Extensions", description: "Strong, lightweight, and custom-sculpted to your desired shape and length for maximum impact.", price: "₹1,499", icon: "💅" },
  { id: 4, name: "Nail Art (per nail)", description: "Hand-painted micro-designs, from delicate florals to abstract geometric patterns.", price: "₹99", icon: "🎨" },
  { id: 5, name: "Bridal Nail Package", description: "Complete bridal luxury: gel base, intricate art, embedded pearls/stones, and a touch-up kit.", price: "₹3,999", icon: "👰‍♀️" },
  { id: 6, name: "Nail Repair", description: "Expert fixing for broken, chipped, or lifted extensions. Save your set without starting over.", price: "₹199", icon: "🩹" },
  { id: 7, name: "Pedicure Deluxe", description: "A spa-grade foot treatment including exfoliation, massage, and gel polish for silky-soft feet.", price: "₹999", icon: "🦶" },
  { id: 8, name: "Chrome & Foil Finish", description: "Mirror-like metallic finishes and trendy foils for a futuristic, high-fashion statement look.", price: "₹1,199", icon: "🪩" },
];

export const faqs = [
  { q: "How long do gel extensions last?", a: "With proper care, our gel extensions last between 3 to 4 weeks. We use premium products to ensure maximum longevity and minimal lifting." },
  { q: "Is there a cancellation policy?", a: "Yes, we require at least 24 hours notice for cancellations. Late cancellations or no-shows may incur a 50% fee." },
  { q: "Can I bring my own nail art inspiration?", a: "Absolutely! We encourage you to bring Pinterest boards, reference photos, or color swatches. We love bringing your vision to life." },
  { q: "Are the products used safe for sensitive skin?", a: "We use only hypoallergenic, high-end brands like OPI and CND. If you have specific allergies, please inform us prior to your appointment." },
  { q: "Do you offer home visits for brides?", a: "Yes, we offer exclusive bridal pampering packages at your venue for the bride and her squad. Contact us for custom pricing." },
];

export const portfolioItems = [
  { id: 1, category: "Gel", image: images.portfolio1, alt: "Flawless glossy pink gel nail extensions" },
  { id: 2, category: "Nail Art", image: images.portfolio2, alt: "Intricate hand-painted cherry blossom nail art" },
  { id: 3, category: "Bridal", image: images.portfolio3, alt: "Elegant bridal nails with delicate pearls" },
  { id: 4, category: "Extensions", image: images.portfolio4, alt: "Long stiletto acrylic ombré pink extensions" },
  { id: 5, category: "Gel", image: images.portfolio5, alt: "Minimalist nude gel polish with subtle shine" },
  { id: 6, category: "Nail Art", image: images.portfolio6, alt: "Abstract geometric line nail art design" },
  { id: 7, category: "Bridal", image: images.portfolio7, alt: "Classic French tip with lace detailing for brides" },
  { id: 8, category: "Extensions", image: images.portfolio8, alt: "Coffin shaped clear acrylic with embedded florals" },
  { id: 9, category: "Gel", image: images.portfolio9, alt: "Deep red glossy gel polish manicure" },
  { id: 10, category: "Nail Art", image: images.portfolio10, alt: "3D metallic chrome nail art accents" },
  { id: 11, category: "Bridal", image: images.portfolio11, alt: "Soft blush pink bridal set with swarovski crystals" },
  { id: 12, category: "Extensions", image: images.portfolio12, alt: "Almond shaped nude extensions with ombré tips" },
];

export const artistStats = [
  { number: "500+", label: "Happy Clients" },
  { number: "8+", label: "Years Experience" },
  { number: "50+", label: "Nail Art Styles" }
];

export const certifications = [
  "Nail Technician Diploma (VLCC)",
  "Advanced Gel Art (OPI Certified)",
  "Bridal Specialist (2019)"
];

export const contactDetails = {
  address: "Shop 4, Beauty Lane, Adajan, Surat, Gujarat — 395009",
  phone: "+91 98765 43210",
  email: "hello@nailave.in",
  hours: "Mon–Sat: 10:00 AM – 8:00 PM | Sunday: By Appointment Only",
  instagram: "@nailave.priya",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.123456789!2d72.78!3d21.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjAiTiA3MsKwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
};

export const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
  "06:00 PM", "07:00 PM"
];