from pydantic import BaseModel
from typing import Optional, List
from bson import ObjectId

class Team(BaseModel):
    id: Optional[ObjectId] = None
    name: str
    description: Optional[str] = None
    members: List[ObjectId] = []

    class Config:
        json_encoders = {
            ObjectId: str,
        }
