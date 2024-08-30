import DeleteIcon from "./Icons/DeleteIcon";
import EyeIcon from "./Icons/EyeIcon";
import FlagIcon from "./Icons/FlagIcon";

export default function TileButtons({studentRef, onClick, setStudentSelected}) {
    return (
        <div className="flex justify-around">
            <div title="View Student Details" onClick={() => {
                onClick(true);
                setStudentSelected(studentRef);
            }}>
                <EyeIcon />
            </div>

            <div title="Flag">
                <FlagIcon />
            </div>

            <div title="Delete Student">
                <DeleteIcon />
            </div>
        </div>
    );
}