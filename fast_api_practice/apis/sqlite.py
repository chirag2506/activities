from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session
import models
import schemas
from apis import crud
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

sqlite_router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
# We need to have an independent database session/connection (SessionLocal) per request, 
# use the same session through all the request and then close it after the request is finished.

templates = Jinja2Templates(directory = "templates")

@sqlite_router.post("/sqlite", response_model=schemas.Student)
def create_student(student: schemas.StudentCreate, db: Session = Depends(get_db)):
    return crud.create_student(db=db, student=student)

@sqlite_router.api_route("/sqlite/{student_id}", response_model=schemas.Student, methods=['GET', 'POST'])
def read_student(student_id: int, db: Session = Depends(get_db)):
    db_student = crud.get_student(db, id=student_id)
    if db_student is None:
        raise HTTPException(status_code=404, detail="student not found")
    return db_student

@sqlite_router.post("/enter_student_id")
async def enter_student_id(request: Request):
    return templates.TemplateResponse("enterStudentID.html", {"request": request})