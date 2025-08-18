#!/usr/bin/env node
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectPath = process.argv[2] || 'my-bodewell-app';
const templatePath = path.resolve(__dirname);

try {
  fs.copySync(templatePath, projectPath, {
    filter: (src) => !src.includes('node_modules') && !src.includes(projectPath) && !src.includes('index.js'),
  });
  console.log(`\nSuccess! Your new Bodewell app is ready at ./${projectPath}`);
  console.log('\nTo get started, run the following commands:');
  console.log(`  cd ${projectPath}`);
  console.log(`  pnpm install`);
  console.log(`  pnpm run dev\n`);
} catch (err) {
  console.error('Error creating the app:', err);
}