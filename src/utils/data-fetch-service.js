const STUDENTS_API_BASE_PATH = import.meta.env.VITE_STUDENTS_API_BASE_PATH || "";

//API reference: https://freetestapi.com/apis/students
const getAllStudentsData = async () => {
  const response = await fetch(`${STUDENTS_API_BASE_PATH}/v1/students`);
  const result = await response.json();
  return result;
};

export default getAllStudentsData;
