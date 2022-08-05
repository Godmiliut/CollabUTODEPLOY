import * as React from "react";
import { useAuthContext } from "../../contexts/auth";
import "./MatchModal.css";

export default function MatchModal({ matches, Match, toggleMatchModal, CapitalizeName}) {
  const { matchModal, setMatchModal } = useAuthContext();

  // filtering matches array to include only object where username is equal to username in onClick event
  let UserInfo = matches.filter((match) => match.username == Match);
  UserInfo = UserInfo[0];
  // console.log("matchModal:", matchModal)
  // console.log("confirmUsername:", Match)
  console.log("userInfo:", UserInfo);
  // console.log("matches:", matches)

  return (
    <div className="match-modal-container">
      <div className="match-modal">
        <div className="match-modal-header">
          <button className="close-match-modal" onClick={toggleMatchModal}>
            x
          </button>
        </div>
        <div className="content">
          <img
            className="match-modal-img"
            src="https://s-media-cache-ak0.pinimg.com/736x/f0/d3/5f/f0d35ff9618e0ac7c0ec929c8129a39d.jpg"
            alt="img"
          ></img>
          <div className="match-name">
            <div className="match-first-name">{CapitalizeName(UserInfo.first_name)}</div>
            <div className="match-last-name">{CapitalizeName(UserInfo.last_name)}</div>
          </div>
          <div className = "match-location-timezone">
          <div className="match-location">{UserInfo.location}</div> |
          <div className = "match-timezone">{UserInfo.timezone}</div>
          </div>

        <div className = "work-information">
          {UserInfo.job_title=="undefined" && UserInfo.company == "undefined"? <><p className = "independent">Independent</p></> :null}
          {UserInfo.job_title!="undefined"? <><p className = "job-title"> {UserInfo.job_title}</p> </>: null}
          <br></br>
          {UserInfo.job_title!="undefined"? <>at </>: null}
          <br></br>
          {UserInfo.company!="undefined" && UserInfo.job_title!="undefined"? <> <p className = "job-company">{UserInfo.company} </p></>:(UserInfo.job_title=="undefined" && UserInfo.company!="undefined"? <> <b>Works at</b> <p className = "job-company">{UserInfo.company}</p></>:null)}
        </div>

        <div className = "education-information">
         
        {UserInfo.major=="undefined" && UserInfo.college == "undefined" ? <><p className = "self-taught"> Self Taught </p></> :null}
        {UserInfo.major!="undefined"? <><p className = "student-major"> {UserInfo.major}</p> student </>: null}
          <br></br>
          {UserInfo.major!="undefined"? <>at </>: null}
          <br></br>
          {UserInfo.college!="undefined" && UserInfo.major!="undefined"? <> <p className = "student-college">{UserInfo.college} </p></>:(UserInfo.major=="undefined" && UserInfo.college!="undefined"? <> <b>Attends</b> <p className = "student-college">{UserInfo.college}</p></>:null)}
        </div>


        </div>
      </div>
    </div>
  );
}
