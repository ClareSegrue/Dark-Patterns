import "../styles/App.css";
import logo from "../Images/star.png";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="button-container">
          <Link to="/">
            <button className="dark-button" id="default-button">
              RETURN HOME
            </button>
          </Link>
        </div>
        <div className="header-title">
          cob's soulo game.exe
          <img src={logo} width="32" height="32" alt="x"></img>
        </div>
      </header>
      <div className="flex-table" id="gif-container">
        <div className="main-panel">
        <div id="termsOfPurchase">
            <b>TERMS AND CONDITIONS OF PURCHASE</b><br></br>
            <br></br>
            By accepting this agreement you enter into a binding and eternal contract with the ruinous powers to
            engage in full and total custodianship of <b id="warning">(1) human soul</b>, granted to you in exchange for the payment
            described in your purchase summary. You will also be <b>mailed a frozen fish</b> as described to you in the
            listing. This fish, henceforth called the “fish vessel”, represents the binding terms of your
            custodianship, and <b id="warning">must be kept frozen at all times</b> to avoid the risk of an all-consuming flame that can
            never be quenched. <br></br><br></br><b id="warning">You hereby indemnify Cob’s of any harm caused by allowing the fish vessel to
              thaw, including but not limited to property damage, incineration, and the formation of gaping maws of
              despair on your property.</b><br></br><br></br>

            By consuming the fish vessel, you <b id="warning">forfeit any rights to the above contracted soul</b>, and agree to render
            your soul onto Cob’s, or our chosen agent, upon your expiration. To cancel this contract at any time,
            simply <b id="warning">resurrect the fish vessel using the necromantic arts</b>, then cast the living fish vessel into a suitable
            void, no less than 24 miles deep. Attach a notarized copy of your name, social security number, order
            number, and exact second of birth to ensure processing of your cancellation.
          </div>
        </div>
      </div>
    </div>
  );
}
