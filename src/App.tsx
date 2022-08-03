import Main from './Components/Main/Main';
import { QueryClient , QueryClientProvider } from '@tanstack/react-query';
import Header from './Components/Header/Header';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Header />
        <Main />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
