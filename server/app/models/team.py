from pydantic import BaseModel, ConfigDict
from typing import Optional, List
from bson import ObjectId

class Team(BaseModel):
    id: Optional[ObjectId] = None
    name: str
    description: Optional[str] = None
    members: List[ObjectId] = []

    model_config = ConfigDict(
        arbitrary_types_allowed=True,
        json_encoders={ObjectId: str}
    )
