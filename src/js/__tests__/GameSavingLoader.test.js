import GameSavingLoader from '../GameSavingLoader';

test('should work with promise and async/await', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const received = await GameSavingLoader.load();
  expect(received).toEqual(expected);
});

test('Проверка работы GameSavingLoader с ошибкой', async () => {
  await expect(Promise.reject(new Error('error'))).rejects.toThrow('error');
});
