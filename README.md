# Logan-Beldex

Organized React/Vite project structure created from the uploaded
`logan-beldex-product_agentic_artifact_1_e084b7584f45.html`.

## Structure

```text
logan-beldex/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── original-bundle.js
│   ├── components/
│   ├── pages/
│   ├── data/
│   │   └── appData.js
│   ├── hooks/
│   │   └── useAppData.js
│   └── styles/
│       └── main.css
├── public/
│   └── original-artifact.html
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Important migration note

The uploaded HTML contains a bundled/minified React application. A safe automatic
split cannot reliably turn generated production JavaScript into maintainable
`pages/` and `components/` without potentially changing behavior.

Therefore this migration:
1. Separates the existing CSS into `src/styles/main.css`.
2. Extracts the existing React bundle unchanged into `src/original-bundle.js`.
3. Extracts identifiable configuration/business values into `src/data/appData.js`.
4. Adds a normal Vite + React project entry point.
5. Adds page/component/hook boundaries ready for a second-pass source refactor.
6. Preserves the original artifact as `public/original-artifact.html`.

## Run

```bash
npm install
npm run dev
```

Then open the local Vite address shown in the terminal.

## Suggested next refactor

Move the actual UI into:
- `src/pages/Login.jsx`
- `src/pages/Register.jsx`
- `src/pages/Dashboard.jsx`
- `src/pages/Deposit.jsx`
- `src/pages/Withdraw.jsx`
- `src/pages/History.jsx`
- `src/pages/Referral.jsx`
- `src/pages/Menu.jsx`

and reusable UI into:
- `src/components/Header.jsx`
- `src/components/BottomNav.jsx`
- `src/components/TransactionList.jsx`
- `src/components/DepositForm.jsx`
- `src/components/WithdrawalForm.jsx`
- `src/components/ReferralCard.jsx`

Do not connect real money movement, deposits, or withdrawals until the backend,
authentication, transaction validation, and compliance/security requirements are
implemented and tested.
