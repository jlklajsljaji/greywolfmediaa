import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      "quote": "Grey Wolf Med's expertise and innovative solutions have elevated our brand to new heights. Their dedication is unmatched.",
      "name": "Amelia Brown",
      "designation": "Marketing Director at BrightScope",
      "src": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "quote": "Their end-to-end solutions helped streamline our processes and amplify our presence online. A truly transformative experience.",
      "name": "Liam Johnson",
      "designation": "CEO at AlphaEdge",
      "src": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "quote": "From strategy to execution, their team ensured every detail was perfect. We couldn’t have asked for better results.",
      "name": "Sophia Martinez",
      "designation": "Project Manager at VistaCore",
      "src": "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "quote": "Their innovative approach and flawless execution made a huge impact on our business growth. Highly recommended!",
      "name": "Ethan Walker",
      "designation": "COO at NovaPath",
      "src": "https://images.unsplash.com/photo-1528913778876-8f2ff1f09956?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "quote": "The team at Grey Wolf Med brought our vision to life and exceeded all expectations. Their support has been phenomenal.",
      "name": "Olivia Davis",
      "designation": "Creative Lead at HorizonWorks",
      "src": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
  ;
  return <AnimatedTestimonials testimonials={testimonials} />;
}
