// createContext → React ka function hai jo ek context object banata hai.
// Context ka use data ko component tree me bina props drilling ke pass karne ke liye hota hai.
import { createContext } from "react";

// yaha hum ek context create kar rahe hain
// createContext(0) → 0 iski default value hai
// agar Provider use na ho to components ko ye default value milegi
export const counterContext = createContext(0);
