import { useState } from "react"
import Input from "../components/Forms/Input"
import InputForm from "../components/Forms/InputForm"
import { useNavigate } from "react-router-dom"
import ErrorModal from "../components/UI/ErrorModal"


const AddPost = () => {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")

  const closeModal = () => {
    setError(false)
  }

  const addPostHandler = async (event) => {
    event.preventDefault()
    const response = await fetch("/api/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    })

    const data = await response.json()
    if (data.status === "ok") {
      navigate("../")
      console.log("dodano post")
    } else if (data.status === "error") {
      setTitle("")
      setContent("")
      setCategory("")
      setError(true)
    }
  }

  return (
    <main className='bg-gradient-to-r from-backgroundGradient1 to-backgroundGradient2 w-screen h-screen relative flex justify-center items-center'>
      {error && (
        <ErrorModal
          onOkay={closeModal}
          title='Sprobuj ponownie'
          message='Cos zle'
        />
      )}
      <InputForm onSubmit={addPostHandler} btnText={"Add Post"}>
        <Input
          label='Title'
          id='title'
          type='text'
          placeholder='Title...'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        
        <div className='flex flex-col w-auto mb-5'>
          <label
            className='text-center text-xl w-max mb-3 mt-3'
            htmlFor='content'
          >
            Content
          </label>
          <textarea
            className='h-52 w-full border rounded-lg p-2 hover:bg-inputColorHover resize-none '
            id='content'
            placeholder='Content'
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </div>
      </InputForm>
    </main>
  )
}
export default AddPost
