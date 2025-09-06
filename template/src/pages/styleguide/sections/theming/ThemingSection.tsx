import React, { useState, useEffect } from 'react';
import { PageHeader, Card, CodeBlock, Alert, useTheme } from '@bodewell/ui';

// --- HELPER COMPONENTS & DATA ---

interface ColorInfo {
  name: string;
  variable: string;
  category: 'Brand' | 'UI' | 'Text & Borders' | 'Form Controls' | 'Component Styles';
  description: string;
}

const colorPaletteData: ColorInfo[] = [
  // --- BRAND ---
  { name: 'Primary Action', variable: '--app-primary-color', category: 'Brand', description: 'Main interactive elements.' },
  { name: 'Primary Content', variable: '--app-primary-foreground-color', category: 'Brand', description: 'Text on primary backgrounds.' },
  { name: 'Secondary Action', variable: '--app-secondary-color', category: 'Brand', description: 'Secondary interactive elements.' },
  { name: 'Secondary Content', variable: '--app-secondary-foreground-color', category: 'Brand', description: 'Text on secondary backgrounds.' },
  { name: 'Accent', variable: '--app-accent-color', category: 'Brand', description: 'For highlighting special actions.' },
  { name: 'Accent Content', variable: '--app-accent-foreground-color', category: 'Brand', description: 'Text on accent backgrounds.' },
  { name: 'Danger / Destructive', variable: '--app-danger-color', category: 'Brand', description: 'Destructive actions, errors.' },
  { name: 'Danger Content', variable: '--app-danger-foreground-color', category: 'Brand', description: 'Text on danger backgrounds.' },

  // --- UI ---
  { name: 'Page Background', variable: '--app-bg-color', category: 'UI', description: 'The main background for pages.' },
  { name: 'Card Background', variable: '--app-card-bg-color', category: 'UI', description: 'Background for card-like elements.' },
  
  // --- TEXT & BORDERS ---
  { name: 'Default Text', variable: '--app-text-color', category: 'Text & Borders', description: 'Primary text color.' },
  { name: 'Border', variable: '--app-border-color', category: 'Text & Borders', description: 'Default border color.' },
  
  // --- FORM CONTROLS ---
  { name: 'Input Background', variable: '--app-input-bg-color', category: 'Form Controls', description: 'Background for text inputs.' },
  { name: 'Input Text', variable: '--app-input-text-color', category: 'Form Controls', description: 'Text color inside inputs.' },
  { name: 'Input Border', variable: '--app-input-border-color', category: 'Form Controls', description: 'Default border for inputs.' },
  { name: 'Input Focus Ring', variable: '--app-input-focus-ring-color', category: 'Form Controls', description: 'Focus outline color.' },
  { name: 'Input Placeholder', variable: '--app-input-placeholder-color', category: 'Form Controls', description: 'Placeholder text color.' },

  // --- COMPONENT STYLES ---
  { name: 'Table Header BG', variable: '--app-table-header-bg', category: 'Component Styles', description: 'Background for table headers.' },
  { name: 'Table Header Text', variable: '--app-table-header-text', category: 'Component Styles', description: 'Text in table headers.' },
  { name: 'Table Row Hover BG', variable: '--app-table-row-hover-bg', category: 'Component Styles', description: 'Hovered row background.' },
  { name: 'Chart Grid Color', variable: '--app-chart-grid-color', category: 'Component Styles', description: 'Grid lines in charts.' },
];

const ColorSwatch: React.FC<{ color: ColorInfo; value: string }> = ({ color, value }) => {
  if (!value) {
    return (
      <div className="border border-border rounded-md overflow-hidden">
        <div className="h-24 bg-muted animate-pulse"></div>
        <div className="p-3 text-sm">
            <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-muted rounded w-full"></div>
        </div>
      </div>
    );
  }

  const [r, g, b] = value.split(' ').map(Number);
  const hex = `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
  const isDark = (r * 299 + g * 587 + b * 114) / 1000 < 128;

  return (
    <div className="border border-border rounded-md overflow-hidden">
      <div className="h-24" style={{ backgroundColor: `rgb(${value})` }}></div>
      <div className="p-3 text-sm">
        <p className={`font-bold ${isDark ? 'text-white' : 'text-foreground'}`} style={{color: `rgb(${value})`}}>
            {color.name}
        </p>
        <p className="text-muted-foreground text-xs">{color.description}</p>
        <div className="mt-2 text-xs font-mono bg-muted p-1 rounded-sm">
          <p>var({color.variable})</p>
          <p>rgb({value})</p>
          <p>{hex.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

const ColorPalette: React.FC<{ colors: ColorInfo[] }> = ({ colors }) => {
    const { theme } = useTheme();
    const [colorValues, setColorValues] = useState<Record<string, string>>({});
  
    useEffect(() => {
      const computedStyle = getComputedStyle(document.documentElement);
      const newValues: Record<string, string> = {};
      colors.forEach(color => {
        newValues[color.variable] = computedStyle.getPropertyValue(color.variable).trim();
      });
      setColorValues(newValues);
    }, [theme, colors]);

    const groupedColors = colors.reduce((acc, color) => {
        (acc[color.category] = acc[color.category] || []).push(color);
        return acc;
    }, {} as Record<string, ColorInfo[]>);
  
    return (
      <div className="space-y-6">
        {Object.entries(groupedColors).map(([category, colorsInCategory]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-2">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {colorsInCategory.map(color => (
                <ColorSwatch key={color.variable} color={color} value={colorValues[color.variable] || ''} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
};

// --- ADD THIS BACK: CSS Variables for the Code Block ---
const themeCssVariables = `
:root, .light {
  /* Brand */
  --app-font-sans: 'Inter', sans-serif;
  --app-primary-color: 13 110 253;
  /* ... etc. */
}
`;

// --- MAIN THEME GUIDE COMPONENT ---
export const ThemingSection: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Theming System v2.0"
        description="A guide to understanding and customizing the complete visual identity of your Bodewell application."
      />

      <Card className="mb-6 p-6">
        <h2 className="text-xl font-bold mb-2">How It Works</h2>
        <p className="mb-4">
          The Bodewell V2 Theming System is a holistic visual identity framework built on CSS Custom Properties (Variables). It allows you to control typography, colors, shape, and even component-specific styles from a single CSS file.
        </p>
      </Card>

      <Card className="mb-6 p-6">
        <h2 className="text-xl font-bold mb-2">Live Color Palette</h2>
        <p className="text-muted-foreground mb-4">
            The swatches below are rendered using the live CSS variables from the currently active theme. Use the theme switcher in the header to see them update in real time.
        </p>
        <ColorPalette colors={colorPaletteData} />
      </Card>

      {/* --- ADD THIS NEW CARD FOR THE CODE BLOCK --- */}
      <Card className="mb-6 p-6">
        <h2 className="text-xl font-bold mb-2">Core Theme Variables</h2>
        <p className="mb-4">
          To create a new theme, create a new CSS class (e.g., `.my-cool-theme`) and define values for the core set of CSS variables.
        </p>
        <Alert variant="info" title="Important Note on Color Format" className="mb-4">
          All color variables must be defined as three space-separated numbers representing the R G B values (e.g., `255 255 255` for white). This is required for Tailwind's opacity modifiers (like `bg-primary/50`) to work correctly.
        </Alert>
        <CodeBlock language="css" code={themeCssVariables} />
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-bold mb-2">How to Add a New Theme</h2>
        <ol className="list-decimal pl-5 space-y-4">
            <li>
                <h3 className="font-bold">Step 1: Define Your Theme in CSS</h3>
                <p>In `src/index.css`, add a new CSS class for your theme. Populate it with your desired values for the theme variables.</p>
            </li>
            <li>
                <h3 className="font-bold">Step 2: Register the Theme</h3>
                <p>Open `src/contexts/ThemeContext.tsx` in `@bodewell/ui` and add your new theme's class name to the `ThemeName` type and the `availableThemes` array.</p>
            </li>
            <li>
                <h3 className="font-bold">Step 3: Test your Theme</h3>
                <p>Use the theme switcher in the header of this starter kit to select your new theme and see the changes applied instantly.</p>
            </li>
        </ol>
      </Card>
    </div>
  );
};