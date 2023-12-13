import { children } from "react";

function TabButton({ children, onSelect }){
   
return(
    <li><button onSelect={onSelect}>{children}</button></li>
)
}
export default TabButton;