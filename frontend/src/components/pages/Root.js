import Main from "../mainpage/Main"
import { Outlet, json } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Header from "../mainpage/header/Header";


const Root = () => {

  
    return (
        <>
        <Header></Header>
        
        <main>
         <Outlet></Outlet>
        </main>

        </>
    )
    
}
export default Root;


// export async function loader() {
//     const response = await fetch('http://localhost:8080')
  
//     if (!response.ok) {
//         const errormessage =  await response.json()
        
//         throw json(
//             { statusText: errormessage.message },
//             {
//               status: response.status
//             }
//           );
     
     
//     } else {
        
//       const resData = await response.json();
//       return resData.events;
//     }
//   }