import { useEffect, useState } from "react";
import getAllStudentsData from "../utils/data-fetch-service";
import Tile from "./Tile";
import Popup from "./Popup";

export default function Grid() {
  const [allStudents, setStudentsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [popupDisplay, setPopupDisplay] = useState(false);
  const [selectedStudent, setStudentSelected] = useState(null);

  useEffect(() => {
    const getStudentsData = async () => {
      const studentsFromApi = await getAllStudentsData();
      setStudentsData(studentsFromApi);
      setLoading(false);
      return studentsFromApi;
    }
    getStudentsData();
  }, []);

  if (loading) return <p className="mt-[10px]">Loading data...</p>;
  console.log('>>setPopupDisplay', popupDisplay, selectedStudent)
  return (
    <div className="flex flex-wrap mt-[10px]">
      {
        allStudents.map((student) => (
          <Tile key={student.id} studentProp={student} onClick={setPopupDisplay} setStudentSelected={setStudentSelected}  />
        ))
      }
      {
        popupDisplay ? <Popup studentProp={selectedStudent} onClick={setPopupDisplay} /> : ''
      }
    </div>
  )
}
