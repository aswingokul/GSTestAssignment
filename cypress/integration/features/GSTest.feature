Feature: Grid Singularity Test Feature

    Feature Description

    Scenario: Scenario name
        Given I launch the d3a login page
        When I type in username and password
        And Click on the sign in button
        Then I must be logged in
        When I click on project icon
        Then I must see the Project window
        When I click on the New Project button
        Then I must see the add new project modal
        When I type a new project name
        And I click on add project button
        Then I open the d3a project site
        Then I must see the newly created project under the projects list
        When I click on the new created project's carat
        Then I should see the New Simulation button displayed
        When I click on the New Simulation button
        Then I should see the new simulation wrapper modal
        When I click on the Next button
        Then I must verify the simulation is added successfully
