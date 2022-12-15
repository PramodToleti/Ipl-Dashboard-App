import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    latestMatch: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchData = data.latest_match_details
    const recentMatchesData = data.recent_matches
    const formattedLatestMatchData = {
      id: latestMatchData.id,
      competingTeam: latestMatchData.competing_team,
      competingTeamLogo: latestMatchData.competing_team_logo,
      date: latestMatchData.date,
      firstInnings: latestMatchData.first_innings,
      manOfTheMatch: latestMatchData.man_of_the_match,
      matchStatus: latestMatchData.match_status,
      result: latestMatchData.result,
      secondInnings: latestMatchData.second_innings,
      umpires: latestMatchData.umpires,
      venue: latestMatchData.venue,
    }
    const formattedRecentMatchesData = recentMatchesData.map(each => ({
      id: each.id,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    this.setState({
      teamBanner: data.team_banner_url,
      isLoading: false,
      latestMatch: formattedLatestMatchData,
      recentMatches: formattedRecentMatchesData,
    })
  }

  render() {
    const {teamBanner, isLoading, latestMatch, recentMatches} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team-matches-container ${id}`}>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={60} width={60} />
          </div>
        ) : (
          <div className="team-match-details">
            <img src={teamBanner} alt="team banner" className="team-banner" />
            <div className="latest-match-container">
              <LatestMatch
                latestMatchDetails={latestMatch}
                recentMatches={recentMatches}
                key={latestMatch.id}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
