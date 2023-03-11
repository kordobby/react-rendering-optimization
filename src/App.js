import { useRenderCount } from "./hooks/useRenderCount";
import Router from "./shared/Router";
import Layout from "./components/GNB/Layout";
function App() {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
