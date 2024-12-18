# How to run
Clone the repo.

## Setting up
Run npm install in both the root and /backend.
( I included .env file here only for this time. )

## Starting Project
Run npm install in both the root and /backend.

## Testing
Run tests on the frontend with npm run test.


## Assumptions
Technical Assumptions:
1. Using Tailwind CSS, React Typescript and Express as server.
2. Tailwind CSS is used for styling, assuming no restrictions on third-party libraries.
3. Only used in Chrome

Functional Assumptions:
1. Search case will be case-insensitive 
2. Pagination will load 10 items by default.
3. The upload bar will not disappear

Data and API Assumptions:
1. All except the id related are displayed in the table.
2. Data is email related.

Component Assumptions
1. Progress Bar might be used in future hence it is saved as a shared component.
2. The data table is just for email tables use in that one place.

Performance assumption:
1. The data will not be too large and this solution is optimized for that size.

Time constraints
1. There was not enough time for me to complete. Wasn't able to write much tests
2. Not mobile responsive.
3. I focused on eliminating prop drilling and containing business logic in only necessary components.

