import PropTypes from 'prop-types';
import styles from './Game.module.css';
import Information from './Information/InformationLayout';
import Field from './Field/FieldLayout';

const GameLayout = ({
	field,
	currentPlayer,
	isGameEnded,
	isDraw,
	onCellClick,
	onReset,
}) => {
	return (
		<div className={styles.layout}>
			<div className={styles.gameContainer}>
				<h1 className={styles.title}>КРЕСТИКИ-НОЛИКИ</h1>

				<Information
					currentPlayer={currentPlayer}
					isGameEnded={isGameEnded}
					isDraw={isDraw}
				/>

				<Field field={field} onCellClick={onCellClick} />

				<button className={styles.resetBtn} onClick={onReset}>
					НАЧАТЬ ЗАНОВО
				</button>
			</div>
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
	onCellClick: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
};

export default GameLayout;
