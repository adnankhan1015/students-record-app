import TileButtons from "./TileButtons";

export default function Tile({studentProp, onClick, setStudentSelected}) {
    return (
        <div className="h-[250px] w-[160px] border border-black rounded-lg m-[5px]">
            <div className="p-[10px]">
                <img src={studentProp.image} alt={studentProp.name} />
                <p className="text-[12px]">{studentProp.name} ({studentProp.age})</p>
                <p className="text-[8px]">{studentProp.email}</p>
                <div className="text-[9px]">
                    <p>GPA: {studentProp.gpa}</p>
                    <p>{studentProp.phone}</p>
                </div>

            </div>
            <div>
                <TileButtons studentRef={studentProp} onClick={onClick} setStudentSelected={setStudentSelected} />
            </div>
        </div>

    );
}