// src/assets/text/content.js

export const content = {
  mainMenu: {
    isMenu: true,
    welcome:
      "Welcome to the Main Menu!\n\nPlease reply with the number for your choice:",
    items: [
      {
        id: 1,
        emoji: "1. 🎙️",
        title: "Daily Bites",
        description: "(Access this week's key audio clips)",
      },
      {
        id: 2,
        emoji: "2. 🎧",
        title: "Podcast",
        description: "(Browse our latest podcast series)",
      },
      {
        id: 3,
        emoji: "3. 🙏",
        title: "I Want to Accept Jesus",
        description: "(Take the next step in your faith journey)",
      },
      {
        id: 4,
        emoji: "4. 📢",
        title: "Church Announcements",
        description: "(See what's happening at church)",
      },
      {
        id: 5,
        emoji: "5. ✨",
        title: "Testimonies",
        description: "(Share your story or listen to others)",
      },
      {
        id: 6,
        emoji: "6. ❤️",
        title: "Support this Platform",
        description: "(Help keep this daily service running)",
      },
      {
        id: 7,
        emoji: "7. 👋",
        title: "Invite a Friend to Church",
        description: "(Get a shareable video invitation)",
      },
      {
        id: 8,
        emoji: "8. ❓",
        title: "Help & Feedback",
        description: "(Contact us or share your thoughts)",
      },
    ],
  },
  podcastList: {
    isMenu: true,
    welcome:
      "Here are our latest podcast episodes. Reply with a number to select one:",
    items: [
      {
        id: 1,
        emoji: "1.",
        title: "Faith in the Modern Age",
        description: "Navigating belief in a fast-paced world.",
      },
      {
        id: 2,
        emoji: "2.",
        title: "The Parables, Unpacked",
        description: "Finding new meaning in old stories.",
      },
      {
        id: 3,
        emoji: "3.",
        title: "Purpose Driven Mornings",
        description: "Starting your day with intention.",
      },
      {
        id: 4,
        emoji: "4.",
        title: "Anxious for Nothing",
        description: "A series on finding peace in chaos.",
      },
      {
        id: 5,
        emoji: "5.",
        title: "Parenting with Grace",
        description: "Raising a family in faith.",
      },
      {
        id: 6,
        emoji: "6.",
        title: "Leadership Lessons from Nehemiah",
        description: "Building with a vision.",
      },
      {
        id: 7,
        emoji: "7.",
        title: "The Book of Romans: Part I",
        description: "A deep dive into the foundational text.",
      },
      {
        id: 8,
        emoji: "8.",
        title: "Conversations on Forgiveness",
        description: "Interviews on letting go.",
      },
      {
        id: 9,
        emoji: "9.",
        title: "Money & Meaning",
        description: "A biblical view on finances.",
      },
      {
        id: 10,
        emoji: "10.",
        title: "Sunday Sermon Rewind",
        description: "Highlights from this week's message.",
      },
    ],
  },
  podcastNotAvailable:
    "Thank you for your interest! This podcast episode is not yet available. Please check back soon.",
  testimonyMenu: {
    isMenu: true,
    welcome: "What would you like to do?",
    items: [
      { id: 1, emoji: "1.", title: "Share a testimony", description: "" },
      { id: 2, emoji: "2.", title: "Listen to testimonies", description: "" },
    ],
  },

  responses: {
    dailyBread: {
      type: "audio",
      url: "/assets/audio/dont_be_impatient.mp3",
      duration: "0:43",
    },
    announcements:
      "📢 *Church Announcements*\n\n- Youth Night: Friday at 7 PM\n- Sunday Service: 9 AM & 11 AM\n\nWe can't wait to see you!",
    shareTestimonyNotAvailable:
      "Thank you for your heart to share! This function is not yet available, but will be coming soon.",
    listenTestimonyAudio: {
      type: "audio",
      url: "/assets/audio/dont_be_impatient.mp3",
      duration: "0:43",
    },
    listenTestimonyNavigation:
      "You can type 'Next' to hear another testimony, or type 'Menu' to return to the main menu.",

    // ✅ NEW: Placeholder for Support option
    supportNotAvailable:
      "Thank you for your willingness to support us! This feature is not yet available.",

    inviteFriend:
      "👋 *Invite a Friend*\n\nA personal invitation from our pastor is coming soon! For now, feel free to forward any message that has blessed you.",
    help: "❓ *Help & Feedback*\n\nIf you have any issues or suggestions, please reply to this message and our team will get back to you.",
    fallback:
      "I'm sorry, I didn't quite understand that. 🤔\n\nPlease reply with a number (1-8) or type 'menu' to see the main options again.",
  },

  acceptJesus: {
    askName:
      "This is a wonderful decision! We're so excited to walk with you. To start, could you please share your full name?",
    askPhone:
      "Thank you, {name}. What is the best contact number for one of our pastors to reach out to you?",
    confirmation:
      "Thank you! A member of our pastoral team will be in touch shortly to pray with you and welcome you to the family.\n\nIf you need to speak to someone immediately, you can reach the church office at:\n📞 011-123-4567\n\nWelcome home! ❤️",
  },
};
