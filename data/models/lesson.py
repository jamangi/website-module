#!/usr/bin/python3
'''
    Class representing a lesson
'''
from models.base_model import BaseModel
import models
import os

class Lesson(BaseModel):
    '''
        Definition of the Lesson class
    '''
    number = 0
    title = ''
    purpose = ''
    link = '#'
    visits = {} # str ip : int count