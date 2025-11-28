export interface UserData {
  id: string;
  name: string;
  email: string;
  role: 'user';
  chatHistory: { id: string; message: string; timestamp: string }[];
  usage: {
    tokensUsed: number;
    tokensLimit: number;
    queriesUsed: number;
    queriesLimit: number;
    plan: 'Free' | 'Pro' | 'Enterprise';
  };
}

export interface SuperAdminData {
  id: string;
  name: string;
  email: string;
  role: 'superadmin';
  globalStats: {
    totalRevenue: string;
    totalUsers: number;
    serverHealth: 'Healthy' | 'Degraded' | 'Down';
    activeSubscriptions: number;
  };
  revenueChart: { name: string; revenue: number }[];
  userGrowthChart: { name: string; users: number }[];
  systemLogs: { id: string; level: 'info' | 'warn' | 'error'; message: string; timestamp: string }[];
  
  // New Data Sections
  systemConfig: { id: string; setting: string; value: string; category: string }[];
  payments: { id: string; user: string; amount: string; status: 'Completed' | 'Pending' | 'Failed'; date: string }[];
  detailedGrowth: { name: string; active: number; churn: number }[];
  userManagement: { id: string; name: string; email: string; plan: string; status: 'Active' | 'Suspended' }[];
  systemStatuses: { component: string; status: 'Operational' | 'Degraded' | 'Outage'; uptime: string }[];
  reports: { id: string; title: string; type: string; date: string; status: 'Ready' | 'Generating' }[];
}

export const mockDatabase = {
  users: [
    {
      id: 'u1',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'user',
      chatHistory: [
        { id: 'm1', message: 'Hello, how can I help you?', timestamp: '2023-10-27T10:00:00Z' },
        { id: 'm2', message: 'I need help with my order.', timestamp: '2023-10-27T10:05:00Z' },
      ],
      usage: {
        tokensUsed: 15420,
        tokensLimit: 50000,
        queriesUsed: 45,
        queriesLimit: 100,
        plan: 'Free',
      },
    },
  ] as UserData[],
  superAdmins: [
    {
      id: 'sa1',
      name: 'Charlie Root',
      email: 'root@saas.com',
      role: 'superadmin',
      globalStats: {
        totalRevenue: '$1,250,000',
        totalUsers: 50000,
        serverHealth: 'Healthy',
        activeSubscriptions: 4800,
      },
      revenueChart: [
        { name: 'Jan', revenue: 4000 },
        { name: 'Feb', revenue: 3000 },
        { name: 'Mar', revenue: 2000 },
        { name: 'Apr', revenue: 2780 },
        { name: 'May', revenue: 1890 },
        { name: 'Jun', revenue: 2390 },
        { name: 'Jul', revenue: 3490 },
      ],
      userGrowthChart: [
        { name: 'Jan', users: 400 },
        { name: 'Feb', users: 800 },
        { name: 'Mar', users: 1400 },
        { name: 'Apr', users: 2000 },
        { name: 'May', users: 2800 },
        { name: 'Jun', users: 3800 },
        { name: 'Jul', users: 5000 },
      ],
      systemLogs: [
        { id: 'log1', level: 'info', message: 'Backup completed successfully', timestamp: '2023-10-27T02:00:00Z' },
        { id: 'log2', level: 'warn', message: 'High latency detected in region US-East', timestamp: '2023-10-27T04:30:00Z' },
      ],
      systemConfig: [
        { id: 'c1', setting: 'Max Tokens Per Request', value: '4096', category: 'AI Model' },
        { id: 'c2', setting: 'Default Model', value: 'GPT-4', category: 'AI Model' },
        { id: 'c3', setting: 'Maintenance Mode', value: 'Off', category: 'System' },
        { id: 'c4', setting: 'Allow New Signups', value: 'Yes', category: 'User' },
      ],
      payments: [
        { id: 'p1', user: 'Alice Johnson', amount: '$29.00', status: 'Completed', date: '2023-10-27' },
        { id: 'p2', user: 'Bob Smith', amount: '$99.00', status: 'Completed', date: '2023-10-26' },
        { id: 'p3', user: 'Charlie Brown', amount: '$29.00', status: 'Failed', date: '2023-10-25' },
      ],
      detailedGrowth: [
        { name: 'Jan', active: 380, churn: 20 },
        { name: 'Feb', active: 750, churn: 50 },
        { name: 'Mar', active: 1300, churn: 100 },
        { name: 'Apr', active: 1900, churn: 100 },
      ],
      userManagement: [
        { id: 'u1', name: 'Alice Johnson', email: 'alice@example.com', plan: 'Free', status: 'Active' },
        { id: 'u2', name: 'Bob Smith', email: 'bob@example.com', plan: 'Pro', status: 'Active' },
        { id: 'u3', name: 'Eve Wilson', email: 'eve@example.com', plan: 'Enterprise', status: 'Suspended' },
      ],
      systemStatuses: [
        { component: 'API Gateway', status: 'Operational', uptime: '99.99%' },
        { component: 'Database Cluster', status: 'Operational', uptime: '99.95%' },
        { component: 'Auth Service', status: 'Degraded', uptime: '98.50%' },
        { component: 'Storage', status: 'Operational', uptime: '99.99%' },
      ],
      reports: [
        { id: 'r1', title: 'Monthly Revenue Report', type: 'Financial', date: '2023-10-01', status: 'Ready' },
        { id: 'r2', title: 'User Engagement Q3', type: 'Analytics', date: '2023-10-01', status: 'Ready' },
        { id: 'r3', title: 'System Audit Log', type: 'Security', date: '2023-10-27', status: 'Generating' },
      ],
    },
  ] as SuperAdminData[],
};
