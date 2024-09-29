import React from 'react'
import { useSelector } from 'react-redux'

function Article() {
    const article = useSelector(state =>state.homeImage)//getting data by useslecter
    //console.log("Article", article)
  return (
    <div className="container p-4" style={{height:1200, fontFamily:'serif', fontSize:'20px'}}>
    <h1>Article</h1>
    <div className="row">
      {article && article?.length&& article.map((element) => (//mapping the article data
        <div
          key={element?.id}
          className="mb-3 h-100 scrollable overflow-auto"
        >
          <div className="card">
            <img src={element.imgurl} className="border-bottom" />
            <div className="card-body">
              <p className="card-title">
                Lashing rains, a damp breeze in your hair and a steaming cup
                of chai are just some of the things that are synonymous with
                the annual monsoons, and offer
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Article
