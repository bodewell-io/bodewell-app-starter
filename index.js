#!/usr/bin/env node
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This now reads the project name from the command line arguments
const projectPath = process.argv[2];

// This is the new, crucial validation step
if (!projectPath) {
  console.error('Error: Please specify the project directory.');
  console.log('  For example:');
  console.log('    npm create bodewell-app@latest my-new-project');
  process.exit(1);
}

const templatePath = path.resolve(__dirname, 'template');

try {
  // Use the validated projectPath to create the new directory
  fs.copySync(templatePath, projectPath);

  console.log(`\nSuccess! Your new Bodewell app is ready at ./${projectPath}`);
  console.log('\nTo get started:');
  console.log(`  cd ${projectPath}`);
  console.log(`  pnpm install`);
  console.log(`  pnpm run dev\n`);
} catch (err) {
  console.error('\nError creating the app:', err);
}