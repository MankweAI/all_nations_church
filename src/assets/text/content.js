// src/assets/text/content.js

export const content = {
  mainMenu:
    "Welcome! 🙏\n\nChoose an option by replying with the number:\n\n1️⃣ Daily Bread\n2️⃣ Sermons / Podcast\n3️⃣ I Want to Accept Jesus\n4️⃣ Church Announcements\n5️⃣ Testimonies\n6️⃣ Support this Platform\n7️⃣ Invite a Friend\n8️⃣ Help & Feedback\n\n_Reply with a number to get started_",

  // --- Bot Response Messages ---
  responses: {
    dailyBread: {
      type: "audio",
      url: "/assets/audio/don't_be_impatient.mp3",
      title: "Don't Be Impatient",
      duration: "2:15",
    },

    sermons:
      '📖 *Recent Sermons & Podcasts*\n\nBrowse our latest messages:\n\n1. "Living with Purpose" - Oct 1, 2025\n2. "The Joy of Salvation" - Sept 24, 2025\n3. "Faith That Moves Mountains" - Sept 17, 2025\n\n_Reply with the number to listen, or type \'0\' to return to the main menu._',

    announcements:
      "📢 *Church Announcements*\n\n• *Youth Night* - Friday, Oct 8th at 7 PM\n• *Community Outreach* - Saturday, Oct 9th at 9 AM\n• *Sunday Service* - 9 AM & 11 AM\n\nWe can't wait to see you there!\n\n_Type '0' to return to the main menu._",

    testimonies:
      "✨ *Testimonies*\n\nYour story matters! We'd love to hear how God is working in your life.\n\n*To share your testimony:*\nSimply reply with your story, and we'll celebrate with you!\n\n*To read others' testimonies:*\nVisit our website at [church-website.com/testimonies]\n\n_Type '0' to return to the main menu._",

    support:
      "💝 *Support This Platform*\n\nYour generosity helps us continue providing daily encouragement to our community.\n\n*Ways to Give:*\n• Bank Transfer: Account 123-456-789\n• Mobile Money: 555-GIVE\n• In Person: See our finance team on Sunday\n\nThank you for your faithful support!\n\n_Type '0' to return to the main menu._",

    inviteFriend:
      "👋 *Invite a Friend*\n\nShare this personal video invitation from Pastor [Name]:\n\n🎥 [Video link would appear here]\n\nOr copy this message:\n\"Hey! I'd love for you to join me at [Church Name] this Sunday. Service is at 9 AM. Hope to see you there!\"\n\n_Type '0' to return to the main menu._",

    help: "❓ *Help & Feedback*\n\n*Need Help?*\nContact our team at:\n📧 Email: help@church.com\n📱 WhatsApp: +27 123 456 789\n\n*Have Feedback?*\nWe'd love to hear your thoughts! Reply to this message with your feedback.\n\n_Type '0' to return to the main menu._",

    fallback:
      "I'm sorry, I didn't quite understand that. 🤔\n\nPlease reply with a number (1-8) to make a selection, or type '0' to see the main menu again.",
  },

  // --- Multi-Step Conversation: Accept Jesus ---
  acceptJesus: {
    askName:
      "🙏 *I Want to Accept Jesus*\n\nWe're so blessed that you've taken this step!\n\nTo help us support you on this journey, could you please share your *first name* with me?",

    askPhone:
      "Thank you! 😊\n\nCould you also share your *phone number* so one of our pastors can reach out to pray with you and answer any questions you might have?",

    confirmation:
      "🎉 *Praise God, {name}!*\n\nThis is a beautiful moment! One of our pastors will be in touch with you very soon.\n\nIn the meantime, here's a simple prayer you can pray:\n\n_\"Dear Jesus, I believe You are the Son of God. I believe You died for my sins and rose again. Please forgive me and come into my heart. I want to follow You all the days of my life. Amen.\"_\n\nWelcome to the family! ❤️\n\n_Type '0' to return to the main menu._",
  },
};