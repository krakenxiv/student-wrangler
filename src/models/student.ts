export default interface Student {
  id?: string | null | undefined;
  first_name: string;
  last_name: string;
  email?: string;
  date_started: string;
  active: boolean;
  phone_1?: string;
  phone_2?: string;
  phone_1_label?: string;
  phone_2_label?: string;
  financial_status?: string;
  lesson_length?: string;
  current_rate?: string;
  active_songs?: string;
  additional_notes?: string;
}

export interface StudentsState {
  students: Student[];
  getAllStudentsStatus: string;
  updateStudentStatus: string;
  createStudentStatus: string;
  deleteStudentStatus: string;
  sortBy: string;
  orderByAsc: boolean;
  error: any;
}
