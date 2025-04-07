import React from 'react';
import { Inter } from 'next/font/google';
import { Layout } from '../components/Layout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'The Soul App - Mental Health Support',
  description: 'A comprehensive mental health support platform with therapy, assessments, and self-care tools.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
