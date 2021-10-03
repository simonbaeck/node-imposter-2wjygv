import {
  Config,
  createDungeon,
  createObjects,
  Dungeon,
  GameObject,
  GameTile,
} from './dungeonGenerator';

interface IDungeon {
  print(): void;
  getTileAt(x: number, y: number): GameTile | undefined;
  getObjectAt(x: number, y: number): GameObject | undefined;
  objects: GameObject[];
}

// new GameDungeon('ini2t2ialSeed', {
//   gridHeight: 50,
//   gridWidth: 50,
//   maxRooms: 9,
//   roomSizeRange: [5, 10],
// }).print();

console.log('███████████████████');
console.log('█ not implemented █');
console.log('███████████████████');
