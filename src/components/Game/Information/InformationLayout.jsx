import PropTypes from 'prop-types';
import styles from './information.module.css';

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	const getStatusText = () => {
		if (isDraw) return 'НИЧЬЯ';

		if (isGameEnded) {
			return `ПОБЕДА ${currentPlayer === 'X' ? '❌ КРЕСТИК' : '⭕ НОЛИК'}`;
		}
		return `ХОДИТ ${currentPlayer === 'X' ? ' ❌ КРЕСТИК' : ' ⭕ НОЛИК'}`;
	};

	return (
		<div className={styles.information}>
			<div className={styles.status}>{getStatusText()}</div>
		</div>
	);
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};

export default InformationLayout;
