export interface PackageFeature {
  name: string;
  category: string;
}

export interface StudioPackage {
  id: string;
  name: string;
  tagline: string;
  priceNPR: number;
  isPopular?: boolean;
  category: 'wedding' | 'maternity' | 'celebrations' | 'outdoor' | 'cinematography';
  summary: string;
  highlights: string[];
  features: {
    coverage: string;
    editedPhotos: string;
    rawPhotos: boolean | string;
    cinematography: string;
    droneFootage: boolean | string;
    reelsCount: string;
    outfitAssistance: boolean | string;
    makeupAssistance: boolean | string;
    luxuryAlbum: boolean | string;
    deliveryFormat: string;
    deliveryTime: string;
    crewSize: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'wedding' | 'maternity' | 'newborn' | 'celebrations' | 'outdoor' | 'cinematography';
  categoryLabel: string;
  imageUrl: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  caption: string;
  location?: string;
  cameraInfo?: string;
  isVideo?: boolean;
  videoDuration?: string;
}

export const STUDIO_CONFIG = {
  name: 'BABA PRODUCTION STUDIO',
  mapsListingName: 'BABA CANVAS & FRAMES',
  tagline: 'Turning Your Beautiful Moments Into Timeless Memories.',
  shortIntro:
    'Premier luxury photography and cinematic visual storytelling studio based in Sudurpashchim, Nepal. Specializing in royal weddings, intimate maternity portraits, vibrant celebrations, and breathtaking outdoor cinematography.',
  phone: '+977 9801721658',
  phoneDisplay: '+977 9801721658',
  phoneTel: 'tel:+9779801721658',
  whatsappUrl: 'https://wa.me/9779801721658',
  email: 'baba69.production@gmail.com',
  emailMailto: 'mailto:baba69.production@gmail.com',
  facebookUrl: 'https://www.facebook.com/babaproductionstudio',
  youtubeUrl: 'https://www.youtube.com/@babaproductionstudio4196',
  instagramUrl: '', // Marked to be provided later
  googleMapsUrl:
    'https://www.google.com/maps/place/BABA+CANVAS+%26+FRAMES/@28.7052695,80.5756393,16z/data=!4m6!3m5!1s0x39a1ed003b0f08b5:0x60f18e4f0d6a5ea7!8m2!3d28.7023219!4d80.5688681!16s%2Fg%2F11x6vmnxpl',
  googleDriveFolder:
    'https://drive.google.com/drive/folders/19QGtjFztLOFlPTjsCjFOT7hy9XPOwG6M?usp=sharing',
  locationDisplay: 'BABA CANVAS & FRAMES, Kanchanpur / Mahendranagar, Nepal',
  bookingDisclaimer:
    'Please Note: Submitting an enquiry does not automatically confirm a booking. Dates are subject to calendar availability and final confirmation by BABA PRODUCTION STUDIO.',
  pricingDisclaimer:
    'All package prices and inclusions displayed are provisional demonstration quotes. Exact customized proposals will be provided during your private consultation with the studio.',
  primaryImages: {
    heroWedding: '/images/hero_cinematic_wedding_1794312752689.jpg',
    weddingReception: '/images/wedding_reception_editorial_1794312752245.jpg',
    maternityIvory: '/images/maternity_warm_ivory_1794312752963.jpg',
    outdoorSunset: '/images/outdoor_sunset_portrait_1794312752857.jpg',
    celebrationBabyShower: '/images/celebration_baby_shower_1794312753932.jpg',
  },
};

export const STUDIO_PACKAGES: StudioPackage[] = [
  // WEDDINGS
  {
    id: 'pkg-wedding-essential',
    name: 'Essential Wedding',
    tagline: 'Timeless traditional & ceremony coverage',
    priceNPR: 25000,
    category: 'wedding',
    summary:
      'Ideal for intimate weddings and sacred traditional ceremonies requiring professional high-definition documentation.',
    highlights: [
      'Full ceremony photography coverage',
      'Over 150+ color-corrected edited portraits',
      'Digital delivery via private cloud gallery',
      'Family & couple traditional portraits',
    ],
    features: {
      coverage: 'Up to 6 Hours (Single Day)',
      editedPhotos: '150+ Signature High-Res Photos',
      rawPhotos: 'Available on request',
      cinematography: 'Traditional Ceremony Video',
      droneFootage: 'Optional Add-on',
      reelsCount: '1 Instagram Story Highlight',
      outfitAssistance: false,
      makeupAssistance: false,
      luxuryAlbum: 'Optional Premium Frame/Album',
      deliveryFormat: 'Secure Online Cloud Gallery & USB Drive',
      deliveryTime: '2 to 3 Weeks',
      crewSize: '1 Lead Photographer + 1 Assistant',
    },
  },
  {
    id: 'pkg-wedding-premium',
    name: 'Premium Wedding',
    tagline: 'The complete cinematic experience & aerial coverage',
    priceNPR: 40000,
    isPopular: true,
    category: 'wedding',
    summary:
      'Our most beloved package. Comprehensive dual-crew photography, cinematic highlight film, and sweeping drone perspectives.',
    highlights: [
      'Full-day celebration coverage (Baraat, Ceremony & Reception)',
      '300+ Artistically edited heirloom photos',
      '4K Cinematic Wedding Highlight Film (3-5 mins)',
      'Aerial drone cinematography (weather permitting)',
      'Teaser reels crafted for social media',
    ],
    features: {
      coverage: 'Full Day (Up to 12 Hours)',
      editedPhotos: '300+ Master Edited High-Res Photos',
      rawPhotos: 'All Full-Resolution RAW files included',
      cinematography: '4K Cinematic Highlight Film (3-5 min)',
      droneFootage: 'Included (licensed pilot, weather permitting)',
      reelsCount: '2 Cinematic Vertical Reels',
      outfitAssistance: 'Wardrobe & Posing Guidance',
      makeupAssistance: 'Touch-up Coordination',
      luxuryAlbum: '10x15 Velvet Flush-Mount Coffee Table Album',
      deliveryFormat: 'Custom Wooden USB Keepsake + Cloud Gallery',
      deliveryTime: '3 Weeks',
      crewSize: '2 Senior Photographers + 1 Cinematographer + Drone Pilot',
    },
  },
  {
    id: 'pkg-wedding-signature',
    name: 'Signature Royal Wedding',
    tagline: 'The ultimate luxury multi-day heirloom production',
    priceNPR: 60000,
    category: 'wedding',
    summary:
      'Grand multi-day wedding extravaganza with master photographers, dedicated film director, luxury framing from BABA CANVAS & FRAMES, and full documentary films.',
    highlights: [
      'Multi-day coverage (Mehendi, Sangeet, Wedding & Grand Reception)',
      '500+ Master graded editorial images',
      'Full-length cinematic documentary film (15-20 mins) + Highlight film',
      '4K Drone aerial cinematography for grand entries & venues',
      'Exclusive handcrafted canvas & framed wall portrait',
    ],
    features: {
      coverage: 'Multi-Day (Up to 2 Full Days)',
      editedPhotos: '500+ Editorial Master Retouched Photos',
      rawPhotos: 'Full uncompressed RAW archive on SSD',
      cinematography: 'Cinematic Teaser + 20-min Feature Documentary',
      droneFootage: 'Full Aerial Coverage for all rituals & entries',
      reelsCount: '4 Cinematic 4K Viral Reels',
      outfitAssistance: 'Dedicated Bridal Styling & Silhouette Director',
      makeupAssistance: 'Lighting & Studio Makeup Optimization',
      luxuryAlbum: 'Luxury Heirloom Velvet Album + 24x36 Canvas Wall Art',
      deliveryFormat: 'Handcrafted Wooden Keepsake Box + Master SSD + Cloud Hub',
      deliveryTime: '4 Weeks',
      crewSize: 'Full Studio Crew (4 Professionals + Drone Director)',
    },
  },

  // MATERNITY
  {
    id: 'pkg-maternity-classic',
    name: 'Classic Maternity',
    tagline: 'Pure, serene studio pregnancy portraits',
    priceNPR: 5000,
    category: 'maternity',
    summary:
      'Warm, gentle studio portraiture capturing the natural grace and quiet wonder of motherhood in soft neutral tones.',
    highlights: [
      '60-Minute peaceful studio session',
      '20 High-resolution signature retouched photos',
      'Use of studio backdrops and soft natural lighting',
      'Partner & sibling inclusion welcome',
    ],
    features: {
      coverage: '1 Hour Studio Session',
      editedPhotos: '20 Signature Retouched Photos',
      rawPhotos: 'Available as add-on',
      cinematography: 'Short Motion Portrait Clip',
      droneFootage: false,
      reelsCount: '1 Story Video Reel',
      outfitAssistance: 'Access to 1 Studio Silk Gown',
      makeupAssistance: false,
      luxuryAlbum: 'Optional Desktop Frame',
      deliveryFormat: 'Private High-Res Cloud Gallery',
      deliveryTime: '7 Days',
      crewSize: '1 Specialist Maternity Photographer',
    },
  },
  {
    id: 'pkg-maternity-premium',
    name: 'Premium Maternity & Reels',
    tagline: 'Editorial gowns, video reel & fine art retouches',
    priceNPR: 10000,
    isPopular: true,
    category: 'maternity',
    summary:
      'Our most sought-after maternity experience. Multiple curated gowns, bespoke styling guidance, professional makeup collaboration, and emotional 4K video reel.',
    highlights: [
      'Up to 2.5 hours of studio or sunset outdoor location shoot',
      'Access to luxury flowing maternity gowns & drapes',
      '40 Artistically retouched fine-art portraits',
      'Cinematic vertical 4K Instagram video reel with licensed music',
      'Couple & family portraits included',
    ],
    features: {
      coverage: '2 to 2.5 Hours (Studio + Golden Hour Outdoor)',
      editedPhotos: '40 Fine-Art Retouched Images',
      rawPhotos: 'All high-resolution files included',
      cinematography: '1-Minute Cinematic Motherhood Film (4K)',
      droneFootage: 'Optional for outdoor landscape shoots',
      reelsCount: '2 Emotion-Driven Cinematic Reels',
      outfitAssistance: 'Full access to 3 Luxury Designer Gowns',
      makeupAssistance: 'Professional Makeup & Hair Coordination',
      luxuryAlbum: 'Fine-Art Framed 12x18 Portrait Print',
      deliveryFormat: 'Private Cloud Gallery & Gift Keepsake Box',
      deliveryTime: '10 Days',
      crewSize: 'Lead Photographer + Female Posing Assistant',
    },
  },
  {
    id: 'pkg-maternity-heirloom',
    name: 'Luxury Heirloom Maternity & Newborn',
    tagline: 'A seamless journey from bump to baby',
    priceNPR: 18000,
    category: 'maternity',
    summary:
      'Two complete sessions: a regal maternity session followed by a peaceful newborn session within the baby’s first weeks.',
    highlights: [
      'Two separate photo sessions (Maternity + Newborn)',
      '60+ Master retouched heirloom images',
      'Newborn swaddles, organic blankets & sanitized props',
      'Motherhood storybook video film',
      'Custom keepsake canvas frame from BABA CANVAS',
    ],
    features: {
      coverage: '2 Separate Sessions (2h Maternity + 3h Newborn)',
      editedPhotos: '60+ Master Retouched Images',
      rawPhotos: 'Complete archive included',
      cinematography: 'Full Bump-to-Baby Emotional Short Film',
      droneFootage: false,
      reelsCount: '3 Trending & Emotional Reels',
      outfitAssistance: 'Multiple Maternity Gowns + Newborn Prop Suite',
      makeupAssistance: 'Maternity Session Makeup Service Included',
      luxuryAlbum: 'Custom 10x10 Fine Art Linen Baby Book + 16x24 Canvas',
      deliveryFormat: 'Custom Engraved Wooden Box + High-Speed Drive',
      deliveryTime: '14 Days after Newborn shoot',
      crewSize: 'Senior Photographer + Certified Newborn Handling Assistant',
    },
  },

  // BABY SHOWER & CELEBRATIONS
  {
    id: 'pkg-celebrations-intimate',
    name: 'Intimate Celebration',
    tagline: 'Baby showers, gender reveals & milestone birthdays',
    priceNPR: 8000,
    category: 'celebrations',
    summary:
      'Candid, joyful coverage for baby showers, first birthdays, annaprashan (rice feeding ceremony), and private family gatherings.',
    highlights: [
      'Up to 3 hours of event coverage',
      '80+ Bright, color-graded candid images',
      'Detail shots of cake, decor, and blessings',
      'Fast 5-day digital turnaround for social sharing',
    ],
    features: {
      coverage: 'Up to 3 Hours',
      editedPhotos: '80+ High-Resolution Graded Photos',
      rawPhotos: false,
      cinematography: 'Highlight Video Teaser (60s)',
      droneFootage: false,
      reelsCount: '1 Celebration Reel',
      outfitAssistance: false,
      makeupAssistance: false,
      luxuryAlbum: 'Optional',
      deliveryFormat: 'Private Online Gallery',
      deliveryTime: '5 Days',
      crewSize: '1 Event Photographer',
    },
  },
  {
    id: 'pkg-celebrations-grand',
    name: 'Grand Celebration & Video',
    tagline: 'Full event documentation with cinematic film',
    priceNPR: 15000,
    isPopular: true,
    category: 'celebrations',
    summary:
      'Complete festival-style event coverage with photo & cinema crew, guest interviews, cake cutting highlights, and fast reels.',
    highlights: [
      'Up to 5 hours of multi-angle coverage',
      '180+ Master edited photos with guest portraits',
      '3-Minute 4K Celebration Highlights Film',
      'Candid moments of laughter, blessings & dancing',
      'Framed family memory print included',
    ],
    features: {
      coverage: 'Up to 5 Hours',
      editedPhotos: '180+ High-Resolution Graded Photos',
      rawPhotos: 'All digital files provided',
      cinematography: '3-Minute 4K Cinematic Event Film',
      droneFootage: 'Optional for outdoor venues',
      reelsCount: '2 High-Energy Social Reels',
      outfitAssistance: 'Posing & Group Coordination',
      makeupAssistance: false,
      luxuryAlbum: '12x18 Framed Tabletop Print',
      deliveryFormat: 'USB Flash Drive & Cloud Gallery',
      deliveryTime: '7 Days',
      crewSize: '1 Senior Photographer + 1 Cinematographer',
    },
  },

  // OUTDOOR PHOTOGRAPHY
  {
    id: 'pkg-outdoor-golden',
    name: 'Golden Hour Session',
    tagline: 'Natural light magic in scenic outdoor landscapes',
    priceNPR: 7000,
    category: 'outdoor',
    summary:
      'Bespoke pre-wedding or couple portraiture in stunning natural settings like riversides, scenic hills, and golden grassy plains.',
    highlights: [
      '90-Minute sunset golden-hour photoshoot',
      '30 Curated magazine-grade retouched photos',
      'Assistance with location scouting & lighting times',
      'Natural, candid, romantic posing direction',
    ],
    features: {
      coverage: '90 Minutes (Late Afternoon to Sunset)',
      editedPhotos: '30 Magazine-Grade Retouched Photos',
      rawPhotos: 'Included',
      cinematography: '30-Second Aesthetic Teaser',
      droneFootage: false,
      reelsCount: '1 Romantic Sunset Reel',
      outfitAssistance: 'Color & Wardrobe Consultation',
      makeupAssistance: false,
      luxuryAlbum: 'Optional Canvas Print',
      deliveryFormat: 'High-Res Digital Download Hub',
      deliveryTime: '7 Days',
      crewSize: '1 Lead Outdoor Photographer',
    },
  },
  {
    id: 'pkg-outdoor-adventure',
    name: 'Cinematic Outdoor Adventure',
    tagline: 'Epic landscape storytelling with drone perspectives',
    priceNPR: 16000,
    isPopular: true,
    category: 'outdoor',
    summary:
      'For couples who want dramatic, cinematic artwork set against epic mountains, national park borders, rivers, and sunsets.',
    highlights: [
      'Half-day destination expedition with multiple looks',
      '75+ Editorial graded master portraits',
      'Sweeping 4K drone cinematography',
      'Cinematic 4K outdoor love-story short film',
      'Premium framed canvas from BABA CANVAS',
    ],
    features: {
      coverage: 'Half-Day (Up to 5 Hours on location)',
      editedPhotos: '75+ High-Fashion Editorial Graded Photos',
      rawPhotos: 'All RAW files included',
      cinematography: '2-3 Minute 4K Cinematic Story Film',
      droneFootage: 'Included (licensed pilot, weather permitting)',
      reelsCount: '2 Epic Cinematic Reels',
      outfitAssistance: 'Up to 3 Outfit Changes & Styling Guide',
      makeupAssistance: 'Outdoor Touch-up Lighting Kit',
      luxuryAlbum: 'Handcrafted 18x24 Canvas Frame by BABA CANVAS',
      deliveryFormat: 'Engraved Wooden USB & Private Cloud Gallery',
      deliveryTime: '10 Days',
      crewSize: 'Lead Photographer + Cinematographer / Drone Pilot',
    },
  },

  // CINEMATOGRAPHY
  {
    id: 'pkg-cinema-highlight',
    name: 'Cinematic Highlight Film',
    tagline: 'Emotional storytelling with color grading & sound design',
    priceNPR: 20000,
    category: 'cinematography',
    summary:
      'High-production value highlight film for weddings or milestones, recorded with cinema cameras and professional audio.',
    highlights: [
      'Full event cinematic filming with gimbal stabilization',
      '4-5 Minute 4K Master Highlight Film',
      'Licensed cinematic music & speech/vow audio capture',
      'Color graded in DaVinci Resolve for film look',
    ],
    features: {
      coverage: 'Up to 8 Hours',
      editedPhotos: 'N/A (Focus on Motion)',
      rawPhotos: 'Raw footage provided on customer hard drive',
      cinematography: '4-5 Minute 4K Cinematic Highlight Film',
      droneFootage: 'Add-on available',
      reelsCount: '2 Teaser Reels for Instagram & TikTok',
      outfitAssistance: false,
      makeupAssistance: false,
      luxuryAlbum: false,
      deliveryFormat: '4K Ultra-HD Master Download + USB',
      deliveryTime: '3 Weeks',
      crewSize: '2 Cinema Camera Operators',
    },
  },
  {
    id: 'pkg-cinema-master',
    name: 'Master Production & Drone Reel',
    tagline: 'Complete cinematic film + aerial coverage + viral reels',
    priceNPR: 35000,
    isPopular: true,
    category: 'cinematography',
    summary:
      'The definitive filmmaking package. Dedicated creative director, multi-camera 4K cinematography, licensed drone sweeps, crystal sound design, and full feature film.',
    highlights: [
      'Full-day cinema crew with cinema prime lenses',
      'Feature-length 12-15 min documentary film',
      '3-4 min high-impact trailer + 3 social media reels',
      '4K Drone aerial cinematic captures',
      'Professional audio recording of speeches & vows',
    ],
    features: {
      coverage: 'Full Day (Up to 12 Hours)',
      editedPhotos: 'Key video frame stills in high resolution',
      rawPhotos: 'Full 4K RAW/ProRes archive provided on SSD',
      cinematography: '15-min Feature Documentary + 4-min Trailer',
      droneFootage: 'Full 4K Aerial Coverage Included',
      reelsCount: '3 Graded 4K Reels',
      outfitAssistance: 'Lighting & Cinema Silhouette Direction',
      makeupAssistance: false,
      luxuryAlbum: false,
      deliveryFormat: 'High-End Leather USB Drive + 4K Cloud Streaming',
      deliveryTime: '4 Weeks',
      crewSize: 'Lead Cinema Director + 2 Cinematographers + Aerial Pilot',
    },
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-wed-1',
    title: 'The Golden Vows — Sunset Palace Wedding',
    category: 'wedding',
    categoryLabel: 'Wedding Ceremony',
    imageUrl: STUDIO_CONFIG.primaryImages.heroWedding,
    aspectRatio: 'landscape',
    caption:
      'A breathtaking golden hour ceremony overlooking the water. Traditional handcrafted crimson attire bathed in gentle evening sun.',
    location: 'Palace Grounds, Far-Western Nepal',
    cameraInfo: 'Sony FX3 · 35mm f/1.4 GM · ISO 100 · 1/800s',
  },
  {
    id: 'gal-wed-2',
    title: 'Candlelight & Floral Arch Sanctuary',
    category: 'wedding',
    categoryLabel: 'Wedding Reception',
    imageUrl: STUDIO_CONFIG.primaryImages.weddingReception,
    aspectRatio: 'portrait',
    caption:
      'Intimate whispered laughter beneath a canopy of suspended candles and fresh white florals during the first dance celebration.',
    location: 'Royal Banquet Hall',
    cameraInfo: 'Sony A7 IV · 50mm f/1.2 GM · ISO 800 · 1/160s',
  },
  {
    id: 'gal-mat-1',
    title: 'Serenade in Ivory — Fine Art Maternity',
    category: 'maternity',
    categoryLabel: 'Maternity',
    imageUrl: STUDIO_CONFIG.primaryImages.maternityIvory,
    aspectRatio: 'portrait',
    caption:
      'Soft morning window light gently falling over flowing ivory silk, embracing the quiet anticipation of new life.',
    location: 'BABA Studio, Kanchanpur',
    cameraInfo: 'Canon R5 · 85mm f/1.4 · ISO 100 · 1/250s',
  },
  {
    id: 'gal-out-1',
    title: 'Golden Valley Sunset Expedition',
    category: 'outdoor',
    categoryLabel: 'Outdoor Couple',
    imageUrl: STUDIO_CONFIG.primaryImages.outdoorSunset,
    aspectRatio: 'landscape',
    caption:
      'Hand in hand through whispering golden grass with majestic mountain ridges reflecting the last light of dusk.',
    location: 'Valley Meadows, Far-Western Region',
    cameraInfo: 'Sony A1 · 24-70mm f/2.8 GM II · ISO 200 · 1/1000s',
  },
  {
    id: 'gal-cel-1',
    title: 'Baby Bloom — Floral Shower Celebration',
    category: 'celebrations',
    categoryLabel: 'Baby Shower',
    imageUrl: STUDIO_CONFIG.primaryImages.celebrationBabyShower,
    aspectRatio: 'portrait',
    caption:
      'Genuine joy, heartfelt laughter, and family blessings under a pastel floral arch surrounded by loving friends.',
    location: 'Grand Ballroom & Gardens',
    cameraInfo: 'Sony A7S III · 35mm f/1.4 · ISO 400 · 1/200s',
  },
  {
    id: 'gal-new-1',
    title: 'Pure Slumber — Newborn Heirloom',
    category: 'newborn',
    categoryLabel: 'Newborn',
    imageUrl: STUDIO_CONFIG.primaryImages.maternityIvory, // Clean fallback with ivory framing
    aspectRatio: 'square',
    caption:
      'Tucked gently in organic woven merino wool, capturing the tiny fingers and tranquil innocence of the first ten days.',
    location: 'Studio Nursery Setup',
    cameraInfo: 'Macro 90mm f/2.8 · Softbox Diffused · ISO 100',
  },
  {
    id: 'gal-cin-1',
    title: 'The Eternal Vow — 4K Wedding Cinema Reel',
    category: 'cinematography',
    categoryLabel: 'Cinematography',
    imageUrl: STUDIO_CONFIG.primaryImages.heroWedding,
    aspectRatio: 'landscape',
    caption:
      'Cinematic wedding film featuring drone sweeps over the palace, crystal-clear audio vows, and slow-motion floral showers.',
    location: 'BABA Cinema Production',
    cameraInfo: 'Cinema 4K 10-Bit 4:2:2 · 24fps · Master Graded',
    isVideo: true,
    videoDuration: '4:18',
  },
  {
    id: 'gal-cin-2',
    title: 'Sunlit Romance — Outdoor Highlight Reel',
    category: 'cinematography',
    categoryLabel: 'Cinematography',
    imageUrl: STUDIO_CONFIG.primaryImages.outdoorSunset,
    aspectRatio: 'landscape',
    caption:
      'Aerial 4K drone cinematography capturing couple silhouettes running along the golden valley trails.',
    location: 'Scenic River Valley',
    cameraInfo: 'DJI Mavic 3 Cine · Apple ProRes 422 HQ · 60fps',
    isVideo: true,
    videoDuration: '2:45',
  },
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    client: 'Pooja & Rohan Shrestha',
    event: 'Wedding at Kanchanpur',
    quote:
      'BABA PRODUCTION STUDIO captured the soul of our wedding day. When we received our photos and highlight film, both our families were in tears of happiness. The frames from BABA CANVAS & FRAMES now proudly hang in our living room. Truly the most talented team in the region!',
    rating: 5,
  },
  {
    id: 'test-2',
    client: 'Sunita & Deepak Thapa',
    event: 'Maternity & Baby Shower Shoot',
    quote:
      'As an expectant mother, I was nervous about feeling comfortable in front of the camera. The team was so gentle, patient, and respectful. The ivory studio lighting was magical, and the photos look like an international fashion editorial. Highly recommended for every new mom!',
    rating: 5,
  },
  {
    id: 'test-3',
    client: 'Anil & Priya Joshi',
    event: 'Pre-Wedding Outdoor Photoshoot',
    quote:
      'From location scouting at sunset to directing our candid laughter, everything was effortless and professional. The drone shots of the valley are out of this world. We booked our wedding package immediately after seeing the pre-wedding results!',
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How far in advance should we book our wedding or photoshoot?',
    answer:
      'Because peak wedding and auspicious dates fill up quickly, we recommend reaching out 2 to 6 months in advance. For maternity sessions, booking around your 28th to 34th week gives the most comfortable and radiant results.',
  },
  {
    question: 'How do we replace or provide our own photography files from Google Drive?',
    answer:
      'The studio provides an online client portal where you can share your Google Drive link or download direct high-resolution files. Studio owners can also update photo files easily through the built-in Media Manager.',
  },
  {
    question: 'What is the relationship between BABA PRODUCTION STUDIO and BABA CANVAS & FRAMES?',
    answer:
      'BABA CANVAS & FRAMES is our physical studio location, framing workshop, and official Google Maps business listing in Kanchanpur. BABA PRODUCTION STUDIO is our professional photography and cinematography creative brand. When you visit us in person, look for BABA CANVAS & FRAMES!',
  },
  {
    question: 'Can package prices and services be customized?',
    answer:
      'Yes, absolutely. The packages listed on our website provide transparent benchmark pricing for common celebrations. Every wedding or family event is unique, and we gladly tailor coverage hours, crew size, and deliverables to your specific vision.',
  },
  {
    question: 'How long does photo and video post-production take?',
    answer:
      'Sneak-peek previews and social media reels are typically delivered within 48 to 72 hours. Complete fully retouched photo galleries and master 4K films are delivered within 2 to 4 weeks depending on the package scope.',
  },
];
