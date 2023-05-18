import Student from '../models/student';

export const timestampToDateConvert = (timestampToConvert: number): string => {
  const convertedDate = new Date(timestampToConvert);
  return convertedDate.toLocaleString();
};

export const arraySort = (
  arrayToSort: Student[],
  sortBy: string,
  orderByAsc: boolean
) => {
  let sortedArray = [...arrayToSort];
  if (sortBy === 'first_name' || sortBy === 'last_name' || 'email') {
    return sortByString(sortedArray, sortBy, orderByAsc);
  } else {
    return sortNumerically(sortedArray, sortBy, orderByAsc);
  }
};

const sortByString = (
  arrayToSort: Student[],
  sortBy: string,
  orderByAsc: boolean
) => {
  let sortedArray = [...arrayToSort];
  sortedArray.sort((student1, student2) => {
    let valueCompare1 = student1.first_name.toLowerCase();
    let valueCompare2 = student2.first_name.toLowerCase();
    if (sortBy === 'last_name') {
      valueCompare1 = student1.last_name.toLowerCase();
      valueCompare2 = student2.last_name.toLowerCase();
    }
    if (sortBy === 'email') {
      let updatedEmail1 = student1.email ? student1.email : '';
      let updatedEmail2 = student2.email ? student2.email : '';
      if (student1.email && student2.email) {
        valueCompare1 = updatedEmail1.toLowerCase();
        valueCompare2 = updatedEmail2.toLowerCase();
      }
    }
    if (valueCompare1 < valueCompare2) {
      return orderByAsc ? -1 : 1;
    }
    if (valueCompare1 > valueCompare2) {
      return orderByAsc ? 1 : -1;
    }
    return 0;
  });
  return sortedArray;
};

const sortNumerically = (
  arrayToSort: any[],
  sortBy: string,
  orderByAsc: boolean
) => {
  let sortedArray = [...arrayToSort];
  if (sortBy === 'id') {
    sortedArray.sort((student1, student2) => {
      return orderByAsc ? student1.id - student2.id : student2.id - student1.id;
    });
  } else if (sortBy === 'completed') {
    sortedArray.sort((student1, student2) => {
      return orderByAsc
        ? student1.completed - student2.completed
        : student2.completed - student1.completed;
    });
  }
  return sortedArray;
};
