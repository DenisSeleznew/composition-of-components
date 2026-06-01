import styles from './Game.module.css';
import { useState } from 'react';

const GameLayout = ({ a, b, setA, setB, sum }) => (
	<div className={styles.app}>
		<div> A: {a}</div>
		<button onClick={() => setA(a + 1)}>Прибавить 1 к A</button>
		<div> B: {b}</div>
		<button onClick={() => setB(b + 1)}>Прибавить 1 к B</button>
		<div>Сумма A + B: {sum}</div>
	</div>
);

const Game = () => {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);

	const sum = a + b;

	return <GameLayout a={a} b={b} setA={setA} setB={setB} sum={sum} />;
};

export default Game;
