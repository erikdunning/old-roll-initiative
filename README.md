
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

Maps an encounter to a campaign

- id
- campaign id
- encounter id

**CampaignUser**

Maps a user to a campaign defining their role
within the campaign.

- id
- campign id
- user id
- role

### Encounters ###

**Encounter**

A given encounter.

- id
- name
- description

**EncounterParty**

Includes a predefined party in an encounter.

- id
- party id
- encounter id

-----------------------------------------

**EncounterInstance**

There may be multiple encounters instantiated at one time, but there may only
be one active encounter for a given campaign at one time.  The idea is to
allow the DM to construct a series of possible encounters.  

- id
- encounter id

**CharacterInstance**

When an encounter is instantiated, a flatten list of PartyCharacters
is computed for all parties involved in the encounter.  For each of these
party characters, a corresponding character instance is created which
contains a copy of all the current values.

- id
- encounter instance id
- party id
- character id
- alias
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

### Parties ###

**Party**
- id
- name

**PartyCharacter**

There could be multiple copies of the same character in a
given party with.  For example, there may be a couple skeleton warriors
in a party with multiple aliases used to differentiate them.
- id
- party id
- character id
- alias

### Characters ###

NPC character attributes come as absolute or computed values.
Player controlled characters exist as singleton entities.  Hit points,
current spell slots, notes, and other information exists as 

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
- Prepopulate database with NPC / PC character definitions via Sequelize fixtures