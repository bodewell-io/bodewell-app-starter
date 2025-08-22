import React from 'react';
import {
  BarChart,
  LineChart,
  Card,
  PageHeader,
  StatCard,
  DataTable,
  useDataFetch,
  type ColDef,
} from '@bodewell/ui';
import { mockTableData, mockChartData } from '../data/mockData';

const Dashboard: React.FC = () => {
  // This hook is a placeholder for a real data fetch.
  const { data: fetchedTableData } = useDataFetch(null, mockTableData);

  const columnDefs: ColDef[] = [
    { field: 'make', headerName: 'Make', sortable: true, filter: true },
    { field: 'model', headerName: 'Model', sortable: true, filter: true },
    { field: 'price', headerName: 'Price', valueFormatter: p => '$' + p.value.toLocaleString() },
    { field: 'electric', headerName: 'Electric', cellRenderer: (params: any) => params.value ? '⚡' : '⛽' }
  ];

  return (
    // The outer padding has been removed, as it's now handled by DefaultLayout.
    // The space-y-8 class remains to control the vertical spacing of content.
    <div className="space-y-8">
      <PageHeader
        title="Dashboard Overview"
        description="A summary of key metrics and recent activity."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="1,234"
          icon="users"
          changeText="+10% from last month"
          changeDirection="positive"
        />
        <StatCard
          title="Sales Today"
          value="$5,678"
          icon="dollar-sign"
          changeText="+5% from yesterday"
          changeDirection="positive"
        />
        <StatCard
          title="New Orders"
          value="89"
          icon="shopping-cart"
          changeText="-2 since last hour"
          changeDirection="negative"
        />
        <StatCard
          title="Active Projects"
          value="12"
          icon="briefcase" // Corrected from `briefcase` to an actual icon if needed
          footerText="3 nearing completion"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart
          title="Monthly Revenue"
          data={mockChartData}
          dataKeyX="name"
          barKeys={[
            { key: 'pv', color: 'var(--app-primary-color)' },
            { key: 'uv', color: 'var(--app-secondary-color)' },
          ]}
        />
        <LineChart
          title="User Growth"
          data={mockChartData}
          dataKeyX="name"
          lineKeys={[
            { key: 'uv', color: 'var(--app-accent-color)' },
            { key: 'pv', color: 'var(--app-primary-color)' },
          ]}
        />
      </div>

      <Card className="p-6">
        <h3 className="text-2xl font-semibold mb-4 text-text">Recent Vehicle Data</h3>
        {fetchedTableData && (
          <DataTable
            rowData={fetchedTableData}
            columnDefs={columnDefs}
            height="400px"
          />
        )}
      </Card>
    </div>
  );
};

export default Dashboard;