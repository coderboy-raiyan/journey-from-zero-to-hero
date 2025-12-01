import cookieParse from 'cookie-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import { pool } from './db';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParse());
app.use(cors({ origin: '*', credentials: true }));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'Server is healthy!',
    });
});

// Users api
app.post('/api/users', async (req: Request, res: Response) => {
    try {
        const { name, email, age, phone } = req.body;
        const result = await pool.query(
            `INSERT INTO users(name, email, age, phone) VALUES($1, $2, $3, $4) RETURNING *`,
            [name, email, age, phone]
        );
        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: result.rows[0],
        });
    } catch (error) {
        return res.status(500).send(error);
    }
});

app.get('/api/users', async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`SELECT * FROM users`);
        return res.status(201).json({
            success: true,
            message: 'All users retrieved successfully',
            data: result.rows[0],
        });
    } catch (error) {
        return res.status(500).send(error);
    }
});

app.patch('/api/users/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const result = await pool.query(
            `UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`,
            [name, email, id]
        );
        if (!result.rows.length) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: result.rows[0],
        });
    } catch (error) {
        return res.status(500).send(error);
    }
});

app.delete('/api/users/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const result = await pool.query(`DELETE FROM users WHERE id=$1 RETURNING *`, [id]);
        if (!result.rows.length) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: result.rows[0],
        });
    } catch (error) {
        return res.status(500).send(error);
    }
});

export default app;
