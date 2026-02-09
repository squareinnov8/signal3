import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Aura } from '@/components/Aura';

// Open Sans - Official Equifax brand typeface
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Signal3 | Equifax Design System',
  description:
    'Signal3 is Equifax\'s unified design system, providing consistent, accessible, and beautiful components for web, mobile, and desktop applications.',
  keywords: ['design system', 'component library', 'Equifax', 'UI', 'React'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="min-h-screen bg-white font-body text-gray-900 antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Aura />
        <Analytics />

        {/* Pendo Analytics */}
        <Script
          id="pendo-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(apiKey){
                (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
                v=['initialize','identify','updateOptions','pageLoad','track','trackAgent'];for(w=0,x=v.length;w<x;++w)(function(m){
                    o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
                    y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
                    z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
              })('b0d5c9c2-55f9-49dc-a6fc-fa4312ba912e');
            `,
          }}
        />
      </body>
    </html>
  );
}
