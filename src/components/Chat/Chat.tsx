'use client'

import React, { useRef, useState } from 'react'
import ChatGPT from '@/lib/chatgpt'

const Form = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState('')
  let inputRef = useRef(null)

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setIsLoading(true)

    //@ts-ignore
    const res = await ChatGPT.fetchData(inputRef.current.value)
    setResult(res!)
    setIsLoading(false)
  }

  return (
    <section className="form">
      {isLoading && 'we are waiting...'}

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="form-group mb-3">
                <label htmlFor="input">INPUT </label>
                <textarea
                  className="form-control question"
                  name="input"
                  ref={inputRef}
                  rows={20}
                  defaultValue={
                    'Current situation: You are part of a remote tech team working on developing a new feature for a mobile application. A conflict arises between two remote team members, Taylor and Morgan, over communication and task completion. Taylor feels that Morgan is not responsive enough and misses deadlines, while Morgan argues that Taylor\'s expectations and communication style are overwhelming and unclear. My response: "I would arrange a video call with Taylor and Morgan to discuss their concerns. I would ask each of them to explain their perspectives and identify the root causes of their frustrations. I would then suggest implementing regular, structured check-ins and setting clear, realistic expectations for communication and task deadlines. Additionally, I would propose using collaborative tools to improve clarity and accountability, ensuring both feel supported and understood." Give a very short summary of the given solution to the situation with a skill assessment. Give marks out of 10 for each skill in a separate list. Return as JSON'
                  }
                />
              </div>

              <div className="form-group mb-3 form__smash">
                <button className={'btn btn-dark'} type="submit">
                  <span className={'mr-2'}>GO!</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {!!result && <p>results: {result}</p>}
    </section>
  )
}

export default Form
