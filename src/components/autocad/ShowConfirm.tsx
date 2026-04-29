interface ShowConfirmProps {
	step: number;
	setDialogOpen: (open: boolean) => void;
}

const ShowConfirm = ({ step, setDialogOpen }: ShowConfirmProps) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				fontFamily: 'system-ui, sans-serif',
			}}
			className="px-0 py-4"
		>
			{/* Checkmark Circle */}
			<div
				style={{
					position: 'relative',
					marginBottom: '2rem',
					opacity: step >= 1 ? 1 : 0,
					transform: step >= 1 ? 'scale(1)' : 'scale(0.5)',
					transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
				}}
			>
				{/* Outer glow ring */}
				<div
					style={{
						position: 'absolute',
						inset: '-16px',
						borderRadius: '50%',
						background: 'radial-gradient(circle, rgba(0,0,0,0.06) 0%, transparent 70%)',
						opacity: step >= 2 ? 1 : 0,
						transition: 'opacity 0.8s ease',
					}}
				/>

				{/* Circle */}
				<div
					style={{
						width: '100px',
						height: '100px',
						borderRadius: '50%',
						background: '#0a0a0a',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
						<path
							d="M10 24L20 34L38 14"
							stroke="#f5f5f5"
							strokeWidth="3.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeDasharray="50"
							strokeDashoffset={step >= 1 ? 0 : 50}
							style={{
								transition: 'stroke-dashoffset 0.5s ease 0.3s',
							}}
						/>
					</svg>
				</div>
			</div>

			{/* Title */}
			<h1
				style={{
					color: '#0a0a0a',
					fontSize: '1.75rem',
					fontWeight: '700',
					margin: '0 0 0.5rem',
					letterSpacing: '-0.02em',
					opacity: step >= 2 ? 1 : 0,
					transform: step >= 2 ? 'translateY(0)' : 'translateY(12px)',
					transition: 'all 0.4s ease',
				}}
			>
				Order Placed!
			</h1>

			<p
				style={{
					color: '#999',
					fontSize: '0.95rem',
					margin: '0 0 2.5rem',
					opacity: step >= 2 ? 1 : 0,
					transform: step >= 2 ? 'translateY(0)' : 'translateY(8px)',
					transition: 'all 0.4s ease 0.1s',
				}}
			>
				You'll receive the PDF on your college email
			</p>

			{/* Back Button */}
			<button
				onClick={() => setDialogOpen(false)}
				style={{
					marginTop: '2rem',
					padding: '12px 28px',
					background: 'transparent',
					border: '0.5px solid #555',
					borderRadius: '999px',
					color: '#555',
					fontSize: '0.875rem',
					cursor: 'pointer',
					opacity: step >= 4 ? 1 : 0,
					transition: 'all 0.4s ease 0.1s, color 0.2s, border-color 0.2s',
				}}
				onMouseEnter={(e) => {
					(e.target as HTMLButtonElement).style.color = '#0a0a0a';
					(e.target as HTMLButtonElement).style.borderColor = '#333';
				}}
				onMouseLeave={(e) => {
					(e.target as HTMLButtonElement).style.color = '#555';
					(e.target as HTMLButtonElement).style.borderColor = '#555';
				}}
			>
				Shop More
			</button>

			<style>{`
        @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.85); }
        }
    `}</style>
		</div>
	);
};

export default ShowConfirm;
