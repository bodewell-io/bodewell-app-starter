import React, { useState } from 'react';
import { 
  Button, 
  useTheme, 
  Card, 
  DataTable,
  Select,
  Tabs,
  TabPanel,
  Modal,
  BarChart,
  ToggleSwitch,
  Checkbox,
  Badge,
  Accordion,
  AccordionItem,
  useToast,
  ChartWithTable, // <-- Import ChartWithTable
  ComboBox,      // <-- New
  MultiSelect,   // <-- New
  Menu,          // <-- New
  MenuItem,      // <-- New
   Input,         // <-- New
  SearchInput,   // <-- New
  Textarea,      // <-- New
  type ThemeName,
  type MultiSelectOption // <-- New
} from '@bodewell/ui';
import type { ColDef } from '@bodewell/ui';

// Mock Data
const rowData = [ { id: 'A1', name: 'Project Apollo', status: 'In Progress', priority: 'High' }, { id: 'B2', name: 'Project Gemini', status: 'Complete', priority: 'Medium' }, { id: 'C3', name: 'Project Mercury', status: 'On Hold', priority: 'Low' } ];
const colDefs: ColDef[] = [ { field: 'id', headerName: 'ID', width: 90 }, { field: 'name', headerName: 'Project Name', flex: 1 }, { field: 'status', headerName: 'Status' }, { field: 'priority', headerName: 'Priority' } ];
const selectOptions = [ { value: 'high', label: 'High Priority' }, { value: 'medium', label: 'Medium Priority' }, { value: 'low', label: 'Low Priority' } ];
const chartData = [ { name: 'Q1', revenue: 4000 }, { name: 'Q2', revenue: 3000 }, { name: 'Q3', revenue: 6000 }, { name: 'Q4', revenue: 8000 } ];

// Table Headers for the ChartWithTable component
const tableHeaders = [
  { key: 'name', label: 'Quarter' },
  { key: 'revenue', label: 'Revenue ($)' }
];

function App() {
  const { theme, setTheme } = useTheme();
  const { addToast } = useToast();
  const [selectedValue, setSelectedValue] = useState<string | number>('medium');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isToggled, setIsToggled] = useState(true);
   const [multiSelectValue, setMultiSelectValue] = useState<MultiSelectOption[] | null>(null);
  const [comboBoxValue, setComboBoxValue] = useState<string | number | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');


  const toggleTheme = () => {
    const themes: ThemeName[] = ['light', 'dark', 'corporate', 'midnight', 'blueprint'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <div className="bg-background text-foreground min-h-screen p-8 flex flex-col items-center justify-center space-y-8">
      
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Bodewell UI</h1>
        <p className="mb-6">You are currently using the <span className="font-bold text-primary">{theme}</span> theme.</p>
        <Button onClick={toggleTheme} size="lg">Toggle Theme</Button>
      </div>

      {/* --- ChartWithTable Test Card --- */}
      <Card className="w-full max-w-4xl p-6">
        <ChartWithTable title="Quarterly Revenue" data={chartData} tableHeaders={tableHeaders}>
          <BarChart 
            data={chartData} 
            dataKeyX="name" 
            barKeys={[{ key: 'revenue', color: 'var(--app-primary-color)' }]} 
          />
        </ChartWithTable>
      </Card>

      {/* --- ADDED THIS NEW CARD --- */}
      <Card className="w-full max-w-4xl p-6">
  <div className="space-y-4">
    <h2 className="text-xl font-semibold">Advanced Selects & Menus</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
      <div>
        <label className="block text-sm font-medium mb-1">ComboBox</label>
        <ComboBox 
          options={selectOptions} 
          value={comboBoxValue} 
          onOptionSelect={(value, _label) => setComboBoxValue(value)} // <-- CORRECTED
          placeholder="Type or select..." 
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">MultiSelect</label>
        <MultiSelect 
          options={selectOptions} 
          value={multiSelectValue} 
          onChange={(newValue) => setMultiSelectValue(newValue)} // <-- CORRECTED
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Menu</label>
        <Menu trigger={<Button variant="outline">Open Menu</Button>}>
          <MenuItem onClick={() => addToast('Profile clicked')}>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  </div>
</Card>

{/* --- Text Input Test Card --- */}
      <Card className="w-full max-w-4xl p-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Text Input Tests ⌨️</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input label="Standard Input" placeholder="Enter your name..." />
            </div>
            <div>
              <SearchInput 
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <Textarea 
                label="Text Area"
                placeholder="Enter a description..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
              />
            </div>
          </div>
        </div>
      </Card>
      
      {/* --- Other Test Cards --- */}
      <Card className="w-full max-w-4xl p-6">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Complex Component Tests 🧪</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Select Component</label>
              <Select options={selectOptions} value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tabs Component</label>
              <Tabs>
                <TabPanel id="tab1" label="Tab 1"><p className="p-4">Tab 1 Content</p></TabPanel>
                <TabPanel id="tab2" label="Tab 2"><p className="p-4">Tab 2 Content</p></TabPanel>
              </Tabs>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">DataTable (AG Grid)</label>
            <div style={{ height: '250px' }}><DataTable rowData={rowData} columnDefs={colDefs} height="100%" /></div>
          </div>
        </div>
      </Card>
      <Card className="w-full max-w-4xl p-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Final Test Suite</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" onClick={() => addToast('This is a test notification!')}>Show Toast</Button>
            <ToggleSwitch label="Toggle Me" checked={isToggled} onChange={setIsToggled} />
            <Checkbox label="Check Me" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
            <Badge variant="secondary">Badge Test</Badge>
          </div>
          <Accordion>
            <AccordionItem id="a1" header="Accordion Item 1"><p className="p-4">Collapsible content 1.</p></AccordionItem>
            <AccordionItem id="a2" header="Accordion Item 2"><p className="p-4">Collapsible content 2.</p></AccordionItem>
          </Accordion>
        </div>
      </Card>
      
      <Modal title="Modal Test" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} footer={<Button onClick={() => setIsModalOpen(false)}>Close</Button>}>
        <p>This is a modal dialog.</p>
        <Button className="mt-4" onClick={() => { addToast('Action complete!', 'success'); setIsModalOpen(false); }}>Perform Action</Button>
      </Modal>
    </div>
  );
}

export default App;