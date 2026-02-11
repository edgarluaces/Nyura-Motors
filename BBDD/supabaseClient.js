import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mwxfoiglrdvxmjpfpedp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13eGZvaWdscmR2eG1qcGZwZWRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMTY3NjMsImV4cCI6MjA4NTc5Mjc2M30.PshDX7mDZ2FY5_PMGRHiyAwJLHPF73s_XGYYzL_oUo0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
