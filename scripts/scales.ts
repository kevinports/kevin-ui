export const intervals: any = [
  {
    name: 'octave',
    proportion: '1:2',
    ratio: 2
  },
  {
    name: 'major7th',
    proportion: '8:15',
    ratio: 1.875
  },
  {
    name: 'minor7th',
    proportion: '9:16',
    ratio: 1.778
  },
  {
    name: 'major6th',
    proportion: '3:5',
    ratio: 1.667
  },
  {
    name: 'minor6th',
    proportion: '5:8',
    ratio: 1.6
  },
  {
    name: '5th',
    proportion: '2:3',
    ratio: 1.5
  },
  {
    name: 'aug4th / dim5th',
    proportion: '3:4',
    ratio: 1.414
  },
  {
    name: '4th',
    proportion: '4:5',
    ratio: 1.333
  },
  {
    name: 'major3rd',
    proportion: '4:5',
    ratio: 1.25
  },
  {
    name: 'minor3rd',
    proportion: '5:6',
    ratio: 1.2
  },
  {
    name: 'major2nd',
    proportion: '8:9',
    ratio: 1.125
  },
  {
    name: 'minor2nd',
    proportion: '15:16',
    ratio: 1.067
  },
  {
    name: 'unison',
    proportion: '1:1',
    ratio: 1
  },
  {
    name: 'goldenSection',
    proportion: '1:ϕ',
    ratio: 1.61803
  }
];


export const getStep = function(step, base, ratio){
  const internalStep = base * Math.pow(ratio, step);
  return round(internalStep, 0);
}

export const getScale = function(minStep, maxStep, base, interval){
  let i = minStep;
  let set = [];
  while (i <= maxStep) {
    set.push(getStep(i, base, interval.ratio));
    i++;
  }
  return set;
}

function round(value, decimals) {
  return Number(Math.round(parseFloat(value+'e'+decimals))+'e-'+decimals);
}