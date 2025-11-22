interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: number;
  author: string;
  authorBio: string;
  authorImage: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'design-trends-2025',
    title: 'Top Interior Design Trends for 2025',
    excerpt: 'Discover the latest interior design trends that will dominate homes in 2025.',
    content: `
      <p>As we move into 2025, interior design continues to evolve with fresh ideas and innovative concepts. Here are the top trends that will shape our living spaces this year:</p>
      
      <h3>1. Biophilic Design</h3>
      <p>The connection between nature and indoor spaces grows stronger with biophilic design. Expect to see more indoor plants, natural materials, and organic shapes that bring the outdoors in.</p>
      
      <h3>2. Sustainable Materials</h3>
      <p>Eco-conscious design takes center stage with sustainable and recycled materials. From reclaimed wood to recycled glass, sustainability is no longer optional but essential.</p>
      
      <h3>3. Bold Colors</h3>
      <p>Neutrals are making way for bold, expressive colors. Deep blues, rich greens, and warm terracottas are becoming increasingly popular for creating statement spaces.</p>
    `,
    image: '/images/blog/design-trends-2025.jpg',
    date: '2025-01-15',
    readTime: 5,
    author: 'Sarah Johnson',
    authorBio: 'Lead Interior Designer with 10+ years of experience in residential and commercial spaces.',
    authorImage: '/images/team/sarah-johnson.jpg',
    tags: ['Design Trends', '2025', 'Interior Design']
  },
  {
    id: 'small-space-solutions',
    title: 'Maximizing Small Spaces: Clever Design Solutions',
    excerpt: 'Transform your compact living areas into functional and stylish spaces with these smart design tips.',
    content: `
      <p>Living in a small space doesn't mean sacrificing style or functionality. Here are some innovative solutions to make the most of your compact areas:</p>
      
      <h3>1. Multi-functional Furniture</h3>
      <p>Invest in pieces that serve multiple purposes, like sofa beds, storage ottomans, and extendable dining tables.</p>
      
      <h3>2. Vertical Storage</h3>
      <p>Utilize wall space with floating shelves, tall bookcases, and wall-mounted storage solutions to keep your floor space open.</p>
      
      <h3>3. Smart Lighting</h3>
      <p>Layer different light sources to create depth and make small spaces feel larger. Consider wall sconces, floor lamps, and under-cabinet lighting.</p>
    `,
    image: '/images/blog/small-space-solutions.jpg',
    date: '2025-01-10',
    readTime: 4,
    author: 'Michael Chen',
    authorBio: 'Space Planning Specialist with a focus on urban living solutions.',
    authorImage: '/images/team/michael-chen.jpg',
    tags: ['Small Spaces', 'Organization', 'Furniture']
  },
  {
    id: 'sustainable-homes',
    title: 'Creating Sustainable and Eco-Friendly Homes',
    excerpt: 'Learn how to design a home that\'s beautiful, functional, and kind to the environment.',
    content: `
      <p>Sustainable design is no longer a trend but a necessity. Here\'s how to create an eco-friendly home without compromising on style:</p>
      
      <h3>1. Energy Efficiency</h3>
      <p>Incorporate energy-efficient appliances, LED lighting, and proper insulation to reduce your carbon footprint.</p>
      
      <h3>2. Sustainable Materials</h3>
      <p>Choose materials like bamboo, cork, and reclaimed wood that are both beautiful and environmentally responsible.</p>
      
      <h3>3. Water Conservation</h3>
      <p>Install low-flow fixtures and consider water-recycling systems to minimize water usage in your home.</p>
    `,
    image: '/images/blog/sustainable-homes.jpg',
    date: '2024-12-20',
    readTime: 6,
    author: 'Emily Rodriguez',
    authorBio: 'Sustainability Consultant with expertise in green building practices.',
    authorImage: '/images/team/emily-rodriguez.jpg',
    tags: ['Sustainability', 'Eco-Friendly', 'Green Living']
  }
];

export const getRecentPosts = (count: number = 3) => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};
