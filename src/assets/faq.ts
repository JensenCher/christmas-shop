interface FAQProps {
    id: number;
    question: string;
    answer: string;
    expanded: boolean;
}

export const faqs: FAQProps[] = [
    {
        id: 1,
        question: "When is the last day to place an order?",
        answer: "The last day to place an order is December 31, 2023.",
        expanded: false,
    },
    {
        id: 2,
        question: "What products are available in the Christmas shop?",
        answer: "Our Christmas shop offers a variety of festive products, including decorations, ornaments, gifts, and more.",
        expanded: false,
    },
    {
        id: 3,
        question: "Is there a discount on Christmas items?",
        answer: "Yes, we have special discounts on select Christmas items. Check our website for the latest offers.",
        expanded: false,
    },
    {
        id: 4,
        question: "Can I still place an order after December 31?",
        answer: "Unfortunately, our online shop will be closed after December 31, 2023. Be sure to place your order before the deadline.",
        expanded: false,
    },
    {
        id: 5,
        question: "Are returns and exchanges allowed?",
        answer: "Yes, we accept returns and exchanges within 30 days of purchase. Please check our return policy for more details.",
        expanded: false,
    },
    {
        id: 6,
        question: "How can I track my order?",
        answer: "You can track your order by logging into your account on our website. We'll also provide tracking information via email.",
        expanded: false,
    },
    {
        id: 7,
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods, including credit/debit cards and online payment services. Check our payment options during checkout.",
        expanded: false,
    },
    {
        id: 8,
        question: "Can I modify or cancel my order?",
        answer: "Once an order is placed, modifications or cancellations may not be possible. Please contact our customer support for assistance.",
        expanded: false,
    },
    {
        id: 9,
        question: "Are gift wrapping services available?",
        answer: "Yes, we offer gift wrapping services for a special touch to your Christmas gifts. Select the option during checkout.",
        expanded: false,
    },
    {
        id: 10,
        question: "What happens to my personal information after the shop closes?",
        answer: "We prioritize the security of your data. After the shop closes, your personal information will be handled according to our privacy policy.",
        expanded: false,
    },
];