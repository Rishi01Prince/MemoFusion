from fastapi import APIRouter, Depends, HTTPException, status
from models.team import Team
from schemas.team import TeamCreate, TeamResponse
from services.team_service import create_team, get_team

router = APIRouter()

@router.post("/teams", response_model=TeamResponse)
async def create_new_team(team: TeamCreate):
    new_team = create_team(team)
    return new_team

@router.get("/teams/{team_id}", response_model=TeamResponse)
async def read_team(team_id: str):
    team = get_team(team_id)
    if not team:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Team not found",
        )
    return team
