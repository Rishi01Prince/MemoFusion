from pydantic import BaseModel, ConfigDict, EmailStr
from typing import Optional
from bson import ObjectId

class User(BaseModel):
    id: Optional[ObjectId] = None
    username: str
    email: EmailStr
    hashed_password: str
    is_active: bool = True
    is_superuser: bool = False

    model_config = ConfigDict(
        arbitrary_types_allowed=True,
        json_encoders={ObjectId: str}
    )
