// src/assets/text/content.js

export const content = {
  mainMenu: {
    isMenu: true,
    welcome:
      "Welcome to Coach BX's personal assistant! How can I help you today?",
    items: [
      {
        id: 1,
        emoji: "1.",
        title: "Book a 1 hour Mentorship Session",
        description: "",
      },
      {
        id: 2,
        emoji: "2.",
        title: "Buy our Custom Wine, Gin & Vodka",
        description: "",
      },
      {
        id: 3,
        emoji: "3.",
        title: "Ask Me Anything",
        description: "",
      },
      {
        id: 4,
        emoji: "4.",
        title: "All the plugs",
        description: "(Business tips from the coach)",
      },
      {
        id: 5,
        emoji: "5.",
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
      "The investment for a 60-minute power session is R1500. This includes a recording of the call and a summary of your key action steps.",
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
    step3_existing_askName:
      "Excellent. What is your business name and website/social media link?",
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
      `Fantastic, thank you. Here is a summary of your details:\n\n*Business Stage:* ${data.stage}\n*Details:* ${data.details}\n*Location:* ${data.location}\n*Competitors:* ${data.competitors}\n*Challenge:* ${data.challenge}\n*Goal:* ${data.goal}\n\nIf that all looks correct, you can go ahead and book your session below!`,
    step6_handOff:
      "➡️ Secure Your Session & Book Now ⬅️\n(This would link to a booking page)",
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
      "Excellent choice! To add you to our VIP list for exclusive offers, what is your name and email address?",
    step2_gift_prompt:
      "Perfect for bespoke branding or bulk orders. So our team can get in touch, what is your name and email address?",
    step3_confirmation: (name) =>
      `Thank you, ${name}! We've got your details. You can visit our online store right now by clicking the link below.`,
    step3_storeLink:
      "➡️ Visit the Phantom VI Online Store ⬅️\nhttps://phantomvi.online/",
  },
  askMeAnything: {
    placeholder: "This feature is not active.",
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
    placeholder:
      "Thank you for reaching out through the Urgent Queries channel. Please note, this automated feature is still under development for our MVP launch and is not yet active. For any truly urgent matters, please send a detailed email directly to support@coachbx.co.za. For all other inquiries, please type 'menu'.",
  },
  fallback:
    "I'm sorry, I didn't quite understand that. 🤔\n\nPlease reply with a number (1-5) or type 'menu' to see the main options again.",
};
