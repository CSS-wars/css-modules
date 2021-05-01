// https://gist.github.com/vincentbollaert/e90def9b351d8d97c90ef7cfd887685e

export default `
  html {
    height: 100%;
    background-color: var(--white-smoke);
    color: var(--sonic-silver);
    font-family: 'Barlow Semi Condensed', sans-serif;
    box-sizing: border-box;
    font-size: 62.5%;
    
    --font-size-xxsm: 0.9rem;
    --font-size-xsm: 1remm;
    --font-size-sm: 1.1rem;
    --font-size-md: 1.2rem;
    --font-size-lg: 1.3rem;
    --font-size-xlg: 1.6remm;

    --size-xsm: 0.4rem;
    --size-sm: 0.8rem;
    --size-md: 1.2rem;
    --size-lg: 1.6rem;
    --size-xlg: 2.4rem;

    --capri: #3dc3ff;
    --sky-blue: #78E0FF;
    --light-sea-green: #21baa6;
    --amazonite: #03d2b6;
    --steel-blue: #607D8B;
    --medium-sky-blue: #73DAF5;

    --pastel-green: #7bd37c;
    --sunset-orange: #ff5d5d;
    --red-orange: #ff4d4d;
    --very-light-tangelo: #ffae74;

    --white: #fff;
    --white-smoke: #f5f5f5;
    --azureish-white: #d5f0f7;
    --snow: #fafafa;
    --isabelline: #eee;
    --lavender: #e2e7f9;
    --gainsboro: #dedede;
    --pastel-gray: #ccc;
    --gray-x11: #bbb;
    --quick-silver: #a2a2a2;
    --rhythm: #71788f;
    --sonic-silver: #787878;
    --sonic-silver-transparency: #f5f5f573;
    --roman-silver: #838899;
    --cool-gray: #8f99b9;
    --granite-gray: #666;
    --arsenic: #444;
    --onyx: #393939;
    --independence: #4f5466;
    --jet: #333;
    --charcoal: #3d4150;
    --charleston-green: #282828;
    --charleston-green-2: #2d2d2d;
    --raisin-black: #222121;
    --eerie-black: #1e1e1e;
    --dark-transparency: rgba(0, 0, 0, 0.4);

    --transition: 0.2s ease-out;
    --box-shadow-light: 0 2px 11px -7px #0000004f;
  }
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    height: 100%;
    font-size: 1.2rem;
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: var(--sonic-silver);
    text-decoration: none;
    cursor: pointer;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  input,
  button {
    border: none;
    outline: none;
  }
  input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  button {
    padding: 0;
    line-height: 1;
    font-family: inherit;
    color: inherit;
    text-transform: inherit;
    font-weight: inherit;
    text-align: inherit;
    background: transparent;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    font-family: 'Barlow Semi Condensed', sans-serif
  }
  p {
    margin: 0;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th {
    text-align: left;
  }
`
