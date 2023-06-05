// Modules
import * as React from "react"

// Styles
import '../styles/css/main.css';

// Components
import Header from "../components/header";
import Main from "../components/main";

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>YC｜搖擺工程師</title>
