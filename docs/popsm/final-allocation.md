---
id: final-allocation
title: Final Allocation
---

The system will display a summary of FAC and UAC allocation permits as per LGA. And it is in this process users can  apply constraints which affect previously allocated FAC permits in specific LGA or even national ones .

![img alt](/img/fa.png)

### Overview
This page Contains the List of User assisted Cadres (UAC) and Fully automated Cadre (FAC) in LGA basis, where by system allocations are default assignments before applying final constraints and custom allocations are new assignments after applying final constraints.

![img alt](/img/fa2.png)

The view button in the custom allocation column provides a room for users to see all permits assigned on that particular LGA  whether it is FAC or UAC.

![img alt](/img/fa3.png)

There is also a Show cadre view button which gives summary of all cadre which have been assigned with new permits generally without specifying they permits belongs to which LGA.

![img alt](/img/fa4.png)

### Constraints
Final constraints are of different scenarios nationally and LGA based. For LGA users can set cap on amount by LGA, cap on amount per cadre by LGA and cap on supply cadre per LGA. Add constraint button will allow the user to choose between National or LAGA and then set the specifics.

Once select LGA constraint, User will select LGA for constraint to take effect and type of LGA constraint, and then provide the number based on type of constraint if it relates to cadre they should select that cadre first. In order to save the constraint, the user should press the confirm button.

Once constraints have been confirmed it will appear in a list, and above the list there is an apply Constraint button which commands the system to affect the changes in the previous allocations.

If application of constraints changes the previous allocation by reducing some permits in some LGA, or by introducing new permits in New LGA then those changes can be tracked in the overview page specifically on number of rows(list of LGA) and Custom allocation column.

In the final allocation there is only one national constraint use can set which is cap on amount spent by cadre

While setting those constraints, there are some checks as indicated below,  if the user will put some values/number deviating the checks, the system will reject the constraint and prompt the user with a warning message and see example in figure below.

#### Scenario 1 
LGA budget conflicting National Budget - An LGA budget for a specific cadre should not conflict the National Budget that has already been assigned to a cadre

#### Scenario 2 
Minimum of cap amount per LGA should be 0 or greater than the lowest of cadre annual salary

#### Scenario 3 
Minimum of cap amount per cadre by LGA should be 0 or greater than its cadre annual salary

#### Scenario 4
cap supply per cadre should be less or equal to national total maximum available

#### Scenario 5
If cap on amount by LGA is o then there should be 0 amount per cadre by LGA and 0 cap supply per cadre in that particular LGA

#### Scenario 6 
Cap on amount by LGA should not exceed National budget

