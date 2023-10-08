import { useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import { Button } from '@material-tailwind/react'
import { useDispatch } from 'react-redux';
import { uploadExcelData } from '../../redux/adminSlice';

function AddPlacedStudents() {
    const [studentsData, setStudentsData] = useState(null);
    const dispatch=useDispatch();
    const handleFileChange = (e) => {
        setStudentsData(e.target.files[0]);
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData1 = new FormData();
    
        formData1.append("image", studentsData);
    
        console.log(formData1.get("image"));
        try {
          await dispatch(uploadExcelData(formData1));
        } catch (error) {
          console.error("Error:", error);
        }
      };
  return (
    <div>
        <Sidebar/>
        <div className='lg:pl-96 px-10 mt-20'>
            <form className='lg:m-44 flex flex-col gap-10 w-fit'>
                <Button >Add Students</Button>
                <label className="block">
              <input
                type="file"
                name="bulkUpload"
                id="bulkUpload"
                accept=".xlsx, .xls"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-500 file:text-white
                hover:file:bg-blue-600"
                />
            </label>
            <Button color='red' onClick={handleSubmit}>Upload</Button>
            </form>
        </div>
    </div>
  )
}

export default AddPlacedStudents