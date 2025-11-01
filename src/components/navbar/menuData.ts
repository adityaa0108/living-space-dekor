export interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown?: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}

export const menuData: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "About",
    link: "/about",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Services",
    link: "/services",
    has_dropdown: true,
    sub_menus: [
      { link: "/services/residential", title: "Residential Design" },
      { link: "/services/commercial", title: "Commercial Spaces" },
      { link: "/services/hospitality", title: "Hospitality Design" },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    link: "/portfolio",
    has_dropdown: false,
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
    has_dropdown: false,
  }
];
