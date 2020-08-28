# Song Similarity Search Challenge
A Frontend Challenge for potential candidates.

## Overview
The team is looking for new music but is having trouble finding songs that they like. Pandora and Spotify are failing them and they've enlisted your help. Using the API provided below, create a client side application to help Teammates find songs that are similar to those that they already enjoy.

## API
[SearchLy](https://searchly.asuarez.dev/docs/v1) provides an open API for finding songs that are similar based on their lyrical content. As of right now (8/28/2020), they do not required the usage of an API key. Because of this, try to use good manners when consuming the API by using client-side rate limiting best practices.

## Suggested Technologies
* Angular CLI
* Angular Component Library (i.e. Angular Material)

## Requirements
While working on this project, try to keep Angular and Web Development best practices in mind as much as possible. An attempt was made to keep the application simple to leave room for this. Here's a list of a few concepts you might consider when working on the application: 
* How different types of modules might be used (Routed Modules, Feature Modules, etc)
* The differences in responsibilities of the core Angular constructs (Component Controllers, Component Templates, Services, Pipes, Directives, etc)
* Scoping of core Angular Constructs ('Where should this service be scoped?', 'Should this component be declared in my AppModule or in my FeatureModule?')
* Responsive Web Behaviors

### User Stories
*As a* Teammate in search of new music
*I want to* be able to submit a query and be provided a list of results from SearchLy
*So* I can know if SearchLy has any information on my provided query.

*As a* Teammate in search of new music
*I want to* view a list of songs that are similar to my chosen song 
*So* I can broaden my musical horizons.

*As a* Teammate in search of new music
*I want to* be able to get further information on a given song
*So* I can dive deeper.

### Behaviors
*Scenario: Search Known Songs*
*GIVEN* I am viewing the application
*WHEN* I enter my query into the search input
*THEN* display a list of results

*Scenario: Find Related Songs*
*GIVEN* I am viewing a list of songs known by SearchLy
*WHEN* I select a song
*THEN* show me a list of songs that are related
*AND* show me its similarity percentage

*Scenario: Deeper Dive*
*GIVEN* I am viewing a list of related songs
*WHEN* I have external resource links provided by SearchLy
*THEN* ensure I am able to visit those links without destroying the application

*Scenario: Loading States*
*GIVEN* I am interacting with the application
*WHEN* I perform an operation that requires a network request
*THEN* ensure there is visual feedback in the application to show me my data is loading

## Resources
### Wireframes
You are not required to follow these wireframes, but if you would like AN approach on how to build this UI, feel free to use this:
[Interactive Wireframe](https://www.figma.com/file/LSoza6gcKmeGMld9nQgDSg/SearchLy-Wireframes?node-id=0%3A1)

### Images
[Unsplash](https://unsplash.com/)

## Bonus Points
### None of the Following Is Expected
#### Seriously...
##### No, I Mean It.
* Animations
  * List View Animations
  * Router Transitions
  * Micro Interactions
* Light/Dark Mode ('cause fashion 💅)
* Client-Side Sorting of Similarity Results
* ...✨anything your heart desires✨...
