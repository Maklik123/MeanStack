import React from "react";
import MainPage from "../component/MainPage";
import Head from "../component/head";

export default class extends React.Component{
  render(){
    return(
      <div>
          <Head></Head>
          <MainPage></MainPage>
      </div>
    )
  }
}
