import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Header from "./components/Header";
import { Routes } from "./routes/AppRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
      retry: 1,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <main>
          <Header />
          <Switch>
            {Routes.map((route, i) => (
              <Route key={i} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </main>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
