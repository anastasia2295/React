import './App.css'
import {useForm, SubmitHandler, SubmitErrorHandler} from "react-hook-form"

interface MyForm {
  name: string;
  age: number;
}

function App() {
  const{register, handleSubmit, formState: {errors}, clearErrors, reset, setValue} = useForm<MyForm>({
    defaultValues: {
      age:18
    }
  })

  const submit: SubmitHandler<MyForm> = data => {
    console.log(data)
  }

  const error: SubmitErrorHandler<MyForm> = data => {
    console.log(data)
  }
  
  return (
    <>
    <form onSubmit={handleSubmit(submit, error)}>
      <input type='text' {...register("name", {required: true})} aria-invalid={errors.name ?
      true : false}/>
      <input type='number' {...register("age")}/>
      <button>Отправить</button>
      <button type='button' onClick={()=>reset({
        age: 0,
        name: ""
      })}>Очистить форму</button>
      <button type='button' onClick={()=>clearErrors()}>Очистить ошибки</button>
      <button type='button' onClick={()=>setValue("name", "Вася")}>Установить имя</button>
    </form>
    </>
  )
}

export default App
