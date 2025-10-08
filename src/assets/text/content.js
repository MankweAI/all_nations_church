// src/assets/text/content.js

export const content = {
  mainMenu: {
    isMenu: true,
    welcome:
      "Welcome to Coach BX's personal assistant! How can I help you today?",
    items: [
      {
        id: 1,
        emoji: "1. 🗓️",
        title: "Book a 1 hour Mentorship Session",
        description: "",
      },
      {
        id: 2,
        emoji: "2. 🍾",
        title: "Buy our Custom Wine, Gin & Vodka",
        description: "",
      },
      {
        id: 3,
        emoji: "3. 🧠",
        title: "Ask Me Anything",
        description: "",
      },
      {
        id: 4,
        emoji: "4. 🔌",
        title: "All the plugs",
        description: "",
      },
      {
        id: 5,
        emoji: "5. 🚨",
        title: "Urgent Queries",
        description: "",
      },
    ],
  },
  mentorshipFlow: {
    step1_welcome: {
      isMenu: true,
      welcome:
        "Awesome! A 1-hour power session can genuinely change the direction of your business. I just need to ask a few quick questions to prepare for our call.",
      items: [
        { id: 1, title: "Yes, let's do it!" },
        { id: 2, title: "What is the price? R" },
      ],
    },
    step1_priceInfo:
      "The investment for a 60-minute power session is R400.00. This includes a recording of the call and a summary of your key action steps.",
    step2_triage: {
      isMenu: true,
      welcome: "First, which of these best describes your current stage?",
      items: [
        {
          id: 1,
          emoji: "1. 💡",
          title: "I have an idea/capital, but haven't started",
        },
        {
          id: 2,
          emoji: "2. 🏪",
          title: "I have an existing business (product/service)",
        },
        {
          id: 3,
          emoji: "3. ✨",
          title: "I'm building a personal brand/influencer",
        },
        { id: 4, emoji: "4. 🤔", title: "Something else" },
      ],
    },
    step3_idea_askIdea:
      "Great, the idea phase is exciting! In one sentence, what is your business idea or industry?",
    step3_idea_askLocation:
      "Got it. And where are you based? (e.g., Sandton, Gauteng)",
    step3_idea_askCompetitors:
      "Have you identified any potential competitors yet? If so, who are they?",
    step3_existing_askName: "Excellent. What is your business name?",
    step3_existing_askLinks:
      "Thanks! Please share your website and/or main social media handle (e.g., @yourbrand on Instagram).",
    step3_existing_askLocation:
      "And where is your business primarily located? (e.g., A specific shop in Durban, services across Gauteng, or online nationwide)",
    step3_existing_askCompetitors: "Who are your 1-2 main local competitors?",
    step4_askChallenge: {
      isMenu: true,
      welcome: "What is your single biggest business challenge right now?",
      items: [
        { id: 1, title: "Getting new customers / Marketing" },
        { id: 2, title: "Increasing my sales & profit" },
        { id: 3, title: "Business strategy & planning" },
        { id: 4, title: "Building my brand / Social media" },
        { id: 5, title: "Managing my finances / Cash flow" },
        { id: 6, title: "Other" },
      ],
    },
    step5_askGoal:
      "Perfect. And to make this the most valuable hour for you, what would a 'perfect' outcome from this session look like?",
    step6_summary: (data) =>
      `Fantastic, thank you. Here is a summary of your details:\n\n*Business Stage:* ${
        data.stage
      }\n*Business Name:* ${data.name || "N/A"}\n*Links:* ${
        data.links || "N/A"
      }\n*Location:* ${data.location}\n*Competitors:* ${
        data.competitors
      }\n*Challenge:* ${data.challenge}\n*Goal:* ${
        data.goal
      }\n\nIf that all looks correct, you can go ahead and book your session below!`,
    step6_handOff: "➡️ Secure Your Session & Book Now ⬅️\n(Payment gateway)",
  },
  ecommerceFlow: {
    step1_welcome: {
      isMenu: true,
      welcome:
        "Great! Our store has some fantastic custom items. What are you interested in?",
      items: [
        { id: 1, emoji: "1. 🍷", title: "Wine" },
        { id: 2, emoji: "2. 🍸", title: "Gin & Vodka" },
        { id: 3, emoji: "3. 🎁", title: "Customized Gift" },
      ],
    },
    step2_vip_prompt:
      "Excellent choice! Please give us your name and cellphone number so that we can hear your experience with us.",
    step2_gift_prompt:
      "Perfect for bespoke branding or bulk orders. So our team can get in touch, what is your name and cellphone number?",
    step3_confirmation: (name) =>
      `Thank you, ${name}! We've got your details. You can visit our online store right now by clicking the link below.`,
    step3_storeLink:
      "➡️ Visit the Phantom VI Online Store ⬅️\nhttps://phantomvi.online/",
  },
  askMeAnything: {
    prompt: {
      isMenu: true,
      welcome:
        "I'm connected to the Coach BX knowledge base. Please select a topic or type your own question below.",
      items: [
        { id: 1, title: "Kasi Businesses to start today" },
        { id: 2, title: "White-Labelling Products (Health, Beauty, etc.)" },
        { id: 3, title: "The Vending Machine Business" },
        { id: 4, title: "Starting a Wi-Fi Reseller Business" },
        { id: 5, title: "Businesses to Start Under R1,000" },
        { id: 6, title: "Businesses to Start Under R5,000" },
        { id: 7, title: "Funding Opportunities in SA" },
        { id: 8, title: "Registering a Business (Pty Ltd vs Sole Proprietor)" },
        { id: 9, title: "SARS & Tax Basics for Small Business" },
        { id: 10, title: "Social Media Marketing Tips" },
        { id: 11, title: "How to Bid for Government Tenders" },
      ],
    },
    error:
      "Sorry, I had trouble connecting to my knowledge base. Please try again in a moment.",
  },
  plugsLink:
    "Here are all the business tips from Coach BX:\n\nwww.businessplugs.co.za",
  urgentQueries: {
    menu: {
      isMenu: true,
      welcome: "Please select your urgent query:",
      items: [
        { id: 1, title: "Technical issue with a paid session" },
        { id: 2, title: "Time-sensitive media/PR opportunity" },
        { id: 3, title: "A major, sudden business crisis" },
        { id: 4, title: "My issue is something else" },
      ],
    },
    placeholder: "This feature under construction",
  },
  goodbye: "You're welcome! Feel free to reach out anytime. Cheers!",
  backToMenu: {
    isMenu: true,
    welcome: "Would you like to return to the main menu?",
    items: [{ id: 1, title: "Yes, back to Main Menu" }],
  },
  fallback:
    "I'm sorry, I didn't quite understand that. 🤔\n\nPlease type 'menu' to see the main options again.",
};
