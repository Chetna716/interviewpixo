import React, { VFC } from 'react';
import { css } from '@emotion/css';

export const Navbar: VFC = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				{/* Logo */}
				<div className={styles.logo}>
					<img 
						src={process.env.PUBLIC_URL + "/PIXO LOGO.png"} 
						alt="PIXO Logo" 
						className={styles.logoImage}
					/>
				</div>
				
				{/* Navigation Links */}
				<div className={styles.navLinks}>
					<a href="#about" className={styles.navLink}>About Us</a>
					<a href="#contact" className={styles.navLink}>Contact Us</a>
				</div>
			</div>
		</nav>
	)
}

const styles = {
	navbar: css`
		position: fixed;
		top: 45px;
		left: 0;
		right: 0;
		z-index: 1000;
		background: transparent;
		padding: 15px 0;
	`,
	container: css`
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	`,
	logo: css`
		display: flex;
		align-items: center;
	`,
	logoImage: css`
		height: 40px;
		width: auto;
		object-fit: contain;
		background: rgba(255, 255, 255, 0.1);
		padding: 5px;
		border-radius: 4px;
	`,
	navLinks: css`
		display: flex;
		gap: 30px;
		align-items: center;
	`,
	navLink: css`
		color: white;
		text-decoration: none;
		font-size: 16px;
		font-weight: 500;
		transition: all 0.3s ease;
		opacity: 0.8;
		
		&:hover {
			opacity: 1;
			color: #fff;
			text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
		}
	`
}
