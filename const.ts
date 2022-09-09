export enum AppRoute {
  Home = "/",
  About = "/about",
  Events = "/events",
  PrivacyPolicy = "/privacy-policy",
  Register = "/register",
  Results = "/results/latest",
  Rules = "/rules",
  TermsConditions = "terms-and-conditions",
}

export enum ExtLinks {
  Forever = "https://forever.5verst.ru/",
  Lk = "https://my.5verst.ru/#/login",
  Vk = "https://vk.com/5verst",
  Telegram = "https://t.me/verst5",
  Zen = "https://zen.yandex.ru/5verst",
  InfoMail = "mailto:info@5verst.ru",
  SupportMail = "mailto:support@5verst.ru",
  FondPotanin = "https://fondpotanin.ru/",
  Unisender = "https://www.unisender.com/",
}

export const backendUrl = process.env.HOST_URL;
export const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export enum ApiRoute {
  WebsiteStat = "/website/event/stat",
}
