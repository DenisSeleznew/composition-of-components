import styles from './information.module.css';

const InformationLayout = () => {
	const getStatusText = () => {
		//будет выводить статус игры "Ничья, победа, ходит"
	};

	return (
		<div className={styles.information}>
			<div className={styles.status}>{getStatusText}</div>
		</div>
	);
};

export default InformationLayout;
