import GlobalStyle from './assets/styles/globalStyles';
import Header from './components/Header';
import AppRoutes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
