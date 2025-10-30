// Types pour l'application

export interface Resident {
  id: number;
  name: string;
  apartment: string;
  phone: string;
  email: string;
  status: "active" | "inactive";
  balance: number;
  joinDate?: string;
}

export interface Payment {
  id: number;
  residentId: number;
  residentName: string;
  apartment: string;
  amount: number;
  type: string;
  status: "paid" | "pending" | "overdue";
  date: string;
  dueDate?: string;
  paymentMethod?: string;
}

export interface MaintenanceRequest {
  id: number;
  title: string;
  description: string;
  residentId: number;
  residentName: string;
  apartment: string;
  category: "plumbing" | "electrical" | "hvac" | "other";
  priority: "low" | "medium" | "high" | "urgent";
  status: "open" | "in_progress" | "resolved";
  createdAt: string;
  updatedAt?: string;
  assignedTo?: string;
  resolvedAt?: string;
  photos?: string[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "manager" | "resident";
  residenceId: number;
}

export interface Residence {
  id: number;
  name: string;
  address: string;
  totalApartments: number;
  occupancyRate: number;
  managerId: number;
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  type: "info" | "warning" | "success" | "error";
  read: boolean;
  createdAt: string;
  userId: number;
}
