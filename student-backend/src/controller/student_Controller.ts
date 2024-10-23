import { Request, Response } from 'express';
import Student from '../models/student';

// Create a new student
export const createStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (error) {
    res.status(500).send('Error creating student');
  }
};

// Get all students
export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).send('Error fetching students');
  }
};

// Get a single student
export const getStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.findByPk(req.params.id);
    res.json(student);
  } catch (error) {
    res.status(500).send('Error fetching student');
  }
};

// Update a student
export const updateStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(student);
  } catch (error) {
    res.status(500).send('Error updating student');
  }
};

// Delete a student
export const deleteStudent = async (req: Request, res: Response) => {
  try {
    await Student.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).send('Error deleting student');
  }
};