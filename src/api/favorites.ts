import {auth, firestore} from 'react-native-firebase';
import {ResponseDetailsSchema} from '.';

type MovieRef = {
  movie_id: string;
  poster_path: string;
  title: string;
  user_id: string;
};

async function addFavorite(movie: ResponseDetailsSchema): Promise<void> {
  const user = auth().currentUser;
  if (user) {
    const ref = firestore().collection('movies');

    if (movie.id && movie.poster_path && movie.title) {
      const newFavorite: MovieRef = {
        movie_id: movie.id.toString(),
        poster_path: movie.poster_path,
        title: movie.title,
        user_id: user.uid
      };

      const document = await firestore()
        .collection('movies')
        .where('user_id', '=', user.uid)
        .where('movie_id', '=', movie.id.toString())
        .get();

      if (document.docs.length === 0) {
        await ref.add(newFavorite);
      }
    }
  }
}

async function getFavorites(): Promise<MovieRef[]> {
  const user = auth().currentUser;
  if (user) {
    const response = await firestore()
      .collection('movies')
      .where('user_id', '=', user.uid)
      .get();

    return response.docs.map<MovieRef>(doc => {
      const {movie_id, poster_path, title, user_id} = <MovieRef>doc.data();
      return {
        movie_id,
        poster_path,
        title,
        user_id
      };
    });
  }
  return [];
}

async function removeFavorite(movie: ResponseDetailsSchema): Promise<void> {
  const user = auth().currentUser;
  if (user) {
    const ref = firestore().collection('movies');

    if (movie.id) {
      const query = await ref
        .where('user_id', '=', user.uid)
        .where('movie_id', '=', movie.id.toString())
        .get();

      query.forEach(document => {
        document.ref.delete();
      });
    }
  }
}

export {addFavorite, getFavorites, removeFavorite};
