import { HeroProps } from "@/components/Hero";

export const menuItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
 
  { label: "Contact", href: "#contact" },
]


export const HeroPage: HeroProps = {
  cover: {
    title1: "Crafting Modern Architecture",
    title2: "For A Better Future.",
    image: "https://plus.unsplash.com/premium_photo-1680806491608-af096f1fc916?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Professional solutions for unauthorized and long-term parking, ensuring your customers always arrive with ease.",
    Button: {
      title: "SCHEDULE A CONSULTATION",
      onClick: () => { }
    }

  },
  Card1: {
    title: "Sample Title for Card 1",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    Button: {

      onClick: () => { }
    }

  },
  Card2: {
    title: "Sample Title for Card 2",
    image: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    Button: {

      onClick: () => { }
    }

  },
  Card3: {
    title: "Sample Title for Card 3",
    image: "https://plus.unsplash.com/premium_photo-1733514691627-e62171fc052c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    Button: {

      onClick: () => { }
    }

  }
}

export const PricingData = [
  {
    Title: "Solo",
Price: "From $29/mo",
Description : " The ideal plan for larger businesses who require heavy usage.",
Features : ["Sample 1", "Sample 2"],
Button: "Text"
  },
  {
    Title: "Solo",
Price: "From $29/mo",
Description : " The ideal plan for larger businesses who require heavy usage.",
Features : ["Sample 1", "Sample 2"],
Button: "Text"
  }, {
    Title: "Solo",
Price: "From $29/mo",
Description : " The ideal plan for larger businesses who require heavy usage.",
Features : ["Sample 1", "Sample 2"],
Button: "Text"
  }

]
export  const footerLinks = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

export const socialLinks = {
  facebook:"/",
  instagram : "/",
  twitter:"/",
  
 }

export const gridItems = [
  {
    id: 1,
    title: "From branding and graphic design to social media management, we bring your vision to life.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "We specialize in crafting end-to-end solutions for businesses of all sizes.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Drive",
    description: "Create Strategies that",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  }
];




export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];



