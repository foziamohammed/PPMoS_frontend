import { FaUser, FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Home = () => {
    return(
        <main className="bg-white w-full">
            <div className='flex gap-40'>
            <div>
            <div className='flex gap-80'>
             <div className='flex items-center space-x-10 space-y-10 gap-20 ml-20'>
                <div className="grid">
                <img src='src/assets/images/placeholder.jpg' className="h-20 w-20 rounded-full"></img>
                <p className ='text-blue-500 font-semibold text-lg'>Sara Kebede</p>
                <p>Phd/5489/16</p>
                </div>
                <div className='space-y-6 text-sm'>
                    <p>
                        <span className="text-blue-600 font-semibold">Department :</span> {" "}School of Information Techonology
                    </p>
                    <p>
                        <span className="text-blue-600 font-semibold">Program :</span> {" "}Phd in Software Engineering
                    </p>
                    <p>
                        <span className="text-blue-600 font-semibold">Year :</span> {" "}Year 3
                    </p>
                    <p>
                        <span className="text-blue-600 font-semibold">Research Area :</span> {" "}Artificial Intelligence
                    </p>
                </div>

        </div>
            </div>
            <h1  className="text-blue-600 font-semibold text-lg p-10">University News</h1>
            <div className='flex items-center gap-10'>
            
            <FaArrowLeft className='text-blue-500' size={30}/>
            <div className='flex items-center border-gray-400 rounded-lg p-4 shadow-md w-60'>
                <div className='grid items-center'>
                <img src='src/assets/images/aau.jpg' className='h-20 w-40 mb-6 ml-5 items-center'></img>
                <p>Graduating students, please complete all approvals and submit your thesis to ensure timely graduation.</p>
                <p className='text-blue-600 ml-5'>Dr. Kebede Abebe</p>
                <p className='ml-4 mt-4'>Software department</p>
              </div>
              
            </div>
            <div className='flex items-center border-gray-400 rounded-lg p-4 shadow-md w-60'>
                <div className='grid items-center'>
                <img src='src/assets/images/aau.jpg' className='h-20 w-40 mb-6 ml-5 items-center'></img>
                <p>Graduating students, please complete all approvals and submit your thesis to ensure timely graduation.</p>
                <p className='text-blue-600 ml-5'>Dr. Kebede Abebe</p>
                <p className='ml-4 mt-4'>Software department</p>
              </div>
              
            </div>
            <div className='flex items-center border-gray-400 rounded-lg p-4 shadow-md w-60'>
                <div className='grid items-center'>
                <img src='src/assets/images/aau.jpg' className='h-20 w-40 mb-6 ml-5 items-center'></img>
                <p>Graduating students, please complete all approvals and submit your thesis to ensure timely graduation.</p>
                <p className='text-blue-600 ml-5'>Dr. Kebede Abebe</p>
                <p className='ml-4 mt-4'>Software department</p>
              </div>
           
            </div>
            <FaArrowRight className='text-blue-500' size={30}/>
            </div>
            
               <div className="flex justify-end mt-0 ">
         
     </div>
            </div>
            <div className="w-80 border rounded-lg shadow-md p-4">
          <h2 className="text-blue-600 font-semibold text-lg mb-4">
            October 2024
          </h2>
          <Calendar />
          <div className="mt-4">
            <p className="text-gray-500 text-xs">8:30 AM</p>
            <p>Meeting with the Supervisor</p>
            <p className="text-gray-500 text-xs mt-2">10:00 AM</p>
            <p>First Draft Submission</p>
          </div>
            
           
           </div>
          </div>
           
      

         
         
        </main>
        
    );
};


export default Home;
