import { Button, ButtonProps } from "@material-tailwind/react";
 
interface Props extends ButtonProps {
    children: React.ReactNode;
 };
 
 const MaterialButton = ({ children, ...restProps }: Props) => {
   return <Button {...restProps}>{children}</Button>;
 };
 
 export default MaterialButton;