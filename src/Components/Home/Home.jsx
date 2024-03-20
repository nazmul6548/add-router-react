import { FaAtom } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
// import Header from "../Header/header";
// import { FaBeer } from 'react-icons/fa';
// import swal from "sweetalert";

import 'animate.css';
import { useRef } from "react";

// const buttonhandeler = () => {
//   swal({
//     title: "Are you sure?",
//     text: "Once deleted, you will not be able to recover this imaginary file!",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//   })
//   .then((willDelete) => {
//     if (willDelete) {
//       swal("my name is nazmul islam jewel", {
//         icon: "success",
//       });
//     } else {
//       swal("my name is nazmul islam jewel");
//     }
//   });

// }



function Home() {
  const textRef = useRef()


  const handleclicker = () => {
    console.log(textRef.current);
    
    textRef.current.classList.add("animate__animated");
    textRef.current.classList.add("animate__jello");

    setTimeout (() => {
      textRef.current.classList.remove("animate__animated");
      textRef.current.classList.remove("animate__jello");
    },1000)
    
    }
  return (
    <div>
       {/* <Header></Header> */}
        <Outlet></Outlet>
        <h1 ref={textRef} className=" ">my name is nazmul islam jewel</h1>
        {/* <button onClick={buttonhandeler}>click me <FaAtom></FaAtom> </button> */}

        <button onClick={handleclicker}>clicker</button>
    
    </div>
  )
}

export default Home