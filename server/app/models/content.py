from pydantic import BaseModel
from typing import Optional
from bson import ObjectId

class Content(BaseModel):
    id: Optional[ObjectId] = None
    title: str
    body: str
    team_id: ObjectId

    class Config:
        json_encoders = {
            ObjectId: str,
        }
