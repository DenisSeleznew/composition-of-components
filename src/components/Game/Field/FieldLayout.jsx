import PropTypes from 'prop-types';
import styles from './Field.module.css';

const FieldLayout = ({ field, onCellClick }) => {
	return (
		<div className={styles.board}>
			{field.map((cell, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => onCellClick(index)}>
					{cell === 'X' && (
						<img src="/public/Сross.png" className={styles.logo} />
					)}
					{cell === 'O' && (
						<img src="/public/Zero.png" className={styles.logo} />
					)}
					{!cell && <span className={styles.emptyCell}></span>}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
};

export default FieldLayout;
