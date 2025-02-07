import React from "react";

const DatingTips = () => {
  return (
    <div className="font-sans">
      <Header />
      <TipsSection />
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-pink-500 text-white text-center p-8">
      <h1 className="text-4xl font-bold mb-2">Here are some Dating Tips</h1>
      <p className="text-lg">Improve your dating life with simple, practical tips!</p>
    </header>
  );
};

const TipsSection = () => {
  const tips = [
    { title: "Be Yourself", description: "Authenticity is attractive. Be honest and true to yourself." },
    { title: "Listen More", description: "Show genuine interest by listening carefully to what your date has to say." },
    { title: "Show Appreciation", description: "Express gratitude and appreciation; a little goes a long way." },
    { title: "Stay Positive", description: "Positivity is contagious. Try to stay upbeat, even if nervous." },
    { title: "Be Respectful", description: "Always respect boundaries and remember that consent is key." },
    { title: "Judgement", description: "Stop correcting your partner at beginning and just agree to let things go smoothly in early stages."},
    { title: "Confidence", description: "Show self assurance without overshadowing your partner's thoughts or feelings."},
    { title: "Compliments", description: "Small meaningful compliments can make your date feel special and appreciated."},
    { title: "Body Language", description: "Good pos0tures,open gesture,and attentive expressions communicate intrest and openness without words."},
    { title: "Conversation", description: "Keep conversation light and fun engaging topics that help you bond with each other, and avoid heavy topics."},
    { title: "Avoid Distractions", description: "Avoid checking your phone and getting distracted. Give them your undivided attention."},
    { title: "Plan A Thoughtful Date", description: "Think of activities or places that reflect their interests or that can create memories."},
  ];

  return (
    <section className="bg-white text-gray-800 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Top Dating Tips</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, index) => (
          <TipCard key={index} title={tip.title} description={tip.description} />
        ))}
      </div>
    </section>
  );
};

const TipCard = ({ title, description }) => {
  return (
    <div className="bg-pink-100 rounded-lg p-6 shadow-md">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default DatingTips;