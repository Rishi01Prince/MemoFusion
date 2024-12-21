from pydantic import BaseModel
from typing import Optional, List

class TeamCreate(BaseModel):
    name: str
    description: Optional[str] = None

class TeamRead(BaseModel):
    id: str
    name: str
    description: Optional[str] = None
    members: List[str] = []

class TeamUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
