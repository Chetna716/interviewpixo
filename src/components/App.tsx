import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { LinkIconButton } from './LinkIconButton';
import { TCanvas } from './three/TCanvas';
import { Navbar } from './Navbar';

export const App: VFC = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<TCanvas />
		</div>
	)
}

const styles = {
	container: css`
		position: relative;
		width: 100vw;
		height: 100vh;
	`
}
