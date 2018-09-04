#!/usr/bin/python3
'''
    Package initializer
'''

from models.base_model import BaseModel
from models.lesson import Lesson
from models.engine.file_storage import FileStorage

classes = {"Lesson": Lesson, "BaseModel": BaseModel}

storage = FileStorage()
storage.reload()