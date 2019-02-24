/* eslint-disable key-spacing */
/* eslint-disable no-magic-numbers */
/**
 * Key is encounter result.
 * Value is dictionary, where:
 *    Key is 1k6 result
 *    Value is action result
 */

const ACTION_RESULTS = {
  A: {
    killSuccess: true,
    killWounds: 1,
    catchSuccess: true,
    catchWounds: 1
  },
  B: {
    killSuccess: true,
    killWounds: 2,
    catchSuccess: true,
    catchWounds: 4
  },
  C: {
    killSuccess: true,
    killWounds: 4,
    catchSuccess: true,
    catchWounds: 8
  },
  D: {
    killSuccess: true,
    killWounds: 8,
    catchSuccess: false,
    catchWounds: 8
  },
  E: {
    killSuccess: false,
    killWounds: 8,
    catchSuccess: false,
    catchWounds: 12
  }
};

const RESULT_SETS = {
  '-4': 'DDEEEE',
  '-2': 'CDDEEE',
  '-3': 'CDDEEE',
  '-1': 'CCDDEE',
  '0':  'BCCDDD',
  '1':  'BBCCDD',
  '2':  'ABBCCC',
  '3':  'ABBCCC',
  '4':  'AABBCC',
  '5':  'AABBCC',
  '6':  'AABBCC',
  '7':  'AAABBC',
  '8':  'AAABBC',
  '9':  'AAABBC',
  '10': 'AAABBC',
  '11': 'AAAABB'
};

const setDict = (dict, key, value) => Object.assign(dict, {
  [key]: value
});

Object.entries(RESULT_SETS).forEach(([key, value]) => {
  RESULT_SETS[key] = value.split('').reduce((obj, val, index) => setDict(obj, index + 1, ACTION_RESULTS[val]), {});
});

export default RESULT_SETS;
