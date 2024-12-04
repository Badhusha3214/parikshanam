import { Noto_Sans, Roboto } from "next/font/google";

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  weights: ["400", "700"],
});

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
