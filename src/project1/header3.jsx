import "./header3.css";
export function Header3(){
    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between p-2 bg-dark text-white">
                <div className="h3">Shopper</div>
                <div>
                    <span className="me-4">
                        <li style={{display:"inline-block"}} className="dropdown"> <a href="home">Offering</a>

                  <div className="dropcnt">
                    <a href="home">Link1 </a>
                    <a href="home">Link1 </a>
                    <a href="home">Link1 </a></div>           </li></span>
                    <span className="me-4">link</span>
                    <span className="me-4">Resources</span>
                    <span className="me-4">About</span>
                    <span className="me-4">MarketPrice</span>
                </div>
                <div>
                    <span>Login</span>
                    <span><button>SignIn</button></span>
                </div>
            </header>
        </div>
    )
}
