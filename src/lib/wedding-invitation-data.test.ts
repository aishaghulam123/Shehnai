import { describe, expect, it } from "vitest";

import { getWeddingCountdown, weddingInvitation } from "@/lib/wedding-invitation-data";

describe("the invitation's editable demonstration details", () => {
  it("uses the requested Areeba and Noman names", () => {
    expect(weddingInvitation.couple.fullNames).toBe("Areeba & Noman");
  });

  it("uses the requested wedding date and Karachi-local start time", () => {
    expect(weddingInvitation.wedding.isoDateTime).toBe("2027-01-17T19:00:00+05:00");
  });

  it("calculates the live countdown from the requested Karachi wedding time", () => {
    expect(getWeddingCountdown(weddingInvitation.wedding.isoDateTime, Date.parse("2027-01-17T13:59:00Z"))).toEqual({
      complete: false,
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0,
    });
  });

  it("marks the celebration complete once its date has passed", () => {
    expect(getWeddingCountdown(weddingInvitation.wedding.isoDateTime, Date.parse("2027-01-17T14:00:00Z")).complete).toBe(true);
  });

  it("provides the requested venue address and map destination", () => {
    expect(weddingInvitation.venue.address).toBe("DHA Phase 8, Karachi, Pakistan");
    expect(weddingInvitation.venue.mapsUrl).toContain("google.com/maps/search");
  });

  it("includes all four dated celebrations", () => {
    expect(Object.keys(weddingInvitation.eventInvitation)).toEqual(["mehndi", "baraat", "walima"]);
    expect(weddingInvitation.eventInvitation.walima.date).toBe("18 January 2027");
  });

  it("keeps designer contact destinations editable in the central invitation data", () => {
    expect(weddingInvitation.designer.instagramLabel).toBe("https://www.instagram.com/digital_invites_bymili/");
    expect(weddingInvitation.designer.whatsAppLabel).toBe("[YOUR WHATSAPP LINK]");
  });
});