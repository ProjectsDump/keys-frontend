import Sidebar from '@/components/Sidebar';
import React from 'react';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className='dashboard-layout'>
				<Sidebar />
			<section className='content'>{children}</section>
		</section>
	);
}
