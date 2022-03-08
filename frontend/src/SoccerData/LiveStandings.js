export const liveStandings = {
  generated_at: "2021-03-05T03:03:00+00:00",
  schema:
    "http://schemas.sportradar.com/bsa/soccer/v1/json/endpoints/soccer/tournament_live_standings.json",
  tournament: {
    id: "sr:tournament:17",
    name: "Premier League",
    sport: {
      id: "sr:sport:1",
      name: "Soccer",
    },
    category: {
      id: "sr:category:1",
      name: "England",
      country_code: "ENG",
    },
    current_season: {
      id: "sr:season:77179",
      name: "Premier League 20/21",
      start_date: "2020-09-12",
      end_date: "2021-05-24",
      year: "20/21",
    },
  },
  season: {
    id: "sr:season:77179",
    name: "Premier League 20/21",
    start_date: "2020-09-12",
    end_date: "2021-05-24",
    year: "20/21",
    tournament_id: "sr:tournament:17",
  },
  standings: [
    {
      tie_break_rule:
        "In the event that two (or more) teams have an equal number of points, the following rules break the tie:\r\n1. Goal difference\r\n2. Goals scored",
      type: "total",
      groups: [
        {
          id: "sr:group:51387",
          team_standings: [
            {
              team: {
                id: "sr:competitor:17",
                name: "Manchester City FC",
              },
              rank: 1,
              current_outcome: "Champions League",
              played: 27,
              win: 20,
              draw: 5,
              loss: 2,
              goals_for: 56,
              goals_against: 17,
              goal_diff: 39,
              points: 65,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:35",
                name: "Manchester United FC",
              },
              rank: 2,
              current_outcome: "Champions League",
              played: 27,
              win: 14,
              draw: 9,
              loss: 4,
              goals_for: 53,
              goals_against: 32,
              goal_diff: 21,
              points: 51,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:31",
                name: "Leicester City FC",
              },
              rank: 3,
              current_outcome: "Champions League",
              played: 27,
              win: 15,
              draw: 5,
              loss: 7,
              goals_for: 46,
              goals_against: 31,
              goal_diff: 15,
              points: 50,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:38",
                name: "Chelsea FC",
              },
              rank: 4,
              current_outcome: "Champions League",
              played: 27,
              win: 13,
              draw: 8,
              loss: 6,
              goals_for: 42,
              goals_against: 25,
              goal_diff: 17,
              points: 47,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:48",
                name: "Everton FC",
              },
              rank: 5,
              current_outcome: "Europa League",
              played: 26,
              win: 14,
              draw: 4,
              loss: 8,
              goals_for: 39,
              goals_against: 33,
              goal_diff: 6,
              points: 46,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:37",
                name: "West Ham United FC",
              },
              rank: 6,
              played: 26,
              win: 13,
              draw: 6,
              loss: 7,
              goals_for: 40,
              goals_against: 31,
              goal_diff: 9,
              points: 45,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:44",
                name: "Liverpool FC",
              },
              rank: 7,
              played: 27,
              win: 12,
              draw: 7,
              loss: 8,
              goals_for: 47,
              goals_against: 35,
              goal_diff: 12,
              points: 43,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:33",
                name: "Tottenham Hotspur FC",
              },
              rank: 8,
              played: 26,
              win: 12,
              draw: 6,
              loss: 8,
              goals_for: 42,
              goals_against: 27,
              goal_diff: 15,
              points: 42,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:40",
                name: "Aston Villa FC",
              },
              rank: 9,
              played: 25,
              win: 12,
              draw: 3,
              loss: 10,
              goals_for: 38,
              goals_against: 27,
              goal_diff: 11,
              points: 39,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:42",
                name: "Arsenal FC",
              },
              rank: 10,
              played: 26,
              win: 11,
              draw: 4,
              loss: 11,
              goals_for: 34,
              goals_against: 27,
              goal_diff: 7,
              points: 37,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:34",
                name: "Leeds United",
              },
              rank: 11,
              played: 26,
              win: 11,
              draw: 2,
              loss: 13,
              goals_for: 43,
              goals_against: 44,
              goal_diff: -1,
              points: 35,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:3",
                name: "Wolverhampton Wanderers FC",
              },
              rank: 12,
              played: 27,
              win: 9,
              draw: 7,
              loss: 11,
              goals_for: 28,
              goals_against: 37,
              goal_diff: -9,
              points: 34,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:7",
                name: "Crystal Palace FC",
              },
              rank: 13,
              played: 27,
              win: 9,
              draw: 7,
              loss: 11,
              goals_for: 29,
              goals_against: 43,
              goal_diff: -14,
              points: 34,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:45",
                name: "Southampton FC",
              },
              rank: 14,
              played: 26,
              win: 8,
              draw: 6,
              loss: 12,
              goals_for: 31,
              goals_against: 44,
              goal_diff: -13,
              points: 30,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:6",
                name: "Burnley FC",
              },
              rank: 15,
              played: 27,
              win: 7,
              draw: 8,
              loss: 12,
              goals_for: 19,
              goals_against: 35,
              goal_diff: -16,
              points: 29,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:30",
                name: "Brighton & Hove Albion FC",
              },
              rank: 16,
              played: 26,
              win: 5,
              draw: 11,
              loss: 10,
              goals_for: 26,
              goals_against: 33,
              goal_diff: -7,
              points: 26,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:39",
                name: "Newcastle United FC",
              },
              rank: 17,
              played: 26,
              win: 7,
              draw: 5,
              loss: 14,
              goals_for: 27,
              goals_against: 44,
              goal_diff: -17,
              points: 26,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:43",
                name: "Fulham FC",
              },
              rank: 18,
              current_outcome: "Relegation",
              played: 27,
              win: 4,
              draw: 11,
              loss: 12,
              goals_for: 21,
              goals_against: 33,
              goal_diff: -12,
              points: 23,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:8",
                name: "West Bromwich Albion",
              },
              rank: 19,
              current_outcome: "Relegation",
              played: 27,
              win: 3,
              draw: 8,
              loss: 16,
              goals_for: 20,
              goals_against: 56,
              goal_diff: -36,
              points: 17,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:15",
                name: "Sheffield United FC",
              },
              rank: 20,
              current_outcome: "Relegation",
              played: 27,
              win: 4,
              draw: 2,
              loss: 21,
              goals_for: 16,
              goals_against: 43,
              goal_diff: -27,
              points: 14,
              change: 0,
            },
          ],
        },
      ],
    },
    {
      tie_break_rule:
        "In the event that two (or more) teams have an equal number of points, the following rules break the tie:\r\n1. Goal difference\r\n2. Goals scored",
      type: "home",
      groups: [
        {
          id: "sr:group:51387",
          team_standings: [
            {
              team: {
                id: "sr:competitor:17",
                name: "Manchester City FC",
              },
              rank: 1,
              played: 14,
              win: 11,
              draw: 2,
              loss: 1,
              goals_for: 31,
              goals_against: 9,
              goal_diff: 22,
              points: 35,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:37",
                name: "West Ham United FC",
              },
              rank: 2,
              played: 13,
              win: 7,
              draw: 3,
              loss: 3,
              goals_for: 21,
              goals_against: 15,
              goal_diff: 6,
              points: 24,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:38",
                name: "Chelsea FC",
              },
              rank: 3,
              played: 13,
              win: 6,
              draw: 5,
              loss: 2,
              goals_for: 23,
              goals_against: 11,
              goal_diff: 12,
              points: 23,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:44",
                name: "Liverpool FC",
              },
              rank: 4,
              played: 14,
              win: 7,
              draw: 2,
              loss: 5,
              goals_for: 22,
              goals_against: 17,
              goal_diff: 5,
              points: 23,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:35",
                name: "Manchester United FC",
              },
              rank: 5,
              played: 13,
              win: 6,
              draw: 3,
              loss: 4,
              goals_for: 28,
              goals_against: 19,
              goal_diff: 9,
              points: 21,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:33",
                name: "Tottenham Hotspur FC",
              },
              rank: 6,
              played: 13,
              win: 6,
              draw: 3,
              loss: 4,
              goals_for: 21,
              goals_against: 13,
              goal_diff: 8,
              points: 21,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:31",
                name: "Leicester City FC",
              },
              rank: 7,
              played: 13,
              win: 6,
              draw: 1,
              loss: 6,
              goals_for: 20,
              goals_against: 19,
              goal_diff: 1,
              points: 19,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:3",
                name: "Wolverhampton Wanderers FC",
              },
              rank: 8,
              played: 13,
              win: 5,
              draw: 4,
              loss: 4,
              goals_for: 15,
              goals_against: 14,
              goal_diff: 1,
              points: 19,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:42",
                name: "Arsenal FC",
              },
              rank: 9,
              played: 13,
              win: 5,
              draw: 3,
              loss: 5,
              goals_for: 16,
              goals_against: 14,
              goal_diff: 2,
              points: 18,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:34",
                name: "Leeds United",
              },
              rank: 10,
              played: 13,
              win: 5,
              draw: 2,
              loss: 6,
              goals_for: 19,
              goals_against: 17,
              goal_diff: 2,
              points: 17,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:45",
                name: "Southampton FC",
              },
              rank: 11,
              played: 13,
              win: 5,
              draw: 2,
              loss: 6,
              goals_for: 17,
              goals_against: 16,
              goal_diff: 1,
              points: 17,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:48",
                name: "Everton FC",
              },
              rank: 12,
              played: 13,
              win: 5,
              draw: 2,
              loss: 6,
              goals_for: 18,
              goals_against: 20,
              goal_diff: -2,
              points: 17,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:6",
                name: "Burnley FC",
              },
              rank: 13,
              played: 14,
              win: 4,
              draw: 5,
              loss: 5,
              goals_for: 11,
              goals_against: 15,
              goal_diff: -4,
              points: 17,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:7",
                name: "Crystal Palace FC",
              },
              rank: 14,
              played: 14,
              win: 4,
              draw: 5,
              loss: 5,
              goals_for: 14,
              goals_against: 21,
              goal_diff: -7,
              points: 17,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:40",
                name: "Aston Villa FC",
              },
              rank: 15,
              played: 11,
              win: 5,
              draw: 1,
              loss: 5,
              goals_for: 20,
              goals_against: 16,
              goal_diff: 4,
              points: 16,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:39",
                name: "Newcastle United FC",
              },
              rank: 16,
              played: 13,
              win: 4,
              draw: 3,
              loss: 6,
              goals_for: 16,
              goals_against: 22,
              goal_diff: -6,
              points: 15,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:30",
                name: "Brighton & Hove Albion FC",
              },
              rank: 17,
              played: 13,
              win: 1,
              draw: 7,
              loss: 5,
              goals_for: 12,
              goals_against: 17,
              goal_diff: -5,
              points: 10,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:15",
                name: "Sheffield United FC",
              },
              rank: 18,
              played: 14,
              win: 3,
              draw: 1,
              loss: 10,
              goals_for: 10,
              goals_against: 20,
              goal_diff: -10,
              points: 10,
              change: 1,
            },
            {
              team: {
                id: "sr:competitor:43",
                name: "Fulham FC",
              },
              rank: 19,
              played: 14,
              win: 2,
              draw: 4,
              loss: 8,
              goals_for: 8,
              goals_against: 18,
              goal_diff: -10,
              points: 10,
              change: -1,
            },
            {
              team: {
                id: "sr:competitor:8",
                name: "West Bromwich Albion",
              },
              rank: 20,
              played: 14,
              win: 2,
              draw: 4,
              loss: 8,
              goals_for: 9,
              goals_against: 33,
              goal_diff: -24,
              points: 10,
              change: 0,
            },
          ],
        },
      ],
    },
    {
      tie_break_rule:
        "In the event that two (or more) teams have an equal number of points, the following rules break the tie:\r\n1. Goal difference\r\n2. Goals scored",
      type: "away",
      groups: [
        {
          id: "sr:group:51387",
          team_standings: [
            {
              team: {
                id: "sr:competitor:31",
                name: "Leicester City FC",
              },
              rank: 1,
              played: 14,
              win: 9,
              draw: 4,
              loss: 1,
              goals_for: 26,
              goals_against: 12,
              goal_diff: 14,
              points: 31,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:17",
                name: "Manchester City FC",
              },
              rank: 2,
              played: 13,
              win: 9,
              draw: 3,
              loss: 1,
              goals_for: 25,
              goals_against: 8,
              goal_diff: 17,
              points: 30,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:35",
                name: "Manchester United FC",
              },
              rank: 3,
              played: 14,
              win: 8,
              draw: 6,
              loss: 0,
              goals_for: 25,
              goals_against: 13,
              goal_diff: 12,
              points: 30,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:48",
                name: "Everton FC",
              },
              rank: 4,
              played: 13,
              win: 9,
              draw: 2,
              loss: 2,
              goals_for: 21,
              goals_against: 13,
              goal_diff: 8,
              points: 29,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:38",
                name: "Chelsea FC",
              },
              rank: 5,
              played: 14,
              win: 7,
              draw: 3,
              loss: 4,
              goals_for: 19,
              goals_against: 14,
              goal_diff: 5,
              points: 24,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:40",
                name: "Aston Villa FC",
              },
              rank: 6,
              played: 14,
              win: 7,
              draw: 2,
              loss: 5,
              goals_for: 18,
              goals_against: 11,
              goal_diff: 7,
              points: 23,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:33",
                name: "Tottenham Hotspur FC",
              },
              rank: 7,
              played: 13,
              win: 6,
              draw: 3,
              loss: 4,
              goals_for: 21,
              goals_against: 14,
              goal_diff: 7,
              points: 21,
              change: 3,
            },
            {
              team: {
                id: "sr:competitor:37",
                name: "West Ham United FC",
              },
              rank: 8,
              played: 13,
              win: 6,
              draw: 3,
              loss: 4,
              goals_for: 19,
              goals_against: 16,
              goal_diff: 3,
              points: 21,
              change: -1,
            },
            {
              team: {
                id: "sr:competitor:44",
                name: "Liverpool FC",
              },
              rank: 9,
              played: 13,
              win: 5,
              draw: 5,
              loss: 3,
              goals_for: 25,
              goals_against: 18,
              goal_diff: 7,
              points: 20,
              change: -1,
            },
            {
              team: {
                id: "sr:competitor:42",
                name: "Arsenal FC",
              },
              rank: 10,
              played: 13,
              win: 6,
              draw: 1,
              loss: 6,
              goals_for: 18,
              goals_against: 13,
              goal_diff: 5,
              points: 19,
              change: -1,
            },
            {
              team: {
                id: "sr:competitor:34",
                name: "Leeds United",
              },
              rank: 11,
              played: 13,
              win: 6,
              draw: 0,
              loss: 7,
              goals_for: 24,
              goals_against: 27,
              goal_diff: -3,
              points: 18,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:7",
                name: "Crystal Palace FC",
              },
              rank: 12,
              played: 13,
              win: 5,
              draw: 2,
              loss: 6,
              goals_for: 15,
              goals_against: 22,
              goal_diff: -7,
              points: 17,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:30",
                name: "Brighton & Hove Albion FC",
              },
              rank: 13,
              played: 13,
              win: 4,
              draw: 4,
              loss: 5,
              goals_for: 14,
              goals_against: 16,
              goal_diff: -2,
              points: 16,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:3",
                name: "Wolverhampton Wanderers FC",
              },
              rank: 14,
              played: 14,
              win: 4,
              draw: 3,
              loss: 7,
              goals_for: 13,
              goals_against: 23,
              goal_diff: -10,
              points: 15,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:43",
                name: "Fulham FC",
              },
              rank: 15,
              played: 13,
              win: 2,
              draw: 7,
              loss: 4,
              goals_for: 13,
              goals_against: 15,
              goal_diff: -2,
              points: 13,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:45",
                name: "Southampton FC",
              },
              rank: 16,
              played: 13,
              win: 3,
              draw: 4,
              loss: 6,
              goals_for: 14,
              goals_against: 28,
              goal_diff: -14,
              points: 13,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:6",
                name: "Burnley FC",
              },
              rank: 17,
              played: 13,
              win: 3,
              draw: 3,
              loss: 7,
              goals_for: 8,
              goals_against: 20,
              goal_diff: -12,
              points: 12,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:39",
                name: "Newcastle United FC",
              },
              rank: 18,
              played: 13,
              win: 3,
              draw: 2,
              loss: 8,
              goals_for: 11,
              goals_against: 22,
              goal_diff: -11,
              points: 11,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:8",
                name: "West Bromwich Albion",
              },
              rank: 19,
              played: 13,
              win: 1,
              draw: 4,
              loss: 8,
              goals_for: 11,
              goals_against: 23,
              goal_diff: -12,
              points: 7,
              change: 0,
            },
            {
              team: {
                id: "sr:competitor:15",
                name: "Sheffield United FC",
              },
              rank: 20,
              played: 13,
              win: 1,
              draw: 1,
              loss: 11,
              goals_for: 6,
              goals_against: 23,
              goal_diff: -17,
              points: 4,
              change: 0,
            },
          ],
        },
      ],
    },
  ],
};
