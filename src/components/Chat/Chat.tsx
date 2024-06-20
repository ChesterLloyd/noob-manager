'use client'

import React, { useRef, useState } from 'react'
import ChatGPT from '@/lib/chatgpt'
import Image from 'next/image'
import './styles.scss'

const Chat = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState('')
  let inputRef = useRef(null)
  let contextRef = useRef(null)
  let responseRef = useRef(null)

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setIsLoading(true)

    //@ts-ignore
    const prompt = `Current situation: ${contextRef.current.value} My response: "${responseRef.current.value}" Give a very short summary of the given solution to the situation with a skill assessment. Give marks out of 10 for each skill in a separate list. Return as JSON where summary ahs the key "summary" and skills are "skills. Also in the summary, add a point evaluation of "excellent", "good", "sufficient" for the given response to the situation`
    let res = await ChatGPT.fetchData(prompt)

    console.log(res)
    res = res?.replace('```json', '')
    res = res?.replace('```', '')
    console.log(res)
    const content = JSON.parse(res!)
    setResult(content)
    setIsLoading(false)
  }

  return (
    <section className="form chat">
      {isLoading && 'we are waiting...'}

      <div className="container">
        <div className="row">
          <div className="offset-2 col-10">
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="chat-row chat-row--left">
                <Image src={'/noob.png'} alt={'Noob icon'} width={88} height={88} />
                <div className="form-group mb-3 chat-row__input">
                  <p className={'chat-row__user'}>Noob manager</p>
                  <label htmlFor="input" className={'d-none'}>
                    Context
                  </label>
                  <p>
                    Welcome to NoobManager! I'm your personal assistant, here to guide you on your
                    journey from a noob manager to a true boss!
                  </p>
                  <p> Ready to get started, click the Noob emoji below for your first challenge.</p>
                </div>
              </div>

              <div className="chat-row chat-row--right">
                <div className="form-group chat-row__input">
                  <label htmlFor="input" className={'d-none'}>
                    Context
                  </label>
                  <textarea
                    className="form-control question"
                    name="input"
                    rows={4}
                    defaultValue={
                      "I am part of a remote tech team working on developing a new feature for a mobile application. A conflict arises between two remote team members, Taylor and Morgan, over communication and task completion. Taylor feels that Morgan is not responsive enough and misses deadlines, while Morgan argues that Taylor's expectations and communication style are overwhelming and unclear."
                    }
                    ref={contextRef}
                  />
                </div>
              </div>

              <div className="chat-row chat-row--right">
                <div className="form-group chat-row__input">
                  <label htmlFor="input" className={'d-none'}>
                    My Response
                  </label>
                  <textarea
                    className="form-control question"
                    name="input"
                    rows={4}
                    defaultValue={
                      'I would arrange a video call with Taylor and Morgan to discuss their concerns. I would ask each of them to explain their perspectives and identify the root causes of their frustrations. I would then suggest implementing regular, structured check-ins and setting clear, realistic expectations for communication and task deadlines. Additionally, I would propose using collaborative tools to improve clarity and accountability, ensuring both feel supported and understood.'
                    }
                    ref={responseRef}
                  />
                </div>
              </div>

              {!result && (
                <div className="form-group mb-3 float-end">
                  <button className={'btn btn-dark'} type="submit">
                    <span className={'mr-2'}>Send</span>
                  </button>
                </div>
              )}

              {!!result && (
                <div className="chat-row chat-row--left">
                  <Image src={'/noob.png'} alt={'Noob icon'} width={88} height={88} />
                  <div className="form-group mb-3 chat-row__input">
                    <p className={'chat-row__user'}>Noob manager</p>
                    <label htmlFor="input" className={'d-none'}>
                      Result
                    </label>
                    {/*@ts-ignore*/}
                    <p dangerouslySetInnerHTML={{ __html: result.summary }} />
                    {/*@ts-ignore*/}
                    {Object.keys(result.skills).map((key) => (
                      <p key={key}>
                        {/*@ts-ignore*/}
                        {key}: {result.skills[key]}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chat
