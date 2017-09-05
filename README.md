
### Displays ###

#### Users ####
view user information for a given account authenticated with google

#### Dashboard ####
displays the current encounter for the currect campaign with different options depending on user privelige ( admin or not )

#### QuickRoll ####
on hover name and formula, on click compute roll with library, configurable die icon ( type and color )

## Models ##

### Users ###
**User**
- google_id
- role

### Campaigns ###
**Campaign**
- id
- name

**CampaignEncounter**
- id
- campaign id
- encounter id

**CampaignUser**
- id
- campign id
- user id
- role

### Encounters ###
**Encounter**
- id
- name

**EncounterParty**
- id
- party id
- encounter id

-----------------------------------------

**EncounterInstance**
- id
- encounter id

**CharacterInstance**
- id
- encounter instance id
- character id

### Parties ###
**Party**
- id
- name

**PartyCharacter**
- id
- party id
- character id

### Characters ###
**Character**
- id 
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

## Ideas ##
- Dead players are grayed out
- Integrated calculator for hitpoint value ( value, add, remove )
- Only the creator of a campaign can administrate it ( owned by googleid )