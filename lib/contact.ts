export const contactDetails = {
  email: "nostalgiastudio.id@gmail.com",
  whatsappNumber: "628111187077",
  instagramHandle: "@nostalgiakala.id",
  instagramUrl: "https://www.instagram.com/nostalgiakala.id",
  mapsUrl: "https://maps.app.goo.gl/QVCbMCkfseCMGHwcA",
} as const;

export function getWhatsAppUrl(message?: string) {
  const baseUrl = `https://wa.me/${contactDetails.whatsappNumber}`;

  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}
