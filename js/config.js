/* ═══════════════════════════════════════════════════════════════
   KALYANAM · config.js
   ---------------------------------------------------------------
   Main personalisation data for the site and visual editor.
   Longer copy, palette, and theme are editable here. Values
   marked SAMPLE are tasteful placeholders — replace them with
   your own before sending the link to your guests.
   ═══════════════════════════════════════════════════════════════ */

window.HEIRLOOM = {
  templateId: "kalyanam",

  /* ── The couple — SAMPLE content, replace with your names ────── */
  couple: {
    partnerOne: "Arjun",                     // SAMPLE
    partnerTwo: "Meghana",                   // SAMPLE
    initials:  "A · M",                      // SAMPLE — used on seals & monograms
    namesLine: "Arjun & Meghana"             // SAMPLE — used across the site
  },

  /* ── The wedding date & time ─────────────────────────────────
     iso : ISO 8601 date-time WITH an explicit UTC offset, so the
           countdown and the calendar files are correct on every
           guest's device, wherever they are in the world.
           Format: "YYYY-MM-DDTHH:MM:SS±HH:MM"
           The sample below = 23 May 2026, 11:24 AM, IST — the
           muhurat from the invitation card.
     display / words / numerals : how the date reads in the copy. */
  wedding: {
    iso: "2027-05-22T11:24:00+05:30",                                        // EDIT
    endIso: "2027-05-22T22:30:00+05:30",                                     // EDIT — end of the celebration
    display: "Saturday, 22 May 2027 · the muhurat begins at 11:24 in the morning", // EDIT
    zoneLabel: "IST",                                                        // EDIT — optional note for guests abroad
    words: "Saturday · The Twenty-Second of May · Two Thousand Twenty-Seven",   // EDIT
    numerals: "22 · 05 · 2027",                                              // EDIT
    weekday: "Saturday",                                                     // EDIT — the ornamental date row
    month: "May",                                                            // EDIT
    day: "22",                                                               // EDIT — the large numeral
    year: "2027",                                                            // EDIT
    muhuratLabel: "Muhurat",                                                 // EDIT
    muhurat: "11:24 in the morning",                                         // EDIT
    eventTitle: "Arjun & Meghana — Wedding"                                  // EDIT (calendar entry)
  },

  /* ── The venue ──────────────────────────────────────────────── */
  venue: {
    name: "Sri Lakshmi Venkateshwara Kalyana Mandapam", // SAMPLE
    address: "123 Temple Road, Rajajinagar, Bengaluru, Karnataka 560010", // SAMPLE
    mapsQuery: "Sri Lakshmi Venkateshwara Kalyana Mandapam, Rajajinagar, Bengaluru",
    /* A full URL here overrides the map link built above, e.g. an
       exact Google Maps place link or an Apple Maps URL.          */
    mapUrl: ""
  },

  /* ── Copy shown throughout the invitation ────────────────────
     The visual editor can change these values without editing HTML. */
  content: {
    pageTitle: "Arjun & Meghana · 22 May 2027 — Indian Wedding Invitation",
    pageDescription: "Arjun and Meghana request the honour of your presence at the Sri Lakshmi Venkateshwara Kalyana Mandapam, Rajajinagar, Bengaluru — two days of haldi, mehndi, music and the sacred muhurat at 11:24 on Saturday the twenty-second of May 2027. Open your invitation.",
    socialTitle: "Arjun & Meghana — An Invitation · 22.05.2027",
    socialDescription: "Jasmine, marigolds and a happily ever after — you are cordially invited.",
    navStory: "Story",
    navDetails: "Events",
    navVenue: "Venue",
    navRsvp: "RSVP",
    menuInvitation: "The Invitation",
    menuStory: "Our Story",
    menuSaveDate: "Save the Date",
    menuDetails: "The Celebrations",
    menuPalette: "The Palette",
    menuWeddingDay: "The Festivities",
    menuVenue: "Venue & Location",
    menuRsvp: "Kindly Respond",
    menuCountdown: "The Countdown",
    menuClosing: "A Closing Note",
    openingEyebrow: "With the divine blessings of both families, you are invited to the wedding of",
    openingHint: "Touch the ticket to open",
    openButton: "Enter the Celebration",
    skipButton: "Skip straight to the invitation",
    envelopeAddress: "their honoured guests",
    invitationEyebrow: "With the divine blessings of our families",
    invitationLead: "We cordially invite you to celebrate the wedding of",
    invitationAnd: "and",
    invitationClosing: "Your presence will make our day complete",
    heroVenueLabel: "Venue",
    sceneSignboard: "Together is our favorite place to be",
    invitationVenueSuffix: "· Bengaluru",
    storyKicker: "Their Story",
    storyTitle: "Two hearts,",
    storyTitleScript: "one thread",
    storyParagraphOne: "Every good love story begins small, and ours began over filter coffee at a friend's engagement in Bengaluru — one borrowed umbrella, a sudden March downpour, and a conversation that outlasted the rain.",
    storyParagraphTwo: "Five years, two cities and a thousand shared plates of dosa later, we are writing our next chapter in the oldest language we know — love, spoken this time in jasmine, turmeric and gold. Nothing would mean more than to have you beside us when we do.",
    storyQuote: "Where there is love, there is life.",
    storyQuoteLabel: "— Mahatma Gandhi, a line we return to again and again",
    storyNote: "chapter the first, and all the rest",
    storyNoteCredit: "— scribbled on a Namma Metro ticket, Indiranagar to Malleshwaram",
    storyCaptionOne: "the first filter kaapi",
    storyCaptionTwo: "the umbrella moment",
    storyCaptionFour: "the seven steps",
    storyAside: "and they lived",
    saveDateTitle: "Save the Date",
    saveDateCrossing: "two days of jasmine, song & sacred vows",
    saveDateNote: "Add the date to your calendar and keep these particulars close.",
    calendarDownloadLabel: "Add to Calendar",
    calendarGoogleLabel: "Google Calendar",
    detailsKicker: "The Celebrations",
    detailsTitleFirst: "Wedding",
    detailsTitleSecond: "Events",
    detailsIntro: "Two days of festivity, at a glance.",
    haldiLabel: "The Haldi",
    haldiTime: "Friday, nine in the morning",
    haldiNote: "A golden bath of turmeric, songs and blessings at the family home.",
    mehndiLabel: "The Mehndi",
    mehndiTime: "Friday, four in the afternoon",
    mehndiNote: "Henna, folk songs and filter coffee as the bride's hands are adorned.",
    ceremonyLabel: "The Sangeet Night",
    ceremonyTime: "Friday, half past seven in the evening",
    ceremonyNote: "An evening of music and family performances — bring your dancing shoes.",
    receptionLabel: "The Muhurtham",
    receptionTime: "Saturday, 11:24 in the morning",
    receptionNote: "The sacred fire, the mangalya, seven steps around it — as the nadaswaram plays.",
    feastLabel: "The Sadhya Lunch",
    feastTime: "Saturday, half past twelve",
    feastNote: "A grand sadhya served on banana leaves — payasam first, always.",
    kindlyReplyLabel: "Kindly Reply",
    kindlyReplyNote: "Kindly send your response using the reply card further below.",
    particularsEyebrow: "The Particulars",
    particularsDateLabel: "The Date",
    particularsPlaceLabel: "The Place",
    particularsAttireLabel: "The Attire",
    particularsAttire: "Traditional festive",
    particularsAttireNote: "Kanjivarams, silk panchas and jewel tones are most welcome — bright and joyous.",
    particularsCarriagesLabel: "Kindly Reply",
    particularsCarriagesTime: "the first of May, 2026",
    particularsCarriagesNote: "So the sadhya count is right and every seat is saved.",
    paletteKicker: "The Colours of the Day",
    paletteTitleFirst: "The wedding",
    paletteTitleSecond: "palette",
    paletteIntro: "Antique gold and deep maroon, rose blossom and banana-leaf green, bronze ink on blush ivory — the colours of our celebration.",
    dressCodeLabel: "Attire · Traditional Festive",
    dressCodeTitle: "Bright & joyous",
    dressCodeNote: "Kanjivaram sarees, silk dhotis and jewel tones are most welcome — dress as splendidly as you feel.",
    weddingDayKicker: "The Celebrations",
    weddingDayTitleFirst: "The wedding",
    weddingDayTitleSecond: "festivities",
    venueKicker: "The Place",
    venueDescription: "A traditional kalyana mandapam dressed for the muhurtham — mango-leaf torans at the door, the manai set in banana stems, and rows of brass lamps glowing along the corridor.",
    venueCeremonyLabel: "Muhurtham",
    venueCeremonyText: "at the mandapam, as the nadaswaram plays",
    venueReceptionLabel: "Reception",
    venueReceptionText: "dinner & blessings in the dining hall",
    mapButton: "View Location",
    rsvpKicker: "Your Reply",
    rsvpTitle: "Kindly Respond",
    rsvpLead: "Kindly reply by",
    rsvpNameLabel: "Your name",
    rsvpNamePlaceholder: "e.g. Kavya Iyer",
    rsvpNameError: "May we have your name? Two letters or more will do.",
    rsvpAttendanceLabel: "Will you be joining us?",
    rsvpAcceptLabel: "Joyfully accepts",
    rsvpDeclineLabel: "Regretfully declines",
    rsvpAttendanceError: "Please let us know whether you can come.",
    rsvpGuestsLabel: "Seats in your party",
    rsvpGuestsError: "May we have a seat count between one and the party size allowed?",
    rsvpGuestSingular: "guest",
    rsvpGuestPlural: "guests",
    rsvpDietaryLabel: "Dietary requirements",
    rsvpDietaryPlaceholder: "Vegetarian, Jain, vegan, allergies…",
    rsvpMessageLabel: "A note for the couple",
    rsvpMessagePlaceholder: "Song requests, memories, blessings…",
    rsvpSubmitLabel: "Send Response",
    rsvpAmendLabel: "Amend the reply",
    countdownDaysLabel: "Days",
    countdownHoursLabel: "Hours",
    countdownMinutesLabel: "Minutes",
    countdownSecondsLabel: "Seconds",
    countdownKicker: "The Grand Countdown",
    countdownTitle: "counting the hours until",
    countdownPromise: "the muhurat begins",
    closingScript: "with all our love",
    closingMessage: "Thank you, from the depths of our hearts, for being part of our story. We cannot wait to celebrate with you among the jasmine and the marigolds — your presence completes our day.",
    footerTagline: "Jasmine, gold and a happily ever after."
  },

  palette: [
    { name: "Rani Pink",     color: "#D81E5B" },
    { name: "Marigold",      color: "#F5A623" },
    { name: "Temple Ink",    color: "#2A1015" },
    { name: "Emerald",       color: "#1C6B4E" },
    { name: "Kumkum",        color: "#8E0E30" },
    { name: "Card Cream",    color: "#FBF3E2" }
  ],
  theme: "blush",
  themeColors: {},
  fonts: {
    editorial: "yatraOne",
    display: "ebGaramond",
    script: "pinyon",
    hand: "shadowsIntoLight",
    body: "spaceGrotesk"
  },

  /* ── Wedding festivities — SAMPLE words for the garland.
     Use one short phrase per entry; an empty list hides the section. */
  moments: ["The Haldi", "The Mehndi", "The Sangeet", "The Vratham", "The Muhurtham", "The Sadhya", "The Reception"],

  /* ── RSVP ─────────────────────────────────────────────────────
     endpoint : leave "" for the honest demonstration mode — the
                form validates and shows a preview of the reply and
                states clearly that nothing is sent or stored.
                Cloudflare's publishing service supplies the invitation-
                specific RSVP endpoint to public invitation pages.
     maxGuests: the number allowed by the invitation.
     deadline  : shown above the form.                                  */
  rsvp: {
    endpoint: "",
    maxGuests: 4,
    deadline: "the first of May, 2027"            // SAMPLE
  },

  /* ── Countdown wording (invalid or passed dates) ─────────────── */
  countdown: {
    invalidMessage: "The muhurat is still being finalised — see the celebrations below.",
    pastMessage: "The celebration has begun — thank you for being part of our story."
  },

  /* ── Optional ambient music ───────────────────────────────────
     Drop a small looping file at assets/audio/theme.mp3 and set
     src to enable the volume toggle in the navigation. Never
     autoplays; stays silent if the file is missing.                  */
  audio: {
    src: ""             // e.g. "assets/audio/theme.mp3"
  }
};
