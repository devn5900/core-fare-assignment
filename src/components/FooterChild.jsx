import React from 'react'

const FooterChild = ({data}) => {
  return (
    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
    <h6 className="text-uppercase fw-bold mb-4">
      {data?.title}
    </h6>
    {
        data?.child?.map((el)=>{
            return <p>
            <a href="/" className="text-reset">{el}</a>
          </p>
        })
    }
    
  </div>
  )
}

export default FooterChild