## 06-17-2019

Goals:
- establish a domain
    IDEAS:
        - Better Ravelry
        - Not Reddit
- establish user stories
- establish models & relationships
- build out Rails API backend
- add serializers
- wire-framing app layout on front-end...an idea of the components we will be using
- use 'create-react-app' to set up project scaffolding
- establish Redux store

Overview

Users should be able to...
- Login? (NOT REQUIRED, CAN HARDCODE)
- Look up Projects/Patterns
- Add Projects to their queue <-- external API?
    - Select if the Project is for a gift or not
- Favorite a project
- Leave comments, suggestions, reviews of Patterns
- Add pics of their completed projects
- Look for Materials for a certain project in nearby stores <-- external API?
- Stretch Feature: Suggested Projects

Models

## _USER_
### Attributes:
    - name, ''
    - username
    - password
    - favorited projects (To do queue), [{},{},{}]
    - Materials Cache

### Relationships:
    - has_many :patterns, through: :projects
    - has_many :materials

---------------------------------
## _PROJECT_
### Attributes:
    - Title, ''
    - Estimated Time to Completion, integer
    - Materials List, ['','','']

### Relationships:
    - belongs_to :user
    - has_many :patterns
    - has_many :materials

---------------------------------
## _PATTERN_ *Joins Users and Projects*
### Attributes:
    - Name, ''
    - Instructions, 'text area'

### Relationships:
    - belongs_to :project
    - has_many :materials

---------------------------------
## _MATERIAL_
### Attributes:
    - name, ''
    - quantity
    - color

### Relationships:
    - belongs_to :user
    - belongs_to :project