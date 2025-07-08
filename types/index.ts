export interface Group {
  id: string
  name: string
  description: string | null
  created_by: string
  created_at: string
}

export interface Expense {
  id: string
  group_id: string
  title: string
  amount: number
  paid_by: string
  created_at: string
}

export interface User {
  id: string
  email: string
}

export interface CreateGroupData {
  name: string
  description?: string
}

export interface CreateExpenseData {
  group_id: string
  title: string
  amount: number
} 