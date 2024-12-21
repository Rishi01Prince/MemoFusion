from models.team import Team
from db.mongodb import get_db

async def create_team(name: str, description: str):
    db = await get_db()
    team = Team(name=name, description=description)
    db["teams"].insert_one(team.dict())
    return team

async def get_team(team_id: str):
    db = await get_db()
    team = db["teams"].find_one({"_id": team_id})
    if team:
        return Team(**team)
    return None
