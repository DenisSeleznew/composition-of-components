import GameLayout from './GameLayout';
import { useState } from 'react';
import { checkWinner, checkDraw } from './utils';

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const handleCellClick = index => {
		if (field[index] !== '' || isGameEnded || isDraw) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		const winner = checkWinner(newField);

		if (winner) {
			setIsGameEnded(true);
			return;
		}

		if (checkDraw(newField)) {
			setIsDraw(true);
			return;
		}

		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
	};

	const handleReset = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};

	return (
		<GameLayout
			field={field}
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			onCellClick={handleCellClick}
			onReset={handleReset}
		/>
	);
};
export default Game;
