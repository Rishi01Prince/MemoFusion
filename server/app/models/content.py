from pydantic import BaseModel, ConfigDict
from typing import Optional
from bson import ObjectId

class Content(BaseModel):
    id: Optional[ObjectId] = None
    title: str
    body: str
    team_id: ObjectId

    model_config = ConfigDict(
        arbitrary_types_allowed=True,
        json_encoders={ObjectId: str}
    )
