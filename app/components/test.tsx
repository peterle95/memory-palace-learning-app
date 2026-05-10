"use client"

import { useState } from "react"

type TestProps = {
  text: string
}

export default function Test({ text }: TestProps) {
  const [test, setTest] = useState("")

  function handleClick() {
    setTest(text)
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Click me
      </button>

      <h1>Test</h1>

      <p>Original prop: {text}</p>
      <p>State value: {test}</p>
    </div>
  )
}