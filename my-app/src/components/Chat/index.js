// import React from 'react'
// import { useEffect, useState } from 'react'
// import './index.scss'
// import AnimatedLetters from '../AnimatedLetters'


// import ChatBot from 'react-simple-chatbot'
// import {Segment} from 'semantic-ui-react'


// const Chat = () => {
// //   const [letterClass, setLetterClass] = useState('text-animate')

//   const steps = [

//     {

//       id: "Greet",

//       message: "Hello, Welcome to our shop",

//       trigger: "Done",

//     },

//     {

//       id: "Done",

//       message: "Please enter your name!",

//       trigger: "waiting1",

//     },

//     {

//       id: "waiting1",

//       user: true,

//       trigger: "Name",

//     },

//     {

//       id: "Name",

//       message: "Hi {previousValue}, Please select your issue",

//       trigger: "issues",

//     },

//     {

//       id: "issues",

//       options: [

//         {

//           value: "React",

//           label: "React",

//           trigger: "React",

//         },

//         { value: "Angular", label: "Angular", trigger: "Angular" },

//       ],

//     },

//     {

//       id: "React",

//       message:

//         "Thanks for letting your React issue, Our team will resolve your issue ASAP",

//       end: true,

//     },

//     {

//       id: "Angular",

//       message:

//         "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

//       end: true,

//     },

//   ]; 

//      const [letterClass, setLetterClass] = useState('text-animate')

//   useEffect(() => {
//      setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 3000)
//   }, [])

//   return (
//     <>
//       <div className="container about-page">
//         <div className="text-zone">
//           <h1>
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={['C', 'h', 'a', 't', ' ', 'w', 'i', 't','h',' ','u','s']}
//               idx={15}
//             />
//           </h1>
//           <p>
//             I'm a very ambitious front-end developer looking for a role in an
//             established IT company with the opportunity to work with the latest
//             technologies on challenging and diverse projects.
//           </p>
//           <p align="LEFT">
//             I'm quiet confident, naturally curious, and perpetually working on
//             improving my chops one design problem at a time.
//           </p>
//           <p>
//             If I need to define myself in one sentence that would be a family
//             person, father of a beautiful daughter, a sports fanatic,
//             photography enthusiast, and tech-obsessed!!!
//           </p>
//         </div>
//         </div>
//           <div className="chatbox">
//    <Segment floated ="left">
//    <ChatBot steps={steps}/>
//    </Segment>
//    </div>
//    </>
//   )
// }

// export default Chat


