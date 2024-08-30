export default function Popup({ studentProp, onClick, setStudentSelected }) {
    return (
        <div className="border-2 border-black bg-white absolute left-0 right-0 mx-auto top-[110px] z-50 lg:h-[750px] lg:w-[600px]">
            <div className="flex justify-end px-[10px]" onClick={() => onClick(state => !state)}>
                <span>x</span>
            </div>
            <div className="p-[10px] m-auto w-[90%] text-start">
                <img src={studentProp.image} alt={studentProp.name} height={100} width={600} />
                <p><span className="font-bold">Name:</span> {studentProp.name} ({studentProp.age})</p>
                <p><span className="font-bold">Gender:</span> {studentProp.gender}</p>
                <p><span className="font-bold">Courses enrolled in:</span> {[...studentProp.courses].join(', ')}</p>
                <p><span className="font-bold">Email:</span> {studentProp.email}</p>
                <p><span className="font-bold">Address:</span> {studentProp.address.street} {studentProp.address.city} {studentProp.address.zip} {studentProp.address.country}</p>
                <div>
                    <p><span className="font-bold">GPA:</span>  {studentProp.gpa}</p>
                    <p><span className="font-bold">Phone:</span> {studentProp.phone}</p>
                </div>

            </div>
        </div>
    );
}