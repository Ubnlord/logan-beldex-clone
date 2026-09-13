// Study recreation — vanilla JS: nav, ticker, converter, plans filter, quotes.
(function () {
  "use strict";

  // Mobile nav
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Illustrative ticker (static demo data, animated with CSS-safe JS)
  var symbols = [
    ["EUR/USD", "1.0842", "+0.12%"],
    ["BDX/USD", "0.0452", "+1.40%"],
    ["BTC/USD", "67,410", "+0.86%"],
    ["IDX 100", "5,212.4", "-0.21%"],
    ["GBP/USD", "1.2710", "+0.05%"]
  ];
  var track = document.getElementById("tickerTrack");
  if (track) {
    track.innerHTML = symbols
      .map(function (s) {
        return '<span><b>' + s[0] + '</b> ' + s[1] + ' (' + s[2] + ')</span>';
      })
      .join("<span aria-hidden='true'>·</span>");
  }

  // Hero demo price
  var heroPrice = document.getElementById("heroPrice");
  var heroChange = document.getElementById("heroChange");
  var note = document.getElementById("panelNote");
  var base = 0.0452;
  function paintPrice(v, chg) {
    if (heroPrice) heroPrice.textContent = "$" + v.toFixed(4);
    if (heroChange) heroChange.textContent = (chg >= 0 ? "+" : "") + chg.toFixed(2) + "%";
  }
  paintPrice(base, 1.4);
  var buys = document.querySelectorAll(".panel-buttons button");
  buys.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var side = btn.getAttribute("data-side");
      var drift = (Math.random() - 0.45) * 0.0012;
      base = Math.max(0.001, base + drift);
      paintPrice(base, 1.4 + drift * 800);
      if (note) note.textContent = side === "buy"
        ? "Demo buy noted at $" + base.toFixed(4) + ". No real order placed."
        : "Demo sell noted at $" + base.toFixed(4) + ". No real order placed.";
    });
  });

  // Converter
  var bdx = document.getElementById("bdxInput");
  var rate = document.getElementById("rateInput");
  var out = document.getElementById("usdOut");
  var band = document.getElementById("bandOut");
  function bandFor(amount) {
    if (!isFinite(amount) || amount < 0) return "· enter an amount";
    if (amount < 4000) return "· below GNS band";
    if (amount <= 10000) return "· GNS band";
    if (amount <= 16000) return "· Build Up band";
    if (amount <= 30000) return "· Follow Up band";
    if (amount <= 80000) return "· Apex band";
    if (amount <= 150000) return "· Edifex band";
    if (amount <= 220000) return "· Dixon band";
    return "· Falcon band";
  }
  function convert() {
    if (!bdx || !rate || !out) return;
    var a = parseFloat(bdx.value);
    var r = parseFloat(rate.value);
    if (!isFinite(a) || !isFinite(r) || a < 0 || r < 0) {
      out.textContent = "—";
      if (band) band.textContent = "· enter an amount";
      return;
    }
    out.textContent = "$" + (a * r).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (band) band.textContent = bandFor(a);
  }
  if (bdx && rate) {
    bdx.addEventListener("input", convert);
    rate.addEventListener("input", convert);
    convert();
  }

  // Plan filter
  var filterBtns = document.querySelectorAll(".plan-filter button");
  var plans = document.querySelectorAll("#planGrid .plan");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.getAttribute("data-filter");
      plans.forEach(function (p) {
        var d = p.getAttribute("data-duration");
        p.classList.toggle("hidden", f !== "all" && d !== f);
      });
    });
  });

  // Quotes (original placeholder lines)
  var quotes = [
    ["“The demo layout made it easy to compare funding tiers before I read anything else.”", "Practice user, study persona A"],
    ["“I used the converter first, then checked which band my example amount landed in.”", "Practice user, study persona B"]
  ];
  var qi = 0;
  var qt = document.getElementById("quoteText");
  var qb = document.getElementById("quoteBox");
  function show(i) {
    qi = (i + quotes.length) % quotes.length;
    if (qt) qt.textContent = quotes[qi][0];
    if (qb) {
      var foot = qb.querySelector("footer");
      if (foot) foot.innerHTML = "— " + quotes[qi][1];
    }
  }
  var prev = document.getElementById("prevQuote");
  var next = document.getElementById("nextQuote");
  if (prev) prev.addEventListener("click", function () { show(qi - 1); });
  if (next) next.addEventListener("click", function () { show(qi + 1); });
})();
