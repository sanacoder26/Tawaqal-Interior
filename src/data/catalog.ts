import { Collection, Product, Testimonial } from '../types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'false-ceiling',
    number: '01',
    name: 'False Ceiling',
    subtitle: 'Modern Gypsum, POP & Ambient LED Cove Ceilings.',
    description: 'Bespoke ceiling architecture with integrated warm cove lighting, linear profiles, and geometric layered designs for homes in Karachi.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    altText: 'Modern false ceiling design with ambient warm strip lighting.'
  },
  {
    id: 'wall-moulding',
    number: '02',
    name: 'Wall Moulding',
    subtitle: 'Classic French Wainscoting & Modern Profile Panels.',
    description: 'Precision wall moulding, PVC and wooden wainscoting panels, accent feature walls, and decorative borders that elevate living areas.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    altText: 'Elegant wall moulding and paneling in neutral tones.'
  },
  {
    id: 'wood-work',
    number: '03',
    name: 'Wood Work',
    subtitle: 'Custom Kitchen Cabinets, Wardrobes & Media Walls.',
    description: 'Custom woodworking including high-gloss acrylic kitchens, tactile UV sheet wardrobes, fluted wood paneling, and TV media walls.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnnOVAs2dJKEk-ClUgX0Q2DO0Q2i0Ab3mvsJ--O2RGJqdQ8sWMiKNF-qO49THjvg04rCBINYSNTv_AENZo_3U8knQPRuQovM3mB4hLzL5RW7OfbEWrCG5bLbL6pC1Dzmv3zdjKkvLkCKu1oancIDF3iVSwZYQMxC6uFkJARSSC7TPnamgfMBBzlg38gwR9jm91jQlbcMG3hu2d5UJRhshrRXATH1V2mvG8ldWXd6rRr0o6ny2Lv-yLVg',
    altText: 'Bespoke wooden kitchen cabinets and wood accents.'
  },
  {
    id: 'complete-renovation',
    number: '04',
    name: 'Complete Renovation',
    subtitle: 'Full House Transformation Services across Karachi.',
    description: 'Turnkey renovation covering false ceiling, electrical, tile fixing, paint finishing, and custom woodwork managed end-to-end.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqmUZ_dvxtIaCXr1XkO6FoBH3O8ZM9RVfppbxbBK6l8AyzMryVxliHI7VIlIA9EOOm9r3Tbdb2SeDVv6CmsNuTttppOFU_rLlgxX5I4ob9onRoNSHnco-pjaCc2Agh_yrnaZPjZ9QhKUiEBLU6R95K63Vh8V5yPjHFYc7_d-pgSTvIXTr9MC72yDqzB_0gIrdqCcHNcFhEEKf3bO4aiqTAAwkXH68HfuY-QQnMKx5AKmep1OfsB87kAQ',
    altText: 'Fully renovated modern living sanctuary in Karachi.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'false-ceiling-gypsum',
    name: 'Gypsum False Ceiling & Cove',
    subtitle: 'Seamless ambient ceiling design with hidden LED profile',
    description: 'Premium quality Gypsum false ceiling crafted with high-grade channels, moisture-resistant sheets, and concealed cove lighting channels for living rooms, drawing rooms, and master bedrooms.',
    price: 180,
    room: 'Living',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    materials: ['Gypsum Sheets', 'Galvanized Framing', 'LED Cove Channel'],
    dimensions: 'Custom Square Feet (SFT)',
    inStock: true,
    altText: 'Gypsum false ceiling with warm LED lighting',
    featured: true
  },
  {
    id: 'wall-moulding-classic',
    name: 'French Style Wall Moulding',
    subtitle: 'Elegant wainscoting & accent wall frame paneling',
    description: 'Precision-measured wall moulding with durable PVC/Wood borders and flawless paint coat finish. Ideal for dining walls, staircases, and living room backdrops.',
    price: 250,
    room: 'Living',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    materials: ['High-Density PVC/Wood', 'Matte Emulsion Paint'],
    dimensions: 'Custom Wall Dimensions',
    inStock: true,
    altText: 'Wainscoting wall moulding panels in warm grey',
    featured: true
  },
  {
    id: 'custom-media-wall',
    name: 'Fluted Wood & Marble Media Wall',
    subtitle: 'Custom TV unit with charcoal or oak fluted panels',
    description: 'Modern entertainment unit incorporating fluted charcoal/oak wood slats, UV marble sheet backdrop, and concealed cabling setup.',
    price: 125000,
    room: 'Living',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnnOVAs2dJKEk-ClUgX0Q2DO0Q2i0Ab3mvsJ--O2RGJqdQ8sWMiKNF-qO49THjvg04rCBINYSNTv_AENZo_3U8knQPRuQovM3mB4hLzL5RW7OfbEWrCG5bLbL6pC1Dzmv3zdjKkvLkCKu1oancIDF3iVSwZYQMxC6uFkJARSSC7TPnamgfMBBzlg38gwR9jm91jQlbcMG3hu2d5UJRhshrRXATH1V2mvG8ldWXd6rRr0o6ny2Lv-yLVg',
    materials: ['Tactile Fluted Wood', 'UV Sheet Marble Finish', 'Soft-close Drawers'],
    dimensions: 'Customized as per TV Wall',
    inStock: true,
    altText: 'Custom wooden media wall with fluted panels',
    featured: true
  },
  {
    id: 'paint-finishing-matte',
    name: 'Luxury Paint & Velvet Finish',
    subtitle: 'Smooth matte, Royale, & texture paint finishes',
    description: 'Professional surface preparation, wall putty smoothing, sanding, and premium multi-coat paint finishing (Dulux / Berger / Master) for long-lasting vibrant walls.',
    price: 45,
    room: 'Bedroom',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2-jquk77gRfU6lrigndgwwzem0ZqEbogfZGuTVa4lbxBYU_cVcIAsPHKa-hCEpV2ZA0WkN69_Vnp6adXt_jULvwWB9Nbu4gUvcJ0UJutyPw6pN7VqDiJ9-WlKASQjqDvymIg3IA21eIEpCNzY3QyMZqgvR22XFN5e41qf2OxmRoHtILPH_9BhpPREb8kTe6_TE_8onRla1AXqHFg3wMfggu33P48YMADpT6E_aGpI7hjOsDioDPhCoA',
    materials: ['Wall Putty', 'Premium Emulsion', 'Anti-Dampness Primer'],
    dimensions: 'Per SFT Rate',
    inStock: true,
    altText: 'Smooth sage matte paint finish on bedroom wall',
    featured: true
  },
  {
    id: 'porcelain-tile-fixing',
    name: 'Porcelain & Granite Tile Fixing',
    subtitle: 'Precision floor & bath tile fitting with laser alignment',
    description: 'Expert tile laying using high-bond tile adhesives, zero-gap laser alignment, and waterproof epoxy grouting for kitchens, bathrooms, and main flooring.',
    price: 85,
    room: 'Dining',
    imageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1200',
    materials: ['Porcelain Tiles', 'Bonding Adhesive', 'Waterproof Grout'],
    dimensions: 'Floor & Wall SFT',
    inStock: true,
    altText: 'Seamless stone tile floor fixing'
  },
  {
    id: 'electrical-smart-work',
    name: 'Electrical Wiring & Spotlights',
    subtitle: 'Concealed copper wiring, magnetic tracks & spotlights',
    description: 'Complete home re-wiring, breaker panel installation, magnetic track lighting, COB spotlights, and smart switch installation carried out by certified electricians.',
    price: 35000,
    room: 'Lighting',
    imageUrl: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=1200',
    materials: ['Pakistan Cables Copper', 'COB Spotlights', 'Schneider Switches'],
    dimensions: 'Full Room or House Package',
    inStock: true,
    altText: 'Architectural spot lighting and concealed wiring'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: '"Tawaqal Interior completely transformed our 2000 sq ft house in DHA Karachi. The false ceiling and wall moulding work is so clean and perfectly aligned!"',
    author: 'FARHAN AHMED',
    role: 'Homeowner',
    company: 'DHA Phase 6, Karachi',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkuFZ-Tfj_P5twjpSAa7hbi5fJOfvAnV7qps8CIrNhi7ZZsDoLHr18zE_B9P7sygxrLGwgGVoJVN0xSeE64T6NRMwzEEVOBZcem6qlms73TqlPZJpeWPzhLl_yJ0KKIXXfSz_X1H69XeW7L711ulmxACJLLCfzD0kWe1nNBC-hHiaGltC8PwhRSefs4fzHKRN9bZBNsY4cdloEeqVhsNnroPzK5UjtJ_FUgd67t68m-Gt8w4YFV7LplA'
  },
  {
    id: '2',
    quote: '"Their team handled everything from electrical work and tile fixing to final paint finishing. Very punctual and honest team in Karachi. Highly recommended!"',
    author: 'SADIA SIDDIQUI',
    role: 'Apartment Owner',
    company: 'Gulshan-e-Iqbal, Karachi',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvGfwXEXe-W1C-hP7w-zToz8SWKgS3iiJ4toYQuC7k7WtfeHlhqkT6bkPuFHIDD9WjDXDVj6PpAB0MiFW-cobSKhujdwv_aWBFqmdsutgAbgqSkEm-TG65kevW3cdJD9Aprd4tDdqn4-auT4gI5TuCDiHc6dh82LGpOlOsGCp-zof_BebasUrEVpdVSFWR64Rc_13vpLbXZSCesiqvW-2Z1LYd7bx9-lkGM6C41VC7bbH5ZAIFnliGqg'
  },
  {
    id: '3',
    quote: '"The wood work and kitchen wardrobe designs were top notch. Call them directly on 03052395052 on WhatsApp for instant estimate!"',
    author: 'KASHIF KHAN',
    role: 'Villa Resident',
    company: 'Bahria Town, Karachi',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
  }
];
