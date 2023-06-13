import getHealthStatus from '../healthIndicator';

test.each([
  [{ name: 'Mage', health: 90 }, 'healthy'],
  [{ name: 'Warrior', health: 50 }, 'wounded'],
  [{ name: 'Rogue', health: 30 }, 'wounded'],
  [{ name: 'Paladin', health: 14 }, 'critical'],
  [{ name: 'Wizard', health: 5 }, 'critical'],
])('when character is %p returns %s', (character, expected) => {
  const result = getHealthStatus(character);
  expect(result).toBe(expected);
});
