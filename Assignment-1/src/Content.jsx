import Header from "./Header"
import Footer from "./Footer"

function App() {
    return (
        <div className="container">
            <div className="main">
                <Header />
                <div className="img">
                    <img src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VyfGVufDB8fDB8fHww"/>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default App