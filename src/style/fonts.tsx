import { Noto_Sans_SC, Poppins } from 'next/font/google'

const fontPoppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const fontSans = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-sc',
})

export { fontPoppins, fontSans }
