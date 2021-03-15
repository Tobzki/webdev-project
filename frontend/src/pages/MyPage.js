import React, { Component } from "react";
import "./MyPage.css";


function MyPage() {
  return (

    <div className="myPage">
      <div>
        <h2 className="memberTitle">Member page</h2>
        <h3>Name:  Håkan Reinholdsson</h3>
      <h3>Email:  hakan.reinholdsson@email.com</h3>
      <h3>Phone number: 0733-478723</h3>
      <h3>Member number: 781453567</h3>
      <h3>Favourite golf course: Mörrum</h3>
      <h3>------</h3>
      <h3>Statistics</h3>
      <div className="golfStats">

      </div>
      
      </div>
      <h2 className="titleMyPage"></h2>
      
      <div className="myPageInfo">

      </div>
    </div>
  
  );
}
  export default MyPage;