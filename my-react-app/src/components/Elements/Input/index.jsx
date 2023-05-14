import Input from "./input";
import Label from "./label"


const InputForm = (props) => {
     const { label, type, name, placeHolder } = props;
     return (
          <div className="mb-6">
               <Label htmlFor={name}>{label}</Label>
               <Input name={name} type={type} placeHolder={placeHolder}/>
          </div>
     )
}

export default InputForm;