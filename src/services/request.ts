import axios from 'axios';
import {RequestService} from '../types';

export default class Request implements RequestService {
  moviedbAPI = axios.create({
    baseURL:
      'https://api.themoviedb.org/3/movie/76341?api_key=276d77b1df9d3d083b6b6847042a4fec',
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
  });
}
