'use client';

import { useState } from 'react';
import './globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Header } from '../components';
import { darkTheme, lightTheme } from './theme/theme';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isDark, setIsDark] = useState(false);

	const toggleDark = () => {
		setIsDark(!isDark);
	};

	return (
		<html lang='en'>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<CssBaseline />
					<body>
						<Header toggleDark={toggleDark} />
						<div>{children}</div>
					</body>
				</LocalizationProvider>
			</ThemeProvider>
		</html>
	);
}
