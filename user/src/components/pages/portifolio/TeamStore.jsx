import React from 'react'

const TeamStore = ({teamname,position,image}) => {
  return (
    <>
     {/* Single Team Member Area */}
     <div className="col-12 col-sm-6 col-lg-4">
     <div className="single-team-member text-center mb-100">
         {/* Team Member Thumb */}
         <div className="team-member-thumb">
             <img src={`${image}`} alt="" style={{width:"100%",height:"50vh"}} />
             {/* Social Info */}
             <div className="team-member-social-info">
                 <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                 <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                 <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                 <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
             </div>
         </div>
         {/* Team Member Info */}
         <div className="team-member-info mt-30">
             <h5>{teamname}</h5>
             <p>{position}</p>
         </div>
     </div>
 </div>
    </>
  )
}

export default TeamStore