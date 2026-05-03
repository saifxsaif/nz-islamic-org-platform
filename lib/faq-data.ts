export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export const faqData: FAQItem[] = [
  {
    id: "prayer-times",
    question: "What are the prayer times?",
    answer:
      "Prayer times vary throughout the year based on the Islamic lunar calendar and the position of the sun. We recommend checking our website or contacting us directly for the current prayer schedule. Prayer times are typically posted in our community center and shared with members regularly.",
    order: 1,
  },
  {
    id: "location",
    question: "Where is the Nelson Islamic Cultural Society located?",
    answer:
      "We are located in Nelson, New Zealand. For specific directions and address information, please contact us directly at contact@nelsonislamicsociety.org.nz or call us. We welcome visitors and community members to visit our facilities.",
    order: 2,
  },
  {
    id: "membership",
    question: "How can I become a member?",
    answer:
      "We welcome all members of the Islamic faith and those interested in learning about Islamic culture to join our community. To become a member, please contact us directly or visit our facilities. There is no formal membership fee, though we appreciate voluntary contributions to support our activities and programs.",
    order: 3,
  },
  {
    id: "events",
    question: "What events and activities do you organize?",
    answer:
      "We organize a variety of events throughout the year, including religious services, educational classes, cultural celebrations, and community gatherings. We also participate in interfaith events and community outreach programs. For a complete list of upcoming events, please contact us or check our website regularly.",
    order: 4,
  },
  {
    id: "education",
    question: "Do you offer educational programs?",
    answer:
      "Yes, we offer educational programs including Islamic studies classes, Arabic language lessons, and cultural workshops. These programs are designed for both children and adults. For information about current programs and registration, please contact us directly.",
    order: 5,
  },
  {
    id: "visitors",
    question: "Are visitors welcome?",
    answer:
      "Absolutely! We welcome visitors of all backgrounds. Whether you are interested in learning about Islam, attending a prayer service, or simply visiting our community center, we encourage you to reach out. Please contact us in advance so we can ensure a warm welcome and provide any necessary information.",
    order: 6,
  },
  {
    id: "donations",
    question: "How can I support the society?",
    answer:
      "There are several ways to support our organization. You can make financial contributions, volunteer your time and skills, participate in our events and programs, or help spread awareness about our community. For more information about how you can get involved, please contact us.",
    order: 7,
  },
  {
    id: "interfaith",
    question: "Do you participate in interfaith activities?",
    answer:
      "Yes, we are committed to building bridges with other faith communities and promoting interfaith understanding. We participate in various interfaith events and dialogues throughout the year. We believe that cooperation and mutual respect between different faith communities strengthen our entire community.",
    order: 8,
  },
];
