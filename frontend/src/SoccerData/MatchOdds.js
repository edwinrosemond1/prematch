let url =
  "https://api.sportradar.us/soccer-t3/eu/en/matches/sr:match:23203791/probabilities.json?api_key=bq4g8trvq6grz8zevvcnu27f";

export const matchOdds = {
  generated_at: "2021-03-09T14:34:59+00:00",
  schema:
    "http://schemas.sportradar.com/bsa/soccer/v1/json/endpoints/soccer/match_probabilities.json",
  sport_event: {
    id: "sr:match:23203791",
    scheduled: "2020-09-13T15:30:00+00:00",
    start_time_tbd: false,
    tournament_round: {
      type: "group",
      number: 1,
    },
    season: {
      id: "sr:season:77179",
      name: "Premier League 20/21",
      start_date: "2020-09-12",
      end_date: "2021-05-24",
      year: "20/21",
      tournament_id: "sr:tournament:17",
    },
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
    },
    competitors: [
      {
        id: "sr:competitor:33",
        name: "Tottenham Hotspur FC",
        country: "England",
        country_code: "ENG",
        abbreviation: "TOT",
        qualifier: "home",
      },
      {
        id: "sr:competitor:48",
        name: "Everton FC",
        country: "England",
        country_code: "ENG",
        abbreviation: "EVE",
        qualifier: "away",
      },
    ],
    venue: {
      id: "sr:venue:28762",
      name: "Tottenham Hotspur Stadium",
      capacity: 62000,
      city_name: "London",
      country_name: "England",
      map_coordinates: "51.604444, -0.066389",
      country_code: "ENG",
    },
  },
  probabilities: {
    markets: [
      {
        name: "3way",
        outcomes: [
          {
            name: "home_team_winner",
            probability: 46,
          },
          {
            name: "away_team_winner",
            probability: 25.7,
          },
          {
            name: "draw",
            probability: 28.2,
          },
        ],
      },
    ],
  },
};

export const matchOdds2 = {
  generated_at: "2021-03-20T02:27:07+00:00",
  schema:
    "http://schemas.sportradar.com/bsa/soccer/v1/json/endpoints/soccer/match_probabilities.json",
  sport_event: {
    id: "sr:match:23204353",
    scheduled: "2021-03-03T18:00:00+00:00",
    start_time_tbd: false,
    tournament_round: {
      type: "group",
      number: 29,
    },
    season: {
      id: "sr:season:77179",
      name: "Premier League 20/21",
      start_date: "2020-09-12",
      end_date: "2021-05-24",
      year: "20/21",
      tournament_id: "sr:tournament:17",
    },
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
    },
    competitors: [
      {
        id: "sr:competitor:15",
        name: "Sheffield United FC",
        country: "England",
        country_code: "ENG",
        abbreviation: "SHU",
        qualifier: "home",
      },
      {
        id: "sr:competitor:40",
        name: "Aston Villa FC",
        country: "England",
        country_code: "ENG",
        abbreviation: "VIL",
        qualifier: "away",
      },
    ],
    venue: {
      id: "sr:venue:598",
      name: "Bramall Lane",
      capacity: 32702,
      city_name: "Sheffield",
      country_name: "England",
      map_coordinates: "53.370278,-1.470833",
      country_code: "ENG",
    },
  },
  probabilities: {
    markets: [
      {
        name: "3way",
        outcomes: [
          {
            name: "home_team_winner",
            probability: 27.3,
          },
          {
            name: "away_team_winner",
            probability: 43.9,
          },
          {
            name: "draw",
            probability: 28.8,
          },
        ],
      },
    ],
  },
};
