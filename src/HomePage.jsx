import React from 'react'

const HomePage = () => {
  return (
    <div>
      <p>This is actual home page</p>
      
      <img  
               src="https://drive.google.com/uc?export=view&id=1JNoUoN932MJzL9wLysCHyrTYCE5f4-xJ"
               alt="Saarthi Parking logo"/> 
      
      <img src="https://drive.google.com/file/d/1zdwLm5LbrJx83nSmlCbhlgYaPMo6cR_0/view?usp=sharing"      />
      <img src="https://drive.google.com/uc?export=view&id=1zdwLm5LbrJx83nSmlCbhlgYaPMo6cR_0" alt="drive image"/>
      <img src={require('https://drive.google.com/thumbnail?id=1zdwLm5LbrJx83nSmlCbhlgYaPMo6cR_0').default} />
    </div>
  )
}

export default HomePage
