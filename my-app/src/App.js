// import logo from './logo.svg';
// import './App.css';
// import functi from './compo0nent/func.js' ;




// function App()

//  {

//   const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );
//   return (
//     <div className="App">
     
//      <ul>{listItems}</ul>
    
//     </div>
    
//   );
// }

// export default App;
// import React from 'react';
// import './App.css';
// import functi from './compo0nent/func.js';

// function App() {
//   const numbers = [1, 2, 3, 4, 5];
//   const listItems = numbers.map((number) => <li key={number}>{number}</li>);

//   return (
//     <div className="App">
//       <ul className="list-style">{listItems}</ul>
//     </div>
//   );
// }

// export default App;



// aktu

// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const initialValues = { username: "", email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);
//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     return errors;
//   };

//   return (
//     <div className="container">
//       {Object.keys(formErrors).length === 0 && isSubmit ? (
//         <div className="ui message success">Signed in successfully</div>
//       ) : (
//         <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
//       )}

//       <form onSubmit={handleSubmit}>
//         <h1>Login Form</h1>
//         <div className="ui divider"></div>
//         <div className="ui form">
//           <div className="field">
//             <label>Username</label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formValues.username}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.username}</p>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={formValues.email}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.email}</p>
//           <div className="field">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formValues.password}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.password}</p>
//           <button className="fluid ui button blue">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;

// Import necessary dependencies
// import React from 'react';
// // import CustomUseEffectComponent from './component/hook/useEffect.js';
// import Home from "./components/Home";
// import About from './components/About';


// import { BrowserRouter } from "react-router-dom";

// import { Routes, Route } from "react-router-dom"
// function App() {
//   return (
//     <div>
//       {/* <CustomUseEffectComponent /> */}
//       <BrowserRouter>
//       <Route path="/" element={ <Home/> } />
//         <Route path="about" element={ <About/> } />
        
//   </BrowserRouter>
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './Home';
// import About from './About';

// import Navbar from './Navbar';

// const App = () => {
//   return (
//     // <Routes>
//     //   <div>
//     //     <Navbar />
      
//     //       <Route path="/about">
//     //         <About />
//     //       </Route>
        
            
          
//     //       <Route path="/">
//     //         <Home />
//     //       </Route>
      
//     //   </div>
//     // </Routes>
 import React from 'react'
 
 import { BrowserRouter, Routes ,Route } from "react-router-dom";
 import Home from './Home';
 import About from './About';
 import Blogs from './Blogs';
//  import Error from './Error';
 import Navbar from './Navbar';
 import './App.css';

 function App() {
   return (
     <BrowserRouter>
                <Navbar />
            <Routes>
              <Route  path="/home" element={<Home />}/>
              <Route  path="/about" element={<About />}/>
              <Route  path="/blogs" element={<Blogs />}/>
              {/* <Route  path="*" element={<Error />}/> */}

            </Routes>
     </BrowserRouter>
   )
 }
 
 export default App
 