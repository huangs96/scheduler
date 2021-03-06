# Interview Scheduler

## Project Description

Interview Scheduler is a SPA (Single Page Application) for tracking students interviews built with the latest tools and techniques for optimized user experience. The App utilizes React built-in and custom hooks and allows users to add, edit and delete appointments in real time. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. For quality assurance, the project follows best practices of TDD (Test Driven Development), where individual Components are tested in isolation as well as End-to-End testing is performed.

## Project Features

- Appointment days (Monday to Friday) are displayed and colour-coordinated depending on availability
- The days show the number of slots available as a snapshot of the week
- A user can switch between days and see detailed information
- Booked and available slots are clearly differentiated
- A user can book interviews by typing in a student name and clicking on an interviewer from a list of interviewers
- A user can change the details of an existing interview by pressing the edit icon
- A user can cancel an existing interview, a pop-up message will ask to confirm the action before permanently deleting an interview
- Days display currently remaining spots and capture updates after each modification

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Daily View 

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/99042142/165692631-0b32a1ad-40fd-4b52-b1fe-b199d82ef537.png">

## Book an Appointment

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/99042142/165692578-b1c60824-a3ce-4521-9267-65b84f9db7cc.png">

## No Slots Remaining

<img width="1438" alt="image" src="https://user-images.githubusercontent.com/99042142/165692921-233fd841-3b57-4d2e-b02a-57aa2f4ec563.png">

## Deleting an Appointment

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/99042142/165693191-82503755-1e01-4abb-b88b-c925948b9170.png">


