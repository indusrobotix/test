// ============================================
// FAQ DATA
// Edit this file to add, remove, or update frequently asked questions
// ============================================

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string; // Optional grouping
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "Do you deliver across Pakistan?",
    answer: "Yes! We deliver to all major cities in Pakistan through trusted courier services. Delivery typically takes 3-5 business days depending on your location. Cash on Delivery (COD) is available for most areas.",
    category: "Shipping",
  },
  {
    id: "faq-2",
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, JazzCash, EasyPaisa, and Cash on Delivery (COD). For bulk orders, we also offer installment plans for educational institutions.",
    category: "Payment",
  },
  {
    id: "faq-3",
    question: "Do your kits come with instructions?",
    answer: "Absolutely! Every kit includes detailed assembly instructions, circuit diagrams, and code samples. We also provide video tutorials and WhatsApp support for any questions.",
    category: "Products",
  },
  {
    id: "faq-4",
    question: "Can you design a custom chassis for my project?",
    answer: "Yes, custom chassis design is one of our specialties. Share your requirements and dimensions, and we'll create a CAD design for your approval before cutting. Typical turnaround is 5-7 days.",
    category: "Services",
  },
  {
    id: "faq-5",
    question: "Are your components locally sourced?",
    answer: "We source high-quality components from trusted local suppliers in Pakistan. This allows us to offer competitive prices and quick availability while supporting the local electronics ecosystem.",
    category: "Products",
  },
  {
    id: "faq-6",
    question: "Do you offer workshops for schools?",
    answer: "Yes! We conduct robotics workshops for schools, colleges, and organizations. Workshops can be customized based on age group and skill level. All materials are provided, and participants receive certificates.",
    category: "Services",
  },
  {
    id: "faq-7",
    question: "What's your return/exchange policy?",
    answer: "If you receive a defective component, contact us within 7 days for a free replacement. We test all kits before shipping, but we stand behind our products 100%.",
    category: "Support",
  },
  {
    id: "faq-8",
    question: "Can I visit your workshop?",
    answer: "Yes, you're welcome to visit our workshop in Lahore by appointment. We love meeting fellow robotics enthusiasts! Contact us to schedule a visit.",
    category: "General",
  },
];
