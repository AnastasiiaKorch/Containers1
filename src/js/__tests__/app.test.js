import Team from '../app';

test('Объект добавлен в команду', () => {
  const newTeam = new Team();
  newTeam.add('Лучник');
  expect(newTeam.toArray()).toEqual(['Лучник'])
});

test('Объект уже в команде', () => {
  const newTeam = new Team();
  newTeam.add('Лучник');
  expect(() => newTeam.add('Лучник')).toThrow('Объект уже в команде')
});

test('Объекты добавлены в команду', () => {
  const newTeam = new Team();
  newTeam.addAll('Лучник','Мечник','Зомби');
  expect(newTeam.toArray()).toEqual(['Лучник','Мечник','Зомби'])
});
