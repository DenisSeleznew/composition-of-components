import styles from './Field.module.css';

const FieldLayout = () => {
	return (
		<div className={styles.board}>
			<button className={styles.cell}></button>
		</div>
	);
};

export default FieldLayout;
