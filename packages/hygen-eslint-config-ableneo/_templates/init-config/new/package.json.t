---
to: .package.json
sh: cd <%= cwd %> && npx cat package.json > .p.json && npx cat .package.json >> .p.json && npx cat .p.json | npx json --deep-merge > package.json && npx rimraf .package.json .p.json && yarn add -D react-scripts eslint-config-ableneo
---
{
  "scripts": {
    "test": "react-scripts test --watchAll=false",
    "test:changed": "yarn run test --onlyChanged --passWithNoTests --silent",
    "test:watch": "react-scripts test",
    "test:update": "yarn run test --updateSnapshot",
    "test:coverage": "yarn run test --coverage --verbose --passWithNoTests --silent",
    "lintstaged": "lint-staged",
    "lint": "eslint . --cache --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "yarn run prettier && yarn run lint --fix",
    "lint:img": "find . -iname '*.gif' -o -iname '*.jpg' -o -iname '*.png' -o -iname '*.jpeg' -o -iname '*.svg' | xargs imagemin-lint-staged",
    "lint:staged": "eslint --fix --max-warnings=0",
    "prettier": "prettier --write **/*.{js,jsx,ts,tsx,html,md,mdx,yaml,json,css,scss,less}"
  },
  "devDependencies": {
    "@types/jest": "latest",
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "eslint-config-ableneo": "latest",
    "husky": "^3.0.5",
    "imagemin-lint-staged": "^0.4.0",
    "lint-staged": "^9.2.5",
    "react-scripts": "^3.x",
    "typescript": "3.x"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "yarn run lint:staged",
      "git add"
    ],
    "*.{html,md,mdx,yaml,json,css,scss,less}": [
      "prettier --write",
      "git add"
    ],
    "*.{png,jpeg,jpg,gif,svg}": [
      "imagemin-lint-staged",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged && yarn test:changed",
      "pre-push": "yarn test:coverage"
    }
  }
}
