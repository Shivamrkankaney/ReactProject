

export function HeaderComponenent(){

    return(
        <div className="container-fluid">
             <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand ms-4 text-white" href="home"> carbonzeroed</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-4 me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active text-white ms-4" aria-current="page" href="home">Home</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white ms-4" href="home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  offering
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item " href="../App.js">Action</a></li>
                  <li><a className="dropdown-item" href="home">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="home">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white ms-4" aria-current="page" href="home">Pricing</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white ms-4" href="home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Resources
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item " href="../src/App.js">Action</a></li>
                  <li><a className="dropdown-item" href="../index.jsx">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="home">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white ms-4" href="home" tabindex="-1" aria-disabled="true">Marketplace</a>
              </li>
            </ul>
            <form className="d-flex">

              <ul className="navbar-nav me-4 mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-white me-4" aria-current="page" href="home">Login</a>
                </li>

              <button className="btn btn-outline-success" type="submit">SignUp</button>
              </ul>
            </form>
          </div>
        </div>
      </nav>

        </div>
    )
}
