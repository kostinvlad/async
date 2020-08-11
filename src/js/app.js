import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const gameSaving = GameSavingLoader.load();
    console.log(gameSaving);
  } catch (error) {
    console.error(error);
  }
})();
