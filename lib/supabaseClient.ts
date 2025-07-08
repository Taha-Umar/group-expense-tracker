import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder_key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      groups: {
        Row: {
          id: string
          name: string
          description: string | null
          created_by: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          created_by: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          created_by?: string
          created_at?: string
        }
      }
      expenses: {
        Row: {
          id: string
          group_id: string
          title: string
          amount: number
          paid_by: string
          created_at: string
        }
        Insert: {
          id?: string
          group_id: string
          title: string
          amount: number
          paid_by: string
          created_at?: string
        }
        Update: {
          id?: string
          group_id?: string
          title?: string
          amount?: number
          paid_by?: string
          created_at?: string
        }
      }
    }
  }
} 