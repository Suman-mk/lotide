
export default 5;


export const firstName = "Lighthouse";
export const lastName = "Labs";


export default function() {
  return "developers, developers, developers!"; 
}



// index.js
import assertArrayEqual from './assertArrayEqual';
import assertEqual from './assertEqual';
import assertObjectsEqual from './assertObjectsEqual';
import countLetters from './countLetters';
import countOnly from './countOnly';
import eqArrays from './eqArrays';
import eqObjects from './eqObjects';
import findKey from './findKey';
import findKeyByValue from './findKeyByValue';
import flatten from './flatten';
import head from './head';
import letterPositions from './letterPositions';
import map from './map';
import middle from './middle';
import tail from './tail';
import takeUntil from './takeUntil';
import without from './without';

export default {
  assertArrayEqual, 
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without
};