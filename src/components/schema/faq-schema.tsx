import Script from "next/script";

import { FAQ } from "@/lib/faqs";

interface FAQSchemaProps {
  faqs: FAQ[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script id="faq-schema" type="application/ld+json">
      {JSON.stringify(schemaData)}
    </Script>
  );
}
