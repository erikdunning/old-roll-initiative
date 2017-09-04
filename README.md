
### Displays ###

#### Users ####
view user information for a given account authenticated with google

#### Dashboard ####
displays the current encounter for the currect campaign with different options depending on user privelige ( admin or not )

#### QuickRoll ####
on hover name and formula, on click compute roll with library, configurable die icon ( type and color )

## Models ##

#### Campaigns ####
**Campaign**
- id
- name

**CampaignEncounter**
- campaign id
- encounter id

**CampaignUser**
- campign id
- user id
- role

#### Encounters ####
**Encounter**
- id
- name

**EncounterParty**
- party id
- encounter id

#### Parties ####
**Party**
- id
- name

**PartyCharacter**
- party id
- character id

#### Characters ####
**Character**
- type ('npc','pc')
- name,
- height, 
- weight, 
- age,
- size,
- speed, 
- hit points, 
- spell slots ( tick of check boxes? ),
- attributes,
- experience, 
- challenge rating, 
- notes ( Markdown )

### Ideas ###
- Dead players are grayed out
- Integrated calculator for hitpoint value ( value, add, remove )
- Only the creator of a campaign can administrate it ( owned by googleid )