import React from 'react'
import { useSelector } from 'react-redux'
import Markdown from 'markdown-to-jsx'
import '../assets/scss/readme.scss'

const Readme = () => {
  const readme = useSelector((s) => s.repository.readme)
  return (
    <div className="markdown-body px-16 pt-24">
      <Markdown>{readme}</Markdown>
    </div>
  )
}

export default Readme
