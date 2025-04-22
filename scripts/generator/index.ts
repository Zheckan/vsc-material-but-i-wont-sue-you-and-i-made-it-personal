import * as fs from 'fs-extra';
import * as path from 'path';

import {generateTheme} from '@moxer/vscode-theme-generator';
import {ThemeSetting} from './types';
import {getColorSet} from './color-set';
import {BUILD_FOLDER_PATH} from '../../src/env';

const THEME_BUILD_PATH = path.join(BUILD_FOLDER_PATH, 'themes');
const baseThemes = ['default', 'darker', 'lighter', 'ocean', 'palenight', 'deepforest'];
const extraThemes = ['darker-nordic'];
const withHC = baseThemes.reduce((acc, src) => {
  acc = acc.concat(`${src}-hc`);
  return acc;
}, baseThemes);
const allThemes = withHC.concat(extraThemes);

const themeModules = allThemes.map(async theme => import(`./settings/specific/${theme}`).then(res => res.default));

const generate = async (): Promise<void> => {
  await fs.mkdirp(THEME_BUILD_PATH);
  const modules = await Promise.all(themeModules) as ThemeSetting[];
  modules.forEach(theme => {
    const colorSet = { ...getColorSet(theme), type: theme.type as 'dark' | 'light' };
    generateTheme(theme.name, colorSet, path.join(THEME_BUILD_PATH, `${theme.name}.json`));
    if (theme.tokenColors) {
      const filePath = path.join(THEME_BUILD_PATH, `${theme.name}.json`);
      const json = fs.readJsonSync(filePath);
      json.tokenColors = theme.tokenColors;
      fs.writeJsonSync(filePath, json, { spaces: 2 });
    }
  });
};

const run = async (): Promise<void> => {
  try {
    await generate();
  } catch (error) {
    console.error('ERROR build:generate-themes', error);
    process.exit(1);
  }
};

void run();
