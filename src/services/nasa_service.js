import moment from 'moment/moment';

export default class NASA_API {
  _api_key = 'api_key=hOVauiAGyX2dhuhzxkeCUAIYpZVQQQaZUU6rUfnU';
  _base_URL = 'https://api.nasa.gov/planetary/apod';

  getTodayData = async () => {
    const res = await fetch(`${this._base_URL}?${this._api_key}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET'
        }
      });
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._base_URL}?${this._api_key}, received ${res.status}`)
    }
    const objData = await res.json();
    return this._transformObjectData(objData);
  };



  getOneRandomItem = async () => {
    const res = await fetch(`${this._base_URL}?${this._api_key}&count=1`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET'
        }
      });
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._base_URL}?${this._api_key}, received ${res.status}`)
    }
    const objData = await res.json();
    return this._transformObjectData(objData[0]);
  };



  getRandomItems = async (value) => {
    const res = await fetch(`${this._base_URL}?${this._api_key}&count=${value}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET'
        }
      });
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._base_URL}?${this._api_key}, received ${res.status}`)
    }
    const objData = await res.json();
    return objData;
  };



  getTimeIntervalItems = async (date1, date2) => {
    const res = await fetch(`${this._base_URL}?${this._api_key}&start_date=${date1}&end_date=${date2}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET'
        }
      });
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._base_URL}?${this._api_key}, received ${res.status}`)
    }
    const objData = await res.json();
    return objData;
  };



  _transformObjectData = (objData) => {
    return {
      date: moment(objData.date, 'YYYY-MM-DD').format('DD-MM-YYYY'),
      description: objData.explanation,
      title: objData.title,
      copyright: objData.copyright,
      imgLowResURL: objData.url,
      imgHiResURL: objData.hdurl
    };
  };

};