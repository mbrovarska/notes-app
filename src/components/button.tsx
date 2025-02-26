import { Button, ButtonProps } from "@material-tailwind/react";
 
interface Props extends ButtonProps {
    children: React.ReactNode;
 };
  
 const FormButton = ({ title }: {title: string}) => {
   return <Button>{title}</Button>;
 };
 
 export default FormButton;