// import React from 'react'

function Resume() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-2xl p-8 bg-white  shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">My Resume</h1>
        <div className="mb-8">
          <iframe
            title="Resume"
            className="w-full h-96"
            src="https://docs.google.com/document/d/e/2PACX-1vSyhQZiSbwdl22MyLyUl2ViygTiA_BDse4dHQ8zWtHpUewE0wZDVeBIxAI_4Tjx3WUC5ShG_Ssmitm6/pub?embedded=true"
          ></iframe>
        </div>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSyhQZiSbwdl22MyLyUl2ViygTiA_BDse4dHQ8zWtHpUewE0wZDVeBIxAI_4Tjx3WUC5ShG_Ssmitm6/pub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Online Version
        </a>
      </div>
    </div>
  )
}

export default Resume