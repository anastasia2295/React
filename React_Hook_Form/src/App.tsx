
import {SubmitHandler, useForm} from "react-hook-form"
import { IShippingFiled } from "./app.interface";
import { useEffect } from "react";

function App() {
  const {register, handleSubmit, formState: {errors}, reset, watch} = useForm<IShippingFiled>({
    mode: "onChange" //проверка ошибок при изменении поля
  })
  const onSubmit: SubmitHandler<IShippingFiled> = (data) =>{
    alert(`your name ${data.name}`)
    reset()
  }

  useEffect(() => {
    const subsription = watch((value, {name, type}) => console.log(value, name, type))
    return () => subsription.unsubscribe()
  }, [watch])

  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
        {...register("name", {
          required: "Name is require field", //сообщение об ошибке
        })
      } type="text" placeholder="name"/>
       {errors.name && <div style={{color: "red"}}>{errors.name.message}</div>} 
      <input 
        {...register("email", {
          required: "Email is require field",
          pattern: {
            value: /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/ ,
            message: "Please enter valid email"
        }})
      } type="text" placeholder="email"/>
      {errors.email && <div style={{color: "red"}}>{errors.email.message}</div>}
        <button>send</button>
      </form>
    </div>
  );
}

export default App;
