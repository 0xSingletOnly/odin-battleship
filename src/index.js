import { initFrontend } from "./view/initFrontend";

import { game } from "./logic/game";
import { addTargetGridEL } from "./view/feEventHandler";


game.initGame();

let currPlayer = game.getCurrPlayer();
let opponent = 1 - currPlayer;

let oceanGrid = game.getPlayers()[currPlayer].getGameBoard();
let targetGrid = game.getPlayers()[opponent].getGameBoard();

initFrontend(oceanGrid, targetGrid);
addTargetGridEL();