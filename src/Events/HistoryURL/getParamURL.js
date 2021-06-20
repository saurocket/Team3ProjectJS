export function getQueryParam (param) {
  let queries = window.location.search, regex, resRegex, results, response;
  param = encodeURIComponent(param);
  regex = new RegExp('[\\?&]' + param + '=([^&#]*)', 'g');
  resRegex = new RegExp('(.*)=([^&#]*)');
   results = queries.match(regex);
   
  if (!results) {
      return '';
  }
  response = results.map(function (result) {
    let parsed = resRegex.exec(result);

    if (!parsed) {
        return '';
    }

    return parsed[2].match(/(^\d+$)/) ? Number(parsed[2]) : parsed[2];
  })

  return response.length > 1 ? response : response[0];
};
// ПРИМЕР
// принимает строку означающую что искать в search к примеру "query"
// ?query=кот&page=1&per_page=12`
// возвращает ее значение  "кот"
