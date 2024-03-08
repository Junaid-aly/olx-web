import "./App.css";
import Router from "./config/router";
import Footer from "./reusable/footer/Footer";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router />

          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
