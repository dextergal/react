// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  const firstName = 'Juan';
  const lastName = 'Dela Cruz';
  const age = 25;
  const arr = [1,2,3,4,5];
  return (
    <div className="App">
        <Header />
          <main>
            <h1>Hello {firstName} {lastName} {age} {arr} </h1>
          </main>
        <Footer />
    </div>
  );
}

export default App;
