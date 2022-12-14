import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = recentMatchDetails

  const resultStyle = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="match-card">
      <div className="logo-container">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>

      <p className="competing-team-name">{competingTeam}</p>
      <p className="game-result">{result}</p>
      <p className={`match-status ${resultStyle}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
