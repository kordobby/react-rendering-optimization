import { useRenderCount } from "./hooks/useRenderCount";
import StepOneScreen from "./pages/StepOneScreen";
import Layout from "./components/GNB/Layout";
function App() {
  useRenderCount("render Home");
  return (
    <Layout>
      <StepOneScreen />
    </Layout>
  );
}

export default App;
