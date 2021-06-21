
const CHANGE_INPUT_EVENTS = 'CHANGE_INPUT_EVENTS';
const CHANGE_SELECT_COUNTRY = 'CHANGE_SELECT_COUNTRY'
const CHANGE_INPUT_COUNTRY = "CHANNGE_INPUT_COUNTRY"
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE"
const CHANGE_COUNTRY_CODE = 'CHANGE_COUNTRY_CODE'

const initialState = {
  inputTitle: null,
  countryCode: null,
  inputCountry: null,
  pageSize: 20,
  currentPage: 1,
  countryData: [
    {
      "countryCode":"US",
      "name": "United States Of America"
    },
    {
      "countryCode":"AD",
      "name": "Andorra"
    },
    {
      "countryCode":"AI",
      "name": "Anguilla"
    },
    {
      "countryCode":"AR",
      "name": "Argentina"
    },
    {
      "countryCode":"AU",
      "name": "Australia"
    },
    {
      "countryCode":"AT",
      "name": "Austria"
    },
    {
      "countryCode":"AZ",
      "name": "Azerbaijan"
    },
    {
      "countryCode":"BS",
      "name": "Bahamas"
    },
    {
      "countryCode":"BH",
      "name": "Bahrain"
    },
    {
      "countryCode":"BB",
      "name": "Barbados"
    },
    {
      "countryCode":"BE",
      "name": "Belgium"
    },
    {
      "countryCode":"BM",
      "name": "Bermuda"
    },
    {
      "countryCode":"BR",
      "name": "Brazil"
    },
    {
      "countryCode":"BG",
      "name": "Bulgaria"
    },
    {
      "countryCode":"CA",
      "name": "Canada"
    },
    {
      "countryCode":"CL",
      "name": "Chile"
    },
    {
      "countryCode":"CN",
      "name": "China"
    },
    {
      "countryCode":"CO",
      "name": "Colombia"
    },
    {
      "countryCode":"CR",
      "name": "Costa Rica"
    },
    {
      "countryCode":"HR",
      "name": "Croatia"
    },
    {
      "countryCode":"CY",
      "name": "Cyprus"
    },
    {
      "countryCode":"CZ",
      "name": "Czech Republic"
    },
    {
      "countryCode":"DK",
      "name": "Denmark"
    },
    {
      "countryCode":"DO",
      "name": "Dominican Republic"
    },
    {
      "countryCode":"EC",
      "name": "Ecuador"
    },
    {
      "countryCode":"EE",
      "name": "Estonia"
    },
    {
      "countryCode":"FO",
      "name": "Faroe Islands"
    },
    {
      "countryCode":"FI",
      "name": "Finland"
    },
    {
      "countryCode":"FR",
      "name": "France"
    },
    {
      "countryCode":"GE",
      "name": "Georgia"
    },
    {
      "countryCode":"DE",
      "name": "Germany"
    },
    {
      "countryCode":"GH",
      "name": "Ghana"
    },
    {
      "countryCode":"GI",
      "name": "Gibraltar"
    },
    {
      "countryCode":"GB",
      "name": "Great Britain"
    },
    {
      "countryCode":"GR",
      "name": "Greece"
    },
    {
      "countryCode":"HK",
      "name": "Hong Kong"
    },
    {
      "countryCode":"HU",
      "name": "Hungary"
    },
    {
      "countryCode":"IS",
      "name": "Iceland"
    },
    {
      "countryCode":"IN",
      "name": "India"
    },
    {
      "countryCode":"IE",
      "name": "Ireland"
    },
    {
      "countryCode":"IL",
      "name": "Israel"
    },
    {
      "countryCode":"IT",
      "name": "Italy"
    },
    {
      "countryCode":"JM",
      "name": "Jamaica"
    },
    {
      "countryCode":"JP",
      "name": "Japan"
    },
    {
      "countryCode":"KR",
      "name": "Korea, Republic of"
    },
    {
      "countryCode":"LV",
      "name": "Latvia"
    },
    {
      "countryCode":"LB",
      "name": "Lebanon"
    },
    {
      "countryCode":"LT",
      "name": "Lithuania"
    },
    {
      "countryCode":"LU",
      "name": "Luxembourg"
    },
    {
      "countryCode":"MY",
      "name": "Malaysia"
    },
    {
      "countryCode":"MT",
      "name": "Malta"
    },
    {
      "countryCode":"MX",
      "name": "Mexico"
    },
    {
      "countryCode":"MC",
      "name": "Monaco"
    },
    {
      "countryCode":"ME",
      "name": "Montenegro"
    },
    {
      "countryCode":"MA",
      "name": "Morocco"
    },
    {
      "countryCode":"NL",
      "name": "Netherlands"
    },
    {
      "countryCode":"AN",
      "name": "Netherlands Antilles"
    },
    {
      "countryCode":"NZ",
      "name": "New Zealand"
    },
    {
      "countryCode":"ND",
      "name": "Northern Ireland"
    },
    {
      "countryCode":"NO",
      "name": "Norway"
    },
    {
      "countryCode":"PE",
      "name": "Peru"
    },
    {
      "countryCode":"PL",
      "name": "Poland"
    },
    {
      "countryCode":"PT",
      "name": "Portugal"
    },
    {
      "countryCode":"RO",
      "name": "Romania"
    },
    {
      "countryCode":"RU",
      "name": "Russian Federation"
    },
    {
      "countryCode":"LC",
      "name": "Saint Lucia"
    },
    {
      "countryCode":"SA",
      "name": "Saudi Arabia"
    },
    {
      "countryCode":"RS",
      "name": "Serbia"
    },
    {
      "countryCode":"SG",
      "name": "Singapore"
    },
    {
      "countryCode":"SK",
      "name": "Slovakia"
    },
    {
      "countryCode":"SI",
      "name": "Slovenia"
    },
    {
      "countryCode":"ZA",
      "name": "South Africa"
    },
    {
      "countryCode":"ES",
      "name": "Spain"
    },
    {
      "countryCode":"SE",
      "name": "Sweden"
    },
    {
      "countryCode":"CH",
      "name": "Switzerland"
    },
    {
      "countryCode":"TW",
      "name": "Taiwan"
    },
    {
      "countryCode":"TH",
      "name": "Thailand"
    },
    {
      "countryCode":"TT",
      "name": "Trinidad and Tobago"
    },
    {
      "countryCode":"TR",
      "name": "Turkey"
    },
    {
      "countryCode":"UA",
      "name": "Ukraine"
    },
    {
      "countryCode":"AE",
      "name": "United Arab Emirates"
    },
    {
      "countryCode":"UY",
      "name": "Uruguay"
    },
    {
      "countryCode":"VE",
      "name": "Venezuela"
    }
  ],
  filtredCountryData:[]
};


export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_EVENTS:
      return { ...state, inputTitle: action.value};
    case CHANGE_SELECT_COUNTRY:{
      return {...state, countryCode: action.value}
    }
    case CHANGE_INPUT_COUNTRY:{
      const filterArr = state.countryData.filter(item=> item.name.includes(action.value))
      return {...state,inputCountry:action.value, filtredCountryData: [...filterArr]}
    }
    case CHANGE_CURRENT_PAGE: {
      return {...state, currentPage: action.value}
    }
    case CHANGE_COUNTRY_CODE: {
      return {...state, countryCode: action.value}
    }
    default:
      return state;
  }

};

export const onInputEventActionCreator = (value) => {
  return {
    type: CHANGE_INPUT_EVENTS,
    value,
  };
};
export const onSelectEvent = (value) => {
  return {
    type: CHANGE_SELECT_COUNTRY,
    value
  }
}

export const onInputCountry = (value) => {
  return {
    type: CHANGE_INPUT_COUNTRY,
    value
  }
}
export const onPageChanged = (value) => {
  return {
    type: CHANGE_CURRENT_PAGE,
    value
  }
}
export const onChangeCountryCode = value => {
  return {
    type: CHANGE_COUNTRY_CODE,value
  }
}
