import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/style/globals.css'
import { ReactNode } from 'react'
import NavBar from '@/components/NavBar'
import siteConfig from '@/config/sits'
import { ClerkProvider } from '@clerk/nextjs'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					<div
						className={
							'mediaPadding bg-base-100/90 w-full h-16 flex justify-between items-center sticky top-0 left-0 z-50 backdrop-blur-xl '
						}
					>
						<NavBar />
					</div>
					<div className={'mediaPadding  h-full'}>{children}</div>
				</body>
			</html>
		</ClerkProvider>
	)
}
