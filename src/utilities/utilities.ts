import dayjs from 'dayjs';
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
  if (sortBy === 'first_name' || sortBy === 'last_name') {
    return sortByString(sortedArray, sortBy, orderByAsc);
  } else if (sortBy === 'active_first_name' || sortBy === 'active_last_name') {
    return sortByActive(sortedArray, sortBy, orderByAsc);
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

const sortByActive = (
  arrayToSort: Student[],
  sortBy: string,
  orderByAsc: boolean
) => {
  let sortedArray = [...arrayToSort];

  sortedArray.sort((student1, student2) => {
    let valueCompare1 = Number(student1.active);
    let valueCompare2 = Number(student2.active);
    let valueCompare3 = student1.first_name.toLowerCase();
    let valueCompare4 = student2.first_name.toLowerCase();
    if (sortBy === 'active_last_name') {
      valueCompare3 = student1.last_name.toLowerCase();
      valueCompare4 = student2.last_name.toLowerCase();
    }
    if (orderByAsc === true) {
      return (
        valueCompare2 - valueCompare1 ||
        valueCompare3.localeCompare(valueCompare4)
      );
    } else {
      return (
        valueCompare1 - valueCompare2 ||
        valueCompare3.localeCompare(valueCompare4)
      );
    }
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

export const submissionContainsErrors = (
  first_name: string,
  last_name: string,
  email: string | null
) => {
  let firstNameError = '';
  let lastNameError = '';
  let emailError = '';
  if (first_name === '') {
    firstNameError += `First Name cannot be blank.\n`;
  }
  if (last_name === '') {
    lastNameError += `Last Name cannot be blank.\n`;
  }
  if (first_name.length > 50) {
    firstNameError += `First Name cannot be more than 50 characters.`;
  }
  if (last_name.length > 50) {
    lastNameError += `Last Name cannot be more than 50 characters.`;
  }
  if (email !== null && email.length > 150) {
    emailError += `Email cannot be more than 150 characters.`;
  }
  if (firstNameError === '' && lastNameError === '' && emailError === '') {
    return false;
  } else {
    // props.toastHandler(firstNameError + ' ' + lastNameError + emailError);
    alert(firstNameError + ' ' + lastNameError + ' ' + emailError);
    return true;
  }
};

export const formatDate = (date: string): string => {
  return dayjs(date).format('MM/DD/YYYY');
};

// strips phone numbers before inserting into database
export const stripPhoneNumber = (phoneNumber: string | undefined): string => {
  // strip first character if it's a 1
  if (phoneNumber && phoneNumber.charAt(0) === '1') {
    phoneNumber = phoneNumber.replace(phoneNumber.charAt(0), '');
  }
  return phoneNumber ? phoneNumber.replace(/\D/g, '') : '';
};

// formats phone number before displaying in UI
export const formatPhoneNumber = (phoneNumber: string | undefined): string => {
  let dressedNumber;
  if (!phoneNumber) {
    return '';
  }

  dressedNumber = [phoneNumber.slice(0, 6), '-', phoneNumber.slice(6)].join('');
  dressedNumber = [
    dressedNumber.slice(0, 3),
    ') ',
    dressedNumber.slice(3),
  ].join('');
  dressedNumber = [dressedNumber.slice(0, 0), '(', dressedNumber.slice(0)].join(
    ''
  );
  return dressedNumber;
};

export const isValidValue = (valueToCheck: string | undefined): boolean => {
  if (
    valueToCheck !== null &&
    valueToCheck !== '' &&
    valueToCheck !== undefined
  ) {
    return true;
  }
  return false;
};
