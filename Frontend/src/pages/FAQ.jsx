const FAQ = () => {
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit/debit cards, UPI, Net Banking, and Cash on Delivery (COD).",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery typically takes 3–7 business days depending on your location.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Yes, you can return or exchange items within 7 days of delivery if they meet our return conditions.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you’ll receive a tracking number via email or SMS.",
    },
    {
      question: "Do you offer discounts or coupon codes?",
      answer:
        "Yes! Subscribe to our newsletter or check the homepage banners for ongoing deals.",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
      <p className="text-center text-gray-600 mb-10">
        Here are some common questions about shopping with us.
      </p>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
