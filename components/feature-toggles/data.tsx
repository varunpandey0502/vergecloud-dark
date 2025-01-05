import {
  BarChart3Icon,
  Target,
  ArrowUpCircle,
  ClipboardList,
  Bell,
  Calculator,
  MessageSquare,
  Repeat,
  BrainCircuit,
  FileSpreadsheet,
  Users,
  LineChart,
  BarChartBigIcon,
} from "lucide-react";

const GoalManagementComponent = () => {
  return (
    <img
      src="/images/features/goal-management.png"
      alt="Goal Management"
      className="h-full w-full object-contain rounded-2xl"
    />
  );
};

const PerformanceReviewComponent = () => {
  return (
    <img
      src="/images/features/performance-review.png"
      alt="Performance Review"
      className="h-full w-full object-cover rounded-2xl"
    />
  );
};

const CheckInsComponent = () => {
  return (
    <img
      src="/images/features/check-ins.png"
      alt="Check-ins"
      className="h-full w-full object-cover rounded-2xl"
    />
  );
};

const EmployeeEngagementComponent = () => {
  return (
    <img
      src="/images/features/employee-engagement.png"
      alt="Employee Engagement"
      className="h-full w-full object-cover rounded-2xl"
    />
  );
};

export const data = [
  {
    id: 1,
    title: "Goal Management",
    Component: GoalManagementComponent,
    cardTitle: "Align your people with business goals",
    cardSubtitle: [
      {
        icon: <Target className="text-accent h-8 w-8" />,
        title: "Align and track strategic priorities effortlessly.",
      },
      {
        icon: <ArrowUpCircle className="text-accent h-10 w-10" />,
        title: "Adapt to any framework like OKR, MBO, BSC, KRA & more.",
      },
      {
        icon: <BarChartBigIcon className="text-accent h-10 w-10" />,
        title:
          "Streamline goal execution and enhance team alignment & productivity.",
      },
    ],
    cta: "Book a Demo",
  },
  {
    id: 2,
    title: "Performance Review",
    Component: PerformanceReviewComponent,
    cardTitle: "Drive high-quality performance conversations",
    cardSubtitle: [
      {
        icon: <ClipboardList className="text-accent h-10 w-10" />,
        title: "Use expert-built templates and 50+ configurable workflows.",
      },
      {
        icon: <Bell className="text-accent h-10 w-10" />,
        title:
          "Get notifications and reminders for the status of assigned tasks.",
      },
      {
        icon: <Calculator className="text-accent h-10 w-10" />,
        title: "Automated rating calculation and one-click window for manager.",
      },
    ],
    cta: "Book a Demo",
  },
  {
    id: 3,
    title: "Check-ins and 1:1s",
    Component: CheckInsComponent,
    cardTitle: "Make 1:1s meaningful and actionable",
    cardSubtitle: [
      {
        icon: <MessageSquare className="text-accent h-8 w-8" />,
        title: "Facilitate collaborative and private agendas.",
      },
      {
        icon: <Repeat className="text-accent h-10 w-10" />,
        title: "Support continuous feedback and track actionable items.",
      },
      {
        icon: <BrainCircuit className="text-accent h-10 w-10" />,
        title:
          "Auto-suggest talking points to managers to make 1:1's effective.",
      },
    ],
    cta: "Book a Demo",
  },
  {
    id: 4,
    title: "Employee Engagement",
    Component: EmployeeEngagementComponent,
    cardTitle: "Drive impact with employee engagement surveys",
    cardSubtitle: [
      {
        icon: <FileSpreadsheet className="text-accent h-10 w-10" />,
        title:
          "Ready-to-use survey templates to collect feedback with 90% less work.",
      },
      {
        icon: <Users className="text-accent h-10 w-10" />,
        title:
          "100% adoption with recurring pulse surveys and automated reminders.",
      },
      {
        icon: <LineChart className="text-accent h-10 w-10" />,
        title:
          "Get real-time insights on employee satisfaction and productivity.",
      },
    ],
    cta: "Book a Demo",
  },
];
