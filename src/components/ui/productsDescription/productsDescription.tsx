"use client";

import { useState } from "react";

type TFAQ = {
  question: string;
  answer: string;
};

const faqData: TFAQ[] = [
  {
    question: "Details",
    answer:
      "এই গ্রীষ্মে আরাম এবং স্টাইলের পারফেক্ট কম্বিনেশন নিয়ে এলো আমাদের নতুন ক্যাজুয়াল টি-শার্ট। ১০০% প্রিমিয়াম সুতি কাপড়ে তৈরি, যা সারাদিন আপনাকে রাখবে আরামদায়ক ও সতেজ।",
  },
  {
    question: "Metarials",
    answer:
      "১। মেটেরিয়াল: ১০০% কম্বড কটন (Combed Cotton) ২। ডিজাইন: রাউন্ড নেক (Round Neck) এবং শর্ট স্লিভ ৩। ফিটিং: রেগুলার ফিট ৪। সুবিধা: সফট ফেব্রিক, যা স্কিন-ফ্রেন্ডলি এবং টেকসই ৫। স্টাইলিং: জিন্স বা গ্যাবার্ডিন প্যান্টের সাথে দারুণ মানিয়ে যায় ৬। যত্ন: মেশিন ওয়াশ করা যাবে, রঙ জ্বলে না।",
  },
  {
    question: "Core",
    answer: "ডিটারজেন্ট দিয়ে বেশিক্ষণ ভিজিয়ে রাখবেন না। প্রয়োজনের অতিরিক্ত বেশি রোদে রাখবেন না",
  },
];

export default function FAQSection(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto py-1 px-1">
      <div>
        {faqData.map((faq: TFAQ, index: number) => (
          <div key={index} className="border-b border-gray-300 py-1">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-1 text-left"
            >
              <span>{faq.question}</span>

              <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="pb-5 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
