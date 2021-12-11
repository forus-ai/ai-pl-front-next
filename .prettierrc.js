const fs = require('fs');

const rootPath = './';
const rootDirs = fs
  .readdirSync(rootPath, { withFileTypes: true })
  .filter((dir) => dir.isDirectory())
  .map((dir) => dir.name)
  .join('|');

module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 80,
  importOrder: [
    '^((?!/).)*$',
    '^@.*$',
    '^components/(.*)$',
    '^[./]',
    `^(${rootDirs}).*`,
    '.*',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
