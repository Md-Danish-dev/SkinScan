import React from 'react'

const HowItWorks = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 id:work"  >
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="lg:mt-0 lg:col-span-3 lg:flex">
            <img src="https://ai-derm.com/assets/ai-img-d903ddf2.webp" alt="mockup"/>
        </div>                
        <div className=" place-self-center lg:col-span-9">
            <h1 className="max-w-3xl text-4xl  leading-none lg:mb-2 md:text-3xl xl:text-4xl dark:text-white font-serif font-sans font-bold">How does Artificial Intelligence analyze images?</h1>
            <p className="max-w-3xl font-light text-white lg:mb-2 md:text-1xl  lg:text-2lg dark:text-white text-xl">AI Dermatologist uses a deep machine learning algorithm (AI-algorithm). The human ability to learn from examples and experiences has been transferred to a computer. For this purpose, the neural network has been trained using a dermoscopic imaging database containing tens of thousands of examples that have confirmed diagnosis and assessment by dermatologists.</p>
            <p className="max-w-3xl font-light text-white lg:mb-2 md:text-1xl  lg:text-2lg dark:text-white text-xl">The AI is able to distinguish between benign and malignant tumors, similar to the ABCDE rule (5 main signs of oncology: asymmetry, boundary, color, diameter, and change over time). The difference between them is that the algorithm can analyze thousands of features, but not only 5 of them. Of course, only a machine can detect that amount of evidence.</p>
            <p className="max-w-3xl font-light text-white lg:mb-2 md:text-1xl  lg:text-2lg dark:text-white text-xl">Due to the productive cooperation with doctors, the quality of the algorithm performance is constantly being improved. Based on growing experience and its own autonomous rules, the AI is able to distinguish between benign and malignant tumors, find risks of human papillomavirus, and classify different types of acne…</p>
            {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center bg-blue-500 text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                CHECK YOUR SKIN NOW
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> */}
            {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a>  */}
        </div>
    </div>
</section>
    </>
  )
}

export default HowItWorks
