export default interface Student {
  id?: string | null | undefined;
  first_name: string;
  last_name: string;
  email?: string;
  date_started: string;
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
