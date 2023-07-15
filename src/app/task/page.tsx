import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Main from "@/components/Main/Main"
import React from 'react'

const page = () => {
	return (
		<main className="grid grid-cols-18-60-22 h-screen bg-main-dark">
      <Header/>
      <Main/>
      <Footer/>
    </main>
	)
}

export default page