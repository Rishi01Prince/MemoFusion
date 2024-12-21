from pydantic import BaseModel
from typing import Optional

class ContentCreate(BaseModel):
    title: str
    body: str
    team_id: str

class ContentRead(BaseModel):
    id: str
    title: str
    body: str
    team_id: str

class ContentUpdate(BaseModel):
    title: Optional[str] = None
    body: Optional[str] = None
