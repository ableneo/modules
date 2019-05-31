---
to: .package.json
sh: cd <%= cwd %> && npx cat package.json > .p.json && npx cat .package.json >> .p.json && npx cat .p.json | npx json --deep-merge > package.json && npx rimraf .package.json .p.json && yarn add -D react-scripts eslint-config-ableneo
---
{
  "scripts": {
    "test": "react-scripts test --watchAll=false",
    "test:changed": "yarn test --onlyChanged --passWithNoTests --silent",
    "test:watch": "react-scripts test",
    "test:update": "yarn test --updateSnapshot",
    "test:coverage": "yarn test --coverage --verbose --passWithNoTests --silent",
    "lintstaged": "lint-staged",
    "lint": "eslint . --cache --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "yarn run prettier && yarn lint --fix",
    "lint:img": "find . -iname '*.gif' -o -iname '*.jpg' -o -iname '*.png' -o -iname '*.jpeg' -o -iname '*.svg' | xargs imagemin-lint-staged",
    "lint:staged": "eslint --fix --max-warnings=0",
    "prettier": "prettier --write **/*.{js,jsx,html,md,mdx,yaml,json,css,scss,less}"
  },
  "devDependencies": {
    "@types/jest": "latest",
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "husky": "^2.1.0",
    "imagemin-lint-staged": "^0.4.0",
    "lint-staged": "^8.x",
    "react-scripts": "^3.x",
    "typescript": "3.3.x"
  },
  "lint-staged": {
    "linters": {
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
    }
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged && yarn test:changed",
      "pre-push": "yarn test:coverage"
    }
  }
}
