"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/lib/faq-data";

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenId?: string;
}

export function FAQAccordion({ items, defaultOpenId }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(
    defaultOpenId ? new Set([defaultOpenId]) : new Set()
  );

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const sortedItems = [...items].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-4">
      {sortedItems.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
            aria-expanded={openItems.has(item.id)}
            aria-controls={`faq-answer-${item.id}`}
          >
            <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
            <ChevronDown
              size={24}
              className={`flex-shrink-0 text-primary-600 transition-transform ${
                openItems.has(item.id) ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {openItems.has(item.id) && (
            <div
              id={`faq-answer-${item.id}`}
              className="px-6 py-4 bg-gray-50 border-t border-gray-200 animate-in fade-in duration-200"
            >
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
