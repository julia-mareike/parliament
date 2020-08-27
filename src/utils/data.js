export const pastVotes = {
  1999: {
    votes: {
      Labour: 38.7,
      National: 30.5,
      ACT: 7.0,
      Alliance: 7.7,
      Greens: 5.2,
      NZFirst: 4.3,
      UnitedNZ: 0.5,
      Other: 6.1
    },
    electorates: {
      Labour: 41,
      National: 22,
      Greens: 1,
      NZFirst: 1,
      UnitedNZ: 1,
      Alliance: 1,
      ACT: 0,
      Other: 0
    }
  },
  2002: {
    votes: {
      Labour: 41.26,
      National: 20.93,
      NZFirst: 10.38,
      ACT: 7.14,
      Greens: 7,
      UnitedFuture: 6.69,
      JAProgressive: 1.70,
      Alliance: 1.27,
      Other: 3.63
    },
    electorates: {
      Labour: 45,
      National: 21,
      NZFirst: 1,
      UnitedFuture: 1,
      JAProgressive: 1,
      Greens: 0,
      ACT: 0,
      Alliance: 0,
      Other: 0
    }
  },
  2005: {
    votes: {
      Labour: 41.10,
      National: 39.10,
      NZFirst: 5.72,
      Greens: 5.30,
      UnitedFuture: 2.67,
      Māori: 2.12,
      ACT: 1.51,
      JAProgressive: 1.16,
      Other: 1.32
    },
    electorates: {
      National: 31,
      Labour: 31,
      Greens: 0,
      NZFirst: 0,
      Māori: 4,
      ACT: 1,
      UnitedFuture: 1,
      JAProgressive: 1,
      Other: 0
    }
  },
  2008: {
    votes: {
      National: 44.93,
      Labour: 33.9,
      Greens: 6.72,
      NZFirst: 4.07,
      ACT: 3.65,
      Māori: 2.39,
      JAProgressive: 0.91,
      UnitedFuture: 0.87,
      Other: 2.48
    },
    electorates: {
      National: 41,
      Labour: 21,
      Greens: 0,
      NZFirst: 0,
      Māori: 5,
      ACT: 1,
      UnitedFuture: 1,
      JAProgressive: 1,
      Other: 0
    }
  },
  2011: {
    votes: {
      National: 47.31,
      Labour: 27.48,
      Greens: 11.06,
      NZFirst: 6.59,
      Māori: 1.43,
      Mana: 1.08,
      ACT: 1.07,
      UnitedFuture: 0.60,
      Other: 3.37
    },
    electorates: {
      National: 42,
      Labour: 22,
      Greens: 0,
      NZFirst: 0,
      Māori: 3,
      ACT: 1,
      Mana: 1,
      UnitedFuture: 1,
      Other: 0
    }
  },
  2014: {
    votes: {
      National: 47.04,
      Labour: 25.13,
      Greens: 10.7,
      NZFirst: 8.66,
      Conservative: 3.97,
      Mana: 1.42,
      Māori: 1.32,
      ACT: 0.69,
      UnitedFuture: 0.22,
      Other: 0.84
    },
    electorates: {
      National: 41,
      Labour: 27,
      Greens: 0,
      NZFirst: 0,
      Māori: 1,
      ACT: 1,
      Mana: 0,
      UnitedFuture: 1,
      Conservative: 0,
      Other: 0
    }
  },
  2017: {
    votes: {
      National: 44.4,
      Labour: 36.9,
      NZFirst: 7.2,
      Greens: 6.3,
      TOP: 2.4,
      Māori: 1.2,
      ACT: 0.5,
      Legalise: 0.3,
      Mana: 0.1,
      UnitedFuture: 0.1,
      Other: 0.6
    },
    electorates: {
      National: 41,
      Labour: 29,
      Greens: 0,
      NZFirst: 0,
      Māori: 0,
      ACT: 1,
      TOP: 0,
      Mana: 0,
      UnitedFuture: 0,
      Legalise: 0,
      Other: 0
    }
  }
}

export const years = Object.keys(pastVotes).sort().reverse()

export const activeParties = [
  'Labour',
  'National',
  'Greens',
  'ACT',
  'Māori',
  'Advance',
  'Legalise',
  'Heartland',
  'NewConservative',
  'NZFirst',
  'OneParty',
  'Outdoors',
  'SocialCredit',
  'SustainableNZ',
  'TEAParty',
  'TOP',
  'VisionNZ'
]
