import './index.css'

import {v4 as uuidv4} from 'uuid'

import MatchCard from '../MatchCard'

import FormCard from '../FormCard'

const LatestMatch = props => {
  const {latestMatchDetails, recentMatches} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  /* Form Details */

  const formList = []
  for (let i = 3; i >= 0; i -= 1) {
    formList.push({
      id: uuidv4(),
      result: recentMatches[i].matchStatus,
    })
  }
  const latestMatchResult =
    result.split(' ')[0] === competingTeam.split(' ')[0] ? 'Lost' : 'Won'
  const recentFormResult = {
    id: uuidv4(),
    result: latestMatchResult,
  }
  formList.push(recentFormResult)

  return (
    <>
      <div className="header">
        <h1 className="latest-matches-heading">Latest Matches</h1>
        <ul className="form-container">
          {formList.map(each => (
            <FormCard formDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
      <div className="match-details-body">
        <div className="match-result-container">
          <div className="result-details">
            <p className="opponent-team-name">{competingTeam}</p>
            <p className="match-date">{date}</p>
            <p className="match-venue">{venue}</p>
            <p className="match-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="opponent-logo"
          />
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="opp-logo"
        />
        <hr className="separator" />
        <div className="innings-details-container">
          <div className="innings-container">
            <div>
              <h1 className="details-heading">First Innings</h1>
              <p className="innings-details">{firstInnings}</p>
            </div>
            <div>
              <h1 className="details-heading">Second Innings</h1>
              <p className="innings-details">{secondInnings}</p>
            </div>
          </div>

          <h1 className="details-heading">Man Of The Match</h1>
          <p className="innings-details">{manOfTheMatch}</p>
          <h1 className="details-heading">Umpires</h1>
          <p className="innings-details">{umpires}</p>
        </div>
      </div>

      <ul className="recent-matches-container">
        {recentMatches.map(each => (
          <MatchCard recentMatchDetails={each} key={each.id} />
        ))}
      </ul>
    </>
  )
}

export default LatestMatch
