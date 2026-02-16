import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact | Dhyey Parekh",
  description: "Send me a message directly from the terminal.",
  openGraph: {
    title: "Contact | Dhyey Parekh",
    description: "Send me a message directly from the terminal.",
    url: "https://dhyeyparekh.in/contact",
    siteName: "Dhyey Parekh",
    images: [
      {
        url: "https://harshgajjar.dev/assets/images/og/contact.webp",
        width: 1200,
        height: 630,
        alt: "Contact | Dhyey Parekh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Dhyey Parekh",
    description: "Send me a message directly from the terminal.",
    images: ["https://harshgajjar.dev/assets/images/og/contact.webp"],
    creator: "@dhyey2075",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
