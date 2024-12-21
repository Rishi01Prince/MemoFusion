# app/models/user.py
from pydantic import BaseModel, EmailStr
from typing import Optional
from bson import ObjectId

class UserModel(BaseModel):
    id: Optional[ObjectId]
    email: EmailStr
    hashed_password: str
    is_active: bool = True
    is_superuser: bool = False
