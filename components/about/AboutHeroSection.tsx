import { HeroParallax } from "../ui/hero-parallax";

export default function AboutHeroSection() {
  const staffImages = [
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770290076/C1963T01_m54vff.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770290074/C1929T01_atg4mp.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770290072/C1917T01_ydklsp.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289947/hero-5_ryqmkc.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289947/hero-9_uao4az.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289947/hero-4_ni7d9e.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289945/hero-2_u7pc3e.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289945/hero-1_xk6dpg.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289945/hero-3_c7trjr.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289945/hero-8_omwxqi.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289945/hero-6_nbhtdn.jpg",
  ];

  // Create products array for HeroParallax (needs 15 items)
  const products = [
    ...staffImages.map((img, i) => ({
      title: `Team Member ${i + 1}`,
      link: "#",
      thumbnail: img,
    })),
    // Duplicate first 4 images to make 15 total
    ...staffImages.slice(0, 4).map((img, i) => ({
      title: `Team Member ${i + 12}`,
      link: "#",
      thumbnail: img,
    })),
  ];

  return <HeroParallax products={products} />;
}
