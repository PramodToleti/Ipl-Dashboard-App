import './index.css'

import MatchCard from '../MatchCard'

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
  return (
    <>
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
