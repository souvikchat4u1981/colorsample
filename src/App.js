import logo from "./logo.svg";
import "./App.css";
import colors from "./colors.json";
import CopyToClipboard from "react-copy-to-clipboard";

function App() {
  var height = 100 / colors.length - 5 + "vh";

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        {colors &&
          colors.map((colorGroup, index) => {
            return (
              <div className="col-sm-6">
                <div key={index} className="card mb-2">
                  <div className="card-header">{colorGroup.groupName}</div>
                  <div className="card-body">
                    <div
                      className="d-flex justify-content-around flex-wrap"
                      style={{ height: "auto" }}
                    >
                      {colorGroup.colors.map((c, index) => {
                        return (
                          <CopyToClipboard text={c.color}>
                            <div
                              className="color-sample text-center p-4 mb-2 me-1"
                              style={{ background: c.color, cursor: "pointer" }}
                              title={c.color}
                            >
                              {c.name}
                            </div>
                          </CopyToClipboard>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
