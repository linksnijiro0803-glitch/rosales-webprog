import kai from "/src/assets/images/kai.jpg";
import typewriter from "/src/assets/images/typewriter.jpg";
import monke from "/src/assets/images/monke.jpg";
import compass from "/src/assets/images/compass.jpg";





const articles = [

  {
    name: "introduction-to-react",
    title: "Introduction to React",
    img: kai,
    content: [
      "React is a JavaScript library for building user interfaces.",
      "It allows developers to create reusable UI components efficiently.",
      "You can manage state, handle events, and work with JSX syntax to render dynamic content.",
      "Example:\nfunction Welcome() {\n  return <h1>Hello, world!</h1>;\n}"
    ]

  },

  {
    name: "react-hooks-overview",
    title: "React Hooks Overview",
    img: compass,
    content: [
      "Hooks are special functions that let you use state and other React features in functional components.",
      "Common hooks include useState, useEffect, useContext, and useReducer.",
      "They simplify state management and side-effect handling.",
      "Example:\nconst [count, setCount] = useState(0);"

    ]

  },

  {

    name: "react-router-basics",
    title: "React Router Basics",
    img: monke,
    content: [
      "RFUCK NIGGAS",
      "i <3 react.",
      "GRAAAAAAHH",
      "guys friend ko si punch"

    ]

  },

  {
    name: "advanced-state-management",
    title: "Advanced State Management",
    img: typewriter,
    content: [
      "For complex apps, state can be managed globally using Context API or external libraries like Redux.",
      "Proper state management improves scalability and maintainability.",
      "Example with Context:\nconst ThemeContext = createContext('light');"
    ]

  }

];

export default articles;
 