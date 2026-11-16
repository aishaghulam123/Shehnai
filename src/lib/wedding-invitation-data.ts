// ✏️  Yahan se poori invitation ki details edit karein — baqi code ko chhoone ki zaroorat nahi.

export type WeddingEvent = {
  name: string;
  theme: "mehndi" | "baraat" | "walima";
  day: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  description: string;
};

export type CountdownParts = {
  complete: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const weddingInvitation = {
  couple: {
    bride: "Areeba",
    groom: "Noman",
    fullNames: "Areeba & Noman",
    monogram: "A & N",
  },
  wedding: {
    event: "Nikah & Wedding Celebration",
    day: "Sunday",
    date: "17 January 2027",
    time: "7:00 PM Onwards",
    // Karachi time (UTC+05:00). Countdown isi se chalta hai.
    isoDateTime: "2027-01-17T19:00:00+05:00",
  },
  venue: {
    name: "The Grand Garden Banquet",
    address: "DHA Phase 8, Karachi, Pakistan",
    // Google Maps search link + embedded map dono isi query se bante hain.
    mapsQuery: "DHA Phase 8, Karachi, Pakistan",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=DHA%20Phase%208%2C%20Karachi%2C%20Pakistan",
    mapsEmbedUrl: "https://www.google.com/maps?q=DHA%20Phase%208%2C%20Karachi%2C%20Pakistan&output=embed",
  },
  eventInvitation: {
    mehndi: {
      name: "Mehndi",
      theme: "mehndi",
      day: "Thursday",
      date: "14 January 2027",
      time: "7:30 PM",
      venue: "The Garden Lawn",
      address: "DHA Phase 8, Karachi",
      description: "An evening of henna, music and dancing under the lights.",
    },
    baraat: {
      name: "Baraat",
      theme: "baraat",
      day: "Sunday",
      date: "17 January 2027",
      time: "7:00 PM",
      venue: "The Grand Garden Banquet",
      address: "DHA Phase 8, Karachi",
      description: "The grand arrival, the nikah and the heart of our celebration.",
    },
    walima: {
      name: "Walima",
      theme: "walima",
      day: "Monday",
      date: "18 January 2027",
      time: "8:00 PM",
      venue: "The Grand Garden Banquet",
      address: "DHA Phase 8, Karachi",
      description: "A graceful dinner to bless the newlyweds with your presence.",
    },
  } satisfies Record<string, WeddingEvent>,
  designer: {
    // ✏️  Apne asli links yahan lagayein.
    instagramLabel: "Digital_invites_bymili",
    whatsAppLabel: "Einvitation_bymili",
    instagramUrl: "https://www.instagram.com/digital_invites_bymili/",
    whatsAppUrl: "https://api.whatsapp.com/message/N24AWOP5IQURG1?autoload=1&app_absent=0",
  },
};

export function getWeddingCountdown(isoDateTime: string, now: number = Date.now()): CountdownParts {
  const remaining = Date.parse(isoDateTime) - now;
  if (!Number.isFinite(remaining) || remaining <= 0) {
    return { complete: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const total = Math.floor(remaining / 1000);
  return {
    complete: false,
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}
