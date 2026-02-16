// createContext is a function that creates a context object. A context object is a way to pass data through the component tree without having to pass props down manually at every level.
import { createContext } from "react";

// create a context object with a default value of 0 and export it so that it can be used in other components
export const counterContext = createContext(0)