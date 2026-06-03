import styles from './Game.module.css';
import Information from './Information/InformationLayout';
import Field from './Field/FieldLayout';

const GameLayout = () => {
	return (
		<div className={styles.layout}>
			<div className={styles.gameContainer}>
				<h1 className={styles.title}>КРЕСТИКИ-НОЛИКИ</h1>
				<Information />
				<Field />
				<button className={styles.resetBtn}>НАЧАТЬ ЗАНОВО</button>
			</div>
		</div>
	);
};

export default GameLayout;
