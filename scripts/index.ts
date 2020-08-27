import fs from 'fs';
import path from 'path';
import { intervals, getScale } from './scales';

const OUT_DIR = '../../src/tokens';
const toRem = (target, base) => `${target / base}`;

const generateScale = (intervalName) => {
  const base = 16;
  const interval = intervals.find(i => i.name === intervalName);
  const scale = getScale(-4, 11, base, interval);
  const scaleRem = scale.map(val => toRem(val, base));
  const res = {
    px: {},
    rem: {},
    interval
  };
  scale.forEach((space, i) => {
    res.px[i] = `${space}px`;
  })
  scaleRem.forEach((space, i) => {
    res.rem[i] = `${space}rem`;
  })
  return res;
}

function writeToJson(data) {
  writeFile('tokens.json', JSON.stringify(data, null, 2));
}

function writeToCSS(data) {
  const vars = [
    convertToCSSVar('f-size', data.fontSizes.rem),
    convertToCSSVar('space', data.spaces.rem)
  ].join('\n\t');

  const classes = generateCssUtilityClasses(data);

  const output =
`/* This is a generated file - do not edit */
:root {
  ${vars}

  ${classes}
}
`;
  writeFile('tokens.css', output);
}

function convertToCSSVar(prefix, scale) {
  const res = [];
  for (let key in scale) {
    res.push(`--${prefix}-${key}: ${scale[key]};`);
  }
  return res.join('\n\t');
}

function generateCssUtilityClasses (data) {
  const spaceUtils = transformClasses(
    'space',
    data.spaces.rem,
    {
      'm': ['margin'],
      'mt': ['margin-top'],
      'mr': ['margin-right'],
      'mb': ['margin-bottom'],
      'ml': ['margin-left'],
      'mx': ['margin-left', 'margin-right'],
      'my': ['margin-top', 'margin-bottom'],
      'p': ['padding'],
      'pt': ['padding-top'],
      'pr': ['padding-right'],
      'pb': ['padding-bottom'],
      'pl': ['padding-left'],
      'px': ['padding-left', 'padding-right'],
      'py': ['padding-top', 'padding-bottom'],
    }
  )

  return [
    spaceUtils
  ].join('\n');
}

function transformClasses(varPrefix, scale, classes) {
  let output = [];
  for (let step in scale) {
    for (let klass in classes) {
      output.push(`.${klass}-${step} {`)
      output.push(classes[klass].map(attr =>
        `\t${attr}: var(--${varPrefix}-${step});`).join('\n\t')
      )
      output.push(`}`)
    }
  }
  return output.join('\n\t');
}

function writeFile (name, data) {
  try {
    fs.writeFileSync(path.join(__dirname, OUT_DIR, name), data);
  } catch (err) {
    console.error(err)
  }
}

function run () {
  const tokenData = {
    spaces: generateScale('major3rd'),
    fontSizes: generateScale('major2nd'),
  };
  writeToCSS(tokenData);
  writeToJson(tokenData);
}
run();