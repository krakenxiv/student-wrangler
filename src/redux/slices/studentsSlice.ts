import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import StudentsDataService from '../../api/studentsDataService';
import Student, { StudentsState } from '../../models/student';
import { arraySort } from '../../utilities/utilities';

// TODO fix typescript error

const initialState = {
  students: [],
  getAllStudentsStatus: 'idle',
  updateStudentStatus: 'idle',
  createStudentStatus: 'idle',
  deleteStudentStatus: 'idle',
  sortBy: 'name',
  orderByAsc: true,
  error: null,
} as StudentsState;

export const fetchAllStudents = createAsyncThunk(
  'students/fetchAllStudents',
  async (rejectWithValue) => {
    const response = await StudentsDataService.getAllStudents();

    try {
      return response.data;
    } catch (err) {
      //@ts-ignore
      if (!err.response) {
        throw err;
      }
      //@ts-ignore
      return rejectWithValue(err.response.data);
    }
  }
);

export const addNewStudent = createAsyncThunk(
  'students/addNewStudent',
  async (newStudent: Student, { rejectWithValue }) => {
    const response = await StudentsDataService.createStudent(newStudent);

    try {
      return response.data;
    } catch (err) {
      //@ts-ignore
      if (!err.response) {
        throw err;
      }
      //@ts-ignore
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateStudent = createAsyncThunk(
  'students/updateStudent',
  async (newStudent: Student, { rejectWithValue }) => {
    const response = await StudentsDataService.updateStudent(newStudent);

    try {
      return response.data;
    } catch (err) {
      //@ts-ignore
      if (!err.response) {
        throw err;
      }
      //@ts-ignore
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteStudent = createAsyncThunk(
  'students/deleteStudent',
  async (student: Student, { rejectWithValue }) => {
    const response = await StudentsDataService.deleteStudent(student);

    try {
      return response.data;
    } catch (err) {
      //@ts-ignore
      if (!err.response) {
        throw err;
      }
      //@ts-ignore
      return rejectWithValue(err.response.data);
    }
  }
);

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    updateSortOrder(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
      state.students = arraySort(
        state.students,
        state.sortBy,
        state.orderByAsc
      );
    },
    updateOrderByAsc(state, action: PayloadAction<boolean>) {
      state.orderByAsc = action.payload;
      state.students = arraySort(
        state.students,
        state.sortBy,
        state.orderByAsc
      );
    },
  },
  extraReducers: (builder) => {
    // fetch todos
    builder.addCase(fetchAllStudents.pending, (state, action) => {
      state.getAllStudentsStatus = 'loading';
    });
    builder.addCase(fetchAllStudents.fulfilled, (state, action) => {
      state.getAllStudentsStatus = 'succeeded';
      //   state.todos = arraySort(action.payload, state.sortBy, state.orderByAsc);
      state.students = action.payload;
      // state.todos = arraySort([], state.sortBy, state.orderByAsc);
    });
    builder.addCase(fetchAllStudents.rejected, (state, action) => {
      state.getAllStudentsStatus = 'failed';
      state.error = action.error.message;
    });
    // add new student
    builder.addCase(addNewStudent.pending, (state, action) => {
      state.createStudentStatus = 'loading';
    });
    builder.addCase(addNewStudent.fulfilled, (state, action) => {
      state.createStudentStatus = 'succeeded';
      console.log(action);
      console.log(action.type);
      state.students.push(action.payload);
      // state.students = arraySort(state.todos, state.sortBy, state.orderByAsc);
    });
    builder.addCase(addNewStudent.rejected, (state, action) => {
      state.createStudentStatus = 'failed';
      state.error = action.error.message;
    });
    // // update todo
    builder.addCase(updateStudent.pending, (state, action) => {
      state.updateStudentStatus = 'loading';
    });
    builder.addCase(updateStudent.fulfilled, (state, action) => {
      state.updateStudentStatus = 'succeeded';
      const index = state.students.findIndex(
        (students) => students.id === action.payload.id
      );
      state.students[index] = {
        ...state.students[index],
        ...action.payload,
      };
    });
    builder.addCase(updateStudent.rejected, (state, action) => {
      state.updateStudentStatus = 'failed';
      state.error = action.error.message;
    });
    // // delete todo
    builder.addCase(deleteStudent.pending, (state, action) => {
      state.deleteStudentStatus = 'loading';
    });
    builder.addCase(deleteStudent.fulfilled, (state, action) => {
      state.deleteStudentStatus = 'succeeded';
      state.students = state.students.filter(
        (students) => students.id !== action.payload.toString()
      );
    });
    builder.addCase(deleteStudent.rejected, (state, action) => {
      state.deleteStudentStatus = 'failed';
      state.error = action.error.message;
    });
  },
});

export default studentsSlice.reducer;
export const { updateSortOrder, updateOrderByAsc } = studentsSlice.actions;
export const selectAllTodos = (state: any) => state.students.students;
