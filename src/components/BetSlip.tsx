/* Authored bet-slip visual for the sportsbook product. */

export default function BetSlip() {
  return (
    <div className="art" role="img" aria-label="Preview of an Oddsly bet slip: a match with three-way odds and a parlay payout">
      <div className="slip__match">
        <div className="slip__teams">
          <span className="slip__badge slip__badge--a">AR</span>
          Arsenal
        </div>
        <span className="slip__vs">20:45</span>
        <div className="slip__teams">
          <span className="slip__badge slip__badge--b">CH</span>
          Chelsea
        </div>
      </div>

      <div className="slip__odds">
        <div className="odd">
          <b>Home</b>
          <span>2.05</span>
        </div>
        <div className="odd">
          <b>Draw</b>
          <span>3.40</span>
        </div>
        <div className="odd is-pick">
          <b>Away</b>
          <span>3.75</span>
        </div>
      </div>

      <div className="slip__row">
        <span>Stake</span>
        <b>250.00 USDT</b>
      </div>
      <div className="slip__row">
        <span>Parlay legs</span>
        <b>3</b>
      </div>

      <div className="slip__payout">
        <span>Potential payout</span>
        <b>1,918.75</b>
      </div>

      <div className="btn btn--primary slip__cta">Place bet</div>
    </div>
  );
}
