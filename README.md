# Moviedb App

An app for listing movies from [moviedb](https://developers.themoviedb.org/3/getting-started/introduction) API.

### Screenshots

![Login](https://i.imgur.com/9fcdjSn.png)
![Register](https://i.imgur.com/vD3KcQf.png)
![Popular](https://i.imgur.com/s7J2453.png)
![Favorites](https://i.imgur.com/Ky0jQBe.png)
![Details](https://i.imgur.com/belIt0X.png)
![Video](https://i.imgur.com/ZMS4OCC.png)

## Getting started

First you'll have to clone the App:

```bash
git clone https://github.com/vitorverasm/moviedb-app.git
```

Then, inside the project's folder, install it's dependencies.

With Yarn:

```bash
yarn
```

or npm:

```bash
npm install
```

## Settings

### API's and keys

You should configure your API's endpoint and API KEY by creating and `env.json` file in the project's folder. The shape to the json config file can be extracted from `env.example.json`.

```json
{
  "APP_NAME": "",
  "MOVIEDB_API_KEY": "",
  "MOVIEDB_API_BASE_URL": "",
  "YOUTUBE_API_KEY": ""
}
```

| Attribute       | Description                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| APP_NAME        | Name of the app (show in the login page and header.)                                                                               |
| MOVIEDB_API_KEY | Moviedb api key generated [How do I get one?](https://developers.themoviedb.org/3/getting-started/introduction)                    |
| MOVIEDB_API_KEY | Moviedb base url to make requests. Defaults to: `https://api.themoviedb.org/3/`                                                    |
| YOUTUBE_API_KEY | Google API and Youtube service enabled key. [How do I get one?](https://developers.google.com/youtube/v3/getting-started?hl=pt-br) |

### Keystore(Android)

To run the app in dev mode you'll need to generate a `debug.keystore` key. [Show me how](https://coderwall.com/p/r09hoq/android-generate-release-debug-keystores).

## Running

Now you can run the App with `react-native run-android` or `react-native run-ios` depending on your platform.

## Made with

- [React Native typescript template](https://github.com/react-native-community/react-native-template-typescript)
- [React Native Firebase](https://rnfirebase.io/) (Authentication and favorite movies)
- [React Native Paper](https://callstack.github.io/react-native-paper/index.html) (UI components)
- [React Native Youtube](https://github.com/inProgress-team/react-native-youtube) (Video component for trailers)
- [React Navigation 4.x.x](https://reactnavigation.org/en/) (Navigation)
- [Restful React](https://github.com/contiamo/restful-react) (This is amazing. Using API like hooks) :heart:
- [Formik](https://jaredpalmer.com/formik/docs/overview) (Handling forms)
- [yup](https://github.com/jquense/yup) (Validating forms)
- [Styled Components](https://www.styled-components.com/) (Make things beautiful)

Another resources that I've used:

- [UnDraw](https://undraw.co/)
- [AdobeXD](https://www.adobe.com/br/products/xd.html)
- [Flaticon](https://www.flaticon.com/)

## About Me

**Vitor Veras de Moura**

- [GitHub](https://github.com/vitor-veras)
- [LinkedIn](https://www.linkedin.com/in/vitor-veras/)
- Email: vitorverasm@gmail.com
