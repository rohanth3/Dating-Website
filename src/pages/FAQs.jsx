import React from 'react';

const faqs = [
  {
    category: "Account and Profile",
    questions: [
      {
        question: "How do I create an account?",
        answer:
          'To create an account, simply click the "Sign Up" button on our homepage. Follow the on-screen instructions to provide your basic information and create a password.',
      },
      {
        question: "How do I change my password?",
        answer:
          'To change your password, log into your account and go to your profile settings. Look for the "Password" section and follow the prompts to reset your password.',
      },
      {
        question: "How do I update my profile information?",
        answer:
          "Log into your account and go to your profile page. You can edit your profile information, including photos, bio, interests, and preferences.",
      },
      {
        question: "How do I delete my account?",
        answer:
          "To delete your account, please contact our customer support team. They will guide you through the process and ensure your data is removed securely.",
      },
      {
        question: "How do I verify my profile?",
        answer:
          "To verify your profile, you may be asked to provide additional information or complete a verification process. This helps us ensure the authenticity of our users.",
      },
    ],
  },
  {
    category: "Search and Matching",
    questions: [
      {
        question: "How do I search for matches?",
        answer:
          "You can search for matches using our advanced search filters. You can filter by age, location, interests, and other criteria.",
      },
      {
        question: "How does the matching system work?",
        answer:
          "Our matching algorithm considers your preferences and compatibility to suggest potential matches. You can also manually search for users based on your criteria.",
      },
      {
        question: "How do I filter my search results?",
        answer:
          "Use our advanced search filters to narrow down your search results based on specific preferences, such as age, location, interests, and more.",
      },
      {
        question: "What are the different membership levels?",
        answer:
          "We offer various membership levels to cater to different needs. Each level provides access to different features, such as unlimited messaging, advanced search filters, and priority profile visibility.",
      },
    ],
  },
  {
    category: "Messaging and Communication",
    questions: [
      {
        question: "How do I send messages to other users?",
        answer:
          "Once you've matched with someone, you can initiate a conversation by sending them a message.",
      },
      {
        question: "How do I block or report a user?",
        answer:
          "If you encounter any inappropriate or harmful behavior, you can block or report a user. Look for the appropriate options within the user's profile or message thread.",
      },
      {
        question: "How do I turn off notifications?",
        answer:
          "You can manage your notification settings in your account settings. You can choose to turn off specific notifications or all notifications.",
      },
      {
        question: "What is the etiquette for messaging?",
        answer:
          "Be respectful, kind, and considerate in your messages. Avoid sending unsolicited messages or inappropriate content.",
      },
    ],
  },
  {
    category: "Safety and Privacy",
    questions: [
      {
        question: "How does the website protect my personal information?",
        answer:
          "We employ advanced security measures to protect your personal information. Your data is encrypted and securely stored.",
      },
      {
        question: "What are your privacy policies?",
        answer:
          "Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your personal information.",
      },
      {
        question: "How do I report harassment or abuse?",
        answer:
          "If you experience any harassment or abuse, please report it immediately to our customer support team.",
      },
      {
        question: "What should I be aware of when meeting someone in person?",
        answer:
          "Always prioritize your safety when meeting someone in person. Meet in a public place, let a friend know where you're going, and trust your instincts.",
      },
    ],
  },
  {
    category: "Payment and Subscription",
    questions: [
      {
        question: "How do I subscribe to a premium membership?",
        answer:
          "You can subscribe to a premium membership directly from your account settings. We offer various payment options, including credit card and PayPal.",
      },
      {
        question: "What are the different payment options?",
        answer:
          "We accept various payment methods, including credit cards, debit cards, and PayPal.",
      },
      {
        question: "How do I cancel my subscription?",
        answer:
          "You can cancel your subscription by contacting our customer support team or through your account settings.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "Our refund policy varies depending on the specific circumstances. Please contact our customer support team for more information.",
      },
    ],
  },
  {
    category: "General",
    questions: [
      {
        question: "How do I contact customer support?",
        answer:
          "You can contact our customer support team by email or through our online help center.",
      },
      {
        question: "What is the website's terms of service?",
        answer:
          "Please refer to our Terms of Service for detailed information on the terms and conditions of using our website.",
      },
      {
        question: "What is the website's code of conduct?",
        answer:
          "Please adhere to our Code of Conduct, which outlines the expected behavior of all users on our platform.",
      },
    ],
  },
];

const FAQPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center"
      style={{
        backgroundImage: "url('https://i.pinimg.com/564x/06/90/01/069001f908fe34f04934ffc86c39a6d3.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-80 max-w-3xl mx-auto p-8 rounded-lg shadow-lg mt-10 mb-10">
        <h2 className="text-3xl font-bold text-pink-600 mb-8">Frequently Asked Questions</h2>
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{section.category}</h3>
            <ul className="space-y-6">
              {section.questions.map((faq, index) => (
                <li key={index} className="bg-white bg-opacity-90 p-6 rounded shadow">
                  <h4 className="text-xl font-semibold text-gray-800">{faq.question}</h4>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;