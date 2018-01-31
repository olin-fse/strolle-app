# Strolle

## Project Abstract

A path tracking and sharing app that a allows people to discover and share new runs, walks, and hikes.

## Goals
Nina's Goals: I would like to feel confident with developing and discussing all levels of the stack. I understand that I will not be an expert in all parts but I want to be familiar with the technologies of all the parts. I would love to become competent with SQL because I know I will be using it this summer.

Peter's Goals: I would like to learn more modern web development languages and tools like Node/Express and React to create a more robust web app as well as learn how to scale it well. I also want to build a really well documented API as our base of our backend for our app.

Team Goals: We want to a create well documented, easily scalable project that we come back to reference for further work. We want to work collaboratively by communicating our divisions of labor and communicating frequently our statuses as well as have a portion of our work done as pseudo-partner programming (coding and sitting next to each other potentially not on the same thing).

## Feature Set
- MVP
  - List of paths posted
  - Map
  - Description
  - Distance
  - Creating a new path post
  - Drawing on the map
  - Adding description and title
- Next Steps
    - User accounts
        - Favorites
        - Paths posted
        - etc.
    - Sorting
        - By city/location
        - Length
        - Etc.
    - Tags
- Stretch Goals
    - Searching
    - Reviews
    - Sharing paths (as opposed to posting a path)
    - FB/Twitter integration both for login and for followers

## System Architecture
- Frontend
    - React
        - Our frontend passes a lot of data around and updates info quite frequently, so react was a pretty natural choice.  
- Backend
    - NodeJS
    - Express
        - These two sort of go together and are also sort of natural choices because we wanted to write our app in JS (to learn it) and Express is (as I’ve seen in my reading) a pretty standard option.
- Database
    - MySQL
        - We are using MySQL because it is a relational database that is suited to many types of data. A relational database is more suited to Strolle because of the searching and sorting users will do to find paths.

## Project Timeline
Week 1: Define app functionality, UI, etc. Begin outlining API
Week 2: Define all API requests, Build React components/modules
Week 3: Buffer Week/Catch up
Week 4-5: Integrate and continue feature development

## Risks
Since we don’t know Express/React/MySQL very well (/at all…) we are facing a steep learning curve, so naturally a risk of not learning things is real
Our idea is pretty ambitious (especially considering our skill level) and our MVP includes a lot of functionality as base functionality, so we have to get a lot done to achieve something useable.

## Documentation Plan
We plan to have a read me document on our GitHub that will be updated each week with our progress and which features have been added. There will also be installation instructions on this read me as well.
